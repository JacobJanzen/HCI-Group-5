function init() {
    cartSlide()
    updateSearchType()
    cartBottomAdjust()

    document.getElementById("to-checkout").addEventListener("click", () => {
        resetSearch()
        checkout()
    })

    document.getElementById("products-menu-item").addEventListener("click", () => {
        resetSearch()
        backToProducts()
    })

    document.getElementById("categories-menu-item").addEventListener("click", () => {
        resetSearch()
        showCategories()
    })

    document.getElementById("about-menu-item").addEventListener("click", () => {
        resetSearch()
        aboutUs()
    })

    document.getElementById("deals-menu-item").addEventListener("click", () => {
        resetSearch()
        deals()
    })

    document.getElementById("logo").addEventListener("click", () => {
        resetSearch()
        backToProducts()
    })
    document.getElementById("searchbar").addEventListener("keyup", () => {
        updateListViaSearch(document.getElementById("searchbar"), items)
    })

    updateProductList("",'all',items)
}


function updateListViaSearch(bar,items){
    const text = bar.value
    const type = bar.searchBy

    updateProductList(text,type,items)
}

function updateProductList(text, type, items) {
    const newDiv = document.createElement("div")
    let count = 0
    newDiv.setAttribute("class", "itemlist")
    newDiv.setAttribute("id", "main")
    items.forEach(item => {
        let matchCategory = false
        item.category.forEach(category => {
            matchCategory = matchCategory || category.toLowerCase().includes(text.toLowerCase())
        })
        if ( (type=='all' && (item.name.toLowerCase().includes(text.toLowerCase()) || matchCategory)) ||
            (type=='product' && item.name.toLowerCase().includes(text.toLowerCase()) ) ||
             (type=='category' && matchCategory) ) {
            newDiv.appendChild(createCard(item))
            count++
        }
    })

    if (count === 0) {
        const header = document.createElement("H2")
        const msg = document.createTextNode(`'${text}' Not Found`)
        header.appendChild(msg)
        newDiv.appendChild(header)
    }

    const currentDiv = document.querySelector(".itemlist")
    currentDiv.replaceWith(newDiv)
}


function backToProducts() {
    const main = document.createElement("div")
    main.setAttribute("class", "itemlist")
    main.setAttribute("id", "main")

    document.getElementById("main").replaceWith(main)
    updateProductList('','all', items)
}


function aboutUs() {
    const main = document.createElement("div")
    main.setAttribute("class", "about-us")
    main.setAttribute("id", "main")
    main.innerHTML = `
    <p>At Bison Mart we aren't your average local grocery store. We want your shopping experinece to be simple, efficient and fun. We recognize that shopping for groceries is seen as a mundane, obligatory task that must be completed week after week. We are on a mission to change that.</p>
            <p>We were founded by a group of students studying Computer Science at the University of Manitoba. We were chronically exhausted, overworked and overwhelmed. The last thing we needed was the added stressor of grocery shopping, planning, cooking and meal prepping. We wanted a streamlined experience. We wanted to spend less time planning and more time eating good food.
            <p>This vision gave rise to Bison Mart.</p>
            <p>We want you to have fun. We want you to have more time. We want you to be healthy and happy. If this in line with your goals, you have come to the right place</p>
    `

    document.getElementById("main").replaceWith(main)
}


function showProduct(name) {
    backToProducts()
    updateProductList(name,'all', items)
}


function deals() {
    const main = document.createElement("div")
    main.setAttribute("class", "center")
    main.setAttribute("id", "main")
    main.innerHTML = `
<img src = "./flyerimages/Cilantro.png" alt="cilantro-deal" onclick="showProduct('cilantro')"/>
<img src = "./flyerimages/Carrots.png" alt="carrots-deal" onclick="showProduct('carrot')"/>
<img src = "./flyerimages/Bison.png" alt="bison-deal" onclick="showProduct('bison')"/>
<img src = "./flyerimages/Apples.png" alt="apples-deal" onclick="showProduct('apple')"/>
    `

    document.getElementById("main").replaceWith(main)
}

