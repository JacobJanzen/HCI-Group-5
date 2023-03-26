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