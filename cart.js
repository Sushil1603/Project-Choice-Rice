let data = [
    {
        Name: "Futuredew",
        content: "Oil serum hybrid",
        ProdImg:
            "https://glossier-prod.imgix.net/files/glossier-ylgcap-carousel-01.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/futureDue/futuredew-2.avif",
        price: 26,
        id: 1
    },
    {
        Name: "Balm-Dotcom",
        content: "Oil serum hybrid",
        ProdImg:
            "https://glossier-prod.imgix.net/products/glossier-greysweatshirt-carousel-01-updated.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/Balm-dotcom/Hover.avif",
        price: 26,
        id: 2
    },
    {
        Name: "Milkey Jelly Cleanser",
        content: "Universal Salve",
        ProdImg:
            "https://glossier-prod.imgix.net/products/glossier-pinkhoodie-carousel-01.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/Milkey-jelly-cleanser/hover.avif",
        price: 14,
        id: 3
    },
    {
        Name: "Cleanser Concentrate",
        content: "Clarifying face wash",
        ProdImg:
            "https://glossier-prod.imgix.net/products/glossier-beautybag-carousel-01.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/Cleanser-Concentrate/hover.avif",
        price: 19,
        id: 4
    },

    {
        Name: "Priming Moisturizer",
        content: "Buildable hydrating creme",
        ProdImg:
            "https://glossier-prod.imgix.net/files/glossier-dufflebag-carousel-01.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/Priming-mosturiser/hover.avif",
        price: 24,
        id: 5
    },
    {
        Name: "Priming Moisturizer Balance",
        content: "Oil-Control Gel Cream",
        ProdImg:
            "https://glossier-prod.imgix.net/files/glossier-waterbottle-carousel-01_89aca6a5-75ef-471f-8e03-1197e2aeb13a.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/primaring-mosturizer-balance/hover.avif",
        price: 25,
        id: 6
    },
    {
        Name: "Priming Moisturizer Rich",
        content: "Luxurious face cream",
        ProdImg:
            "https://glossier-prod.imgix.net/products/glossier-futuredew-carousel-01.png?auto=compress,format&cs=srgb&w=540",
        actor: "/Product-Page/Images/priming-mosturizer-rich/hover.avif",
        price: 35,
        id: 7
    }
    // {
    //   Name: "Invisible Shield",
    //   content: "Daily sunscreen +",
    //   ProdImg:
    //     "/Product-Page/Images/invisible-shileld/glossier-invisible-shield-carousel-01_f6471fa7-9197-4c39-8cec-00ab11b7691b.avif",
    //   actor: "/Product-Page/Images/invisible-shileld/hover.avif",
    //   price: 25,
    //   id : 8
    // },
    // {
    //   Name: "After Baume",
    //   content: "Moisture barrier recovery cream",
    //   ProdImg:
    //     "/Product-Page/Images/after-baume/glossier-after-baume-carousel-01_23fe78f1-1917-42e6-9448-b7f44e65acfc.avif",
    //   actor: "/Product-Page/Images/after-baume/hover.avif",
    //   price: 28,
    //   id : 9
    // },
    // {
    //   Name: "Milky Jelly Cleanser + Futuredew",
    //   content: "Conditioning face wash + oil-serum hybrid",
    //   ProdImg: "/Product-Page/Images/Milky-Jelly/glossier-mjc-carousel-01.avif",
    //   actor: "/Product-Page/Images/Milky-Jelly/hover.avif",
    //   price: 41,
    //   id : 10
    // },
    // {
    //   Name: "Balm Dotcom Trio",
    //   content: "Choose three balms",
    //   ProdImg:
    //     "/Product-Page/Images/Balm-dotcom-trio/glossier-bdctrio-carousel-01.avif",
    //   actor:
    //     "/Product-Page/Images/Balm-dotcom-trio/glossier-bdctrio-carousel-02.avif",
    //   price: 36,
    //   id : 11
    // },
    // {
    //   Name: "Solution",
    //   content: "Choose three balms",
    //   ProdImg: "/Product-Page/Images/Solution/glossier-solution-carousel-01.avif",
    //   actor: "/Product-Page/Images/Solution/hover.avif",
    //   price: 26,
    //   id : 12
    // },
    // {
    //   Name: "Super Glow",
    //   content: "Vitamin c + magnesium serum",
    //   ProdImg:
    //     "/Product-Page/Images/Balm-dotcom/glossier-bdc-wildfig-carousel-01.avif",
    //   actor: "/Product-Page/Images/Milkey-jelly-cleanser/hover.avif",
    //   price: 29,
    //   id : 13
    // },
];

//   let cartArr = [];

//   data.forEach((element)=>{
//      cartArr.push(element);
//      localStorage.setItem("cartArr", JSON.stringify(cartArr));
//   })