function checkout() {
    const main = document.createElement("div")
    main.setAttribute("class", "checkout-body")
    main.setAttribute("id", "main")
    main.innerHTML = `
    <form class="checkout-form">
      <div class="section">
        <span><input id="first-name" type="text" required class="checkout-input" placeholder="First Name"/> 
        <input id="last-name" name="last-name" type="text" required class="checkout-input" placeholder="Last Name"/></span>
        <input id="email" name="email" type="email" required class="checkout-input" placeholder="Email (johnDoe123@domain.com"/>
        <input id="address" placeholder="Address Include:(apt, suite, or floor number here)" type="text" required class="checkout-input"/>
        <span><input id="city" placeholder="City" type="text" required class="checkout-input"/>
        <select id="province" class="checkout-input">
            <option value selected disabled>Province</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NT">Northwest Territories</option>
            <option value="NS">Nova Scotia</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon Territory</option>
          </select> </span>

        <br>

        <input id="credit card" type="text" required class="checkout-input" placeholder="Credit Card Number"/>
        <input id="name-on-card" type="text" required class="checkout-input" placeholder="Name on Card"/>
        <span><input id="expiry" type="text" required class="checkout-input" placeholder="Expiry: MM/YY"/>
        <input id="security" type="text" required class="checkout-input" placeholder="Security Code"/></span>
        
        <br>
          <div class="billing-address">Billing address</div>
          <div>
            <input class="checkbox" id="billing-address" type="checkbox" required class="checkout-input"/> 
            <label class="checkbox" for="billing-address">Same as shipping</label>
          </div>
      </div>
      <div class="lineBreak"></div>
      <div class="section">
        <div class="order-summary">
           <p class="SubTotal"><b>Subtotal:</b> &nbsp; $${global_subtotal.toFixed(2)}</p>
          <p class="taxlabel"><b>Tax:</b> &nbsp; $${global_tax.toFixed(2)}</p>
          <p class="total-label"><b>Total: &nbsp; $${global_total.toFixed(2)}</b></p>
          </div>
          <input type="submit" value="Place Order" class="checkout-submit"/>
      </div>
    </form>
    `

    document.getElementById("main").replaceWith(main)
}

function showCategories() {
    const main = document.createElement("div")
    main.setAttribute("class", "center")
    main.setAttribute("id", "main")

    categories.forEach(category => {
        const newDiv = createElem("div",['categoryItem'])
        const img = document.createElement("img")
        img.setAttribute("src", `images/cat/${category.toLowerCase()}.png`)
        const categoryTitle = document.createElement("H3")
        const categoryTitleText = document.createTextNode(category)
        categoryTitle.appendChild(categoryTitleText)
        newDiv.appendChild(img)
        newDiv.appendChild(categoryTitle)

        newDiv.addEventListener("click", () => {
            backToProducts()
            updateProductList(category, "category", items)
        })

        main.appendChild(newDiv)
    })

    document.getElementById("main").replaceWith(main)
}



function cartSlide(){
    const cart = document.querySelector(".cart")
    const bttn = document.querySelector(".cart-button")
    bttn.addEventListener('click',()=>{
        cart.classList.toggle("cartActive")
        cartBottomAdjust()
    })
}

function updateSearchType(){
    const selectB = document.getElementById("search-type")
    const searchBar = document.getElementById("searchbar")

    searchBar.searchBy = 'all' // set default
    selectB.addEventListener("change",()=>{
        (selectB.value == 'all') && (searchBar.placeholder = "Search");
        (selectB.value == 'product') && (searchBar.placeholder = "Search for products");
        (selectB.value == 'category') && (searchBar.placeholder = "Search for category");
        searchBar.searchBy = selectB.value
    })
}

function resetSearch(){
    const selectB = document.getElementById("search-type")
    const searchBar = document.getElementById("searchbar")

    selectB.value = 'all';
    searchBar.searchBy = selectB.value // set default
    searchBar.placeholder = 'Search' // set default
}



window.addEventListener("load", init)
