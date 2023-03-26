function updateCart() {
    const cartContainer = document.createElement("div")
    cartContainer.setAttribute("class", "cart-container")
    cartContainer.setAttribute("id", "cart-container")

    const totals = document.createElement("div")
    totals.setAttribute("id", "totals")

    let subtotal = 0

    Object.keys(cart).forEach((k) => {
        const price = cart[k].num * cart[k].item.price
        subtotal += price
        cartContainer.appendChild(createCartItem(k,price))
    })

    const subtotalNode = document.createElement("p")
    const subtotalText = document.createTextNode("Subtotal: $" + subtotal.toFixed(2))
    subtotalNode.appendChild(subtotalText)
    totals.appendChild(subtotalNode)
    global_subtotal = subtotal

    const taxNode = document.createElement("p")
    const taxText = document.createTextNode("Tax: $" + (subtotal * 0.12).toFixed(2))
    taxNode.appendChild(taxText)
    totals.appendChild(taxNode)
    global_tax = subtotal * 0.12

    const totalNode = document.createElement("p")
    const totalText = document.createTextNode("Total: $" + (subtotal * 1.12).toFixed(2))
    totalNode.appendChild(totalText)
    totals.appendChild(totalNode)
    global_total = subtotal * 1.12

    document.getElementById("cart-container").replaceWith(cartContainer)
    document.getElementById("totals").replaceWith(totals)

    //adjust bottom
    cartBottomAdjust()
}


function cartBottomAdjust(){
    const cart = document.querySelector(".cart");
    const adjustment = document.querySelector(".cart-container").clientHeight + 
    document.querySelector(".payment").clientHeight + 
    document.querySelector("#totals").clientHeight;

    if( !cart.classList.contains('cartActive'))
        cart.style.bottom = `${(adjustment *-1)-9}px`
    else
        cart.style.bottom = 0
}


function createCartItem(k,price){
    const container = createElem('div',['cartItemContainer'])
    const info1 = createElem();
    const info2 = createElem();
    const button = createElem('button',['removeItemContainer'])

    info1.innerHTML = `<h4> ${k} </h4>
                        <p> $${cart[k].item["price"]}/${cart[k].item['sold-in']} </p>`

    info2.innerHTML = `<p> Amount: ${cart[k].num} </p>
                       <p> Total Price: $${price.toFixed(2)} </p>` 

    button.innerHTML = '&#10006;';
    button.addEventListener("click", () => {
        delete cart[k]
        updateCart()
    })

    container.append(info1,info2,button)
    return container
}