let productContainer = document.getElementById("product-list-container")

let totalCartProducts = document.getElementById("totalItem")
let totalPriceHTMl = document.getElementById("totalPrice");
let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
let shippingChargMsg = document.getElementById("shippingCharges");
// let decreaseQuantity = document.getElementById("decrease");
// let increaseQuantity = document.getElementById("increase");

let totalPrice;

let shippingCharges;
let cartProductArr = [];

cartArr.forEach((element) => {
    let obj = { ...element }
    obj.quantity = 1;
    obj.totalPrice = element.price

    cartProductArr.push(obj)
})
console.log(cartProductArr)


function getData() {
    let data = cartProductArr;


    if (cartProductArr.length > 0) {
        displayData(data);
    }
    else {
        document.getElementById("product-section").innerHTML = `
        <div id="emptyCartMsg">
        Your bag is empty,
        <br>
        but you still look good.
    </div>`

        document.getElementById("checkout").style.display = "none";
    }
}
getData();
function displayData(data) {
    productContainer.innerHTML = "";
    data.forEach((element, index) => {

        let card = document.createElement("div");
        card.className = "card";

        let crossIcon = document.createElement("div")
        let p = document.createElement("p")
        p.className = "crossIcon";
        p.innerHTML = `&times;`
        crossIcon.append(p);

        crossIcon.addEventListener("click", () => {
            cartProductArr.splice(index, 1);
            totalPrice = totalPrice - Number(element.price)
            totalPriceHTMl.textContent = totalPrice;
            shipping();
            displayData(cartProductArr);
        })
        let cardContent = document.createElement("div")
        cardContent.className = "card-content";
        cardContent.style.width = "100%"

        let cardImg = document.createElement("div")
        cardImg.className = "cardImg";
        let img = document.createElement("img")
        img.src = element.ProdImg;
        img.alt = element.Name;
        cardImg.append(img);

        let cardBody = document.createElement("div")
        cardBody.className = "cardBody";

        let cardBodyLeft = document.createElement("div")
        cardBodyLeft.className = "cardBodyLeft";

        let cardTitle = document.createElement("p")
        cardTitle.className = "cardTitle"
        cardTitle.textContent = element.content;

        let cartBtn = document.createElement("div")
        cartBtn.className = "cart-btn";
        let decrease = document.createElement("span")
        decrease.classList.add("decrease", "pointer");
        decrease.innerHTML = "&#8722;";

        decrease.addEventListener("click", () => {
            if (element.quantity > 1) {
                element.quantity--;
                element.totalPrice -= element.price;
                totalPrice = totalPrice - Number(element.price)
                
                displayData(cartProductArr);
                shipping();
            }
            else {
                cartProductArr.splice(index, 1);

                
                totalPrice = totalPrice - Number(element.price)
                totalPriceHTMl.textContent = totalPrice;
                displayData(cartProductArr);
                shipping();
            }

        })

        let noOfProducts = document.createElement("span")
        noOfProducts.className = "noOfProducts";
        noOfProducts.textContent = element.quantity;

        let increase = document.createElement("span")
        increase.classList.add("increase");
        increase.classList.add("pointer");

        increase.addEventListener("click", () => {
            element.quantity++;
            element.totalPrice += element.price;
            totalPrice = totalPrice + Number(element.price)
            totalPriceHTMl.textContent = totalPrice;
            shipping();
            displayData(cartProductArr);
        })

        increase.textContent = "+";

        cartBtn.append(decrease, noOfProducts, increase);

        cardBodyLeft.append(cardTitle, cartBtn);

        let cardBodyRight = document.createElement("div")
        cardBodyRight.className = "cardBodyRight";
        let i = document.createElement("i")
        i.classList.add("fa-sharp", "fa-regular", "fa-heart")

        let cartPrice = document.createElement("p")
        cartPrice.className = "cartPrice";
        cartPrice.textContent = `$${element.price}`

        cardBodyRight.append(i, cartPrice)

        cardBody.append(cardBodyLeft, cardBodyRight)
        cardContent.append(cardImg, cardBody)
        card.append(crossIcon, cardContent)


        productContainer.append(card);
    })
}

if (cartArr.length === 0) {
    totalCartProducts.textContent = "";
}
else {
    totalCartProducts.textContent = `(${cartArr.length} items)`;
}

totalPrice = cartProductArr.reduce((acc, currentElement) => {
    return acc += Number(currentElement.totalPrice);
}, 0)

function shipping() {
    if (totalPrice > 40) {
        shippingCharges = 0;
    }
    else {
        shippingCharges = 40 - totalPrice;
        shippingChargMsg.textContent = `$${shippingCharges} away from free standard shipping`
    }
}
shipping();


totalPriceHTMl.textContent = totalPrice;




