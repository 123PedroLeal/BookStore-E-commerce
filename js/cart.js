let productsInCart = localStorage.getItem("products-inCart");
productsInCart = JSON.parse(productsInCart);
const cartEmpty = document.getElementById("Cart-empty");
const cartContainer = document.getElementById("Cart-product-container");
const cartActions = document.getElementById("Cart-actions");
const cartBuy = document.getElementById("Cart-buy");
let deleteButtons = document.querySelector(".Cart-product-delete");
const emptyButton = document.querySelector(".button-empty");
const buyButton = document.querySelector(".button-buy");
const mainTotal = document.getElementById("Total");

function displayProductsInCart()
{
    if(productsInCart && productsInCart.length>0)
    {
        cartEmpty.classList.add("u-d-none");
        cartContainer.classList.remove("u-d-none");
        cartActions.classList.remove("u-d-none");
        cartBuy.classList.add("u-d-none");

        cartContainer.innerHTML="";

        productsInCart.forEach(product => 
        {
            const productToBuy = document.createElement("div");
            productToBuy.classList.add("Cart-product");
            productToBuy.innerHTML = 
            `
            <img class="Cart-product-image" src="${product.image}" alt="${product.title}">
            <div class="Cart-product-title">
                <small>Title</small>
                <h3>${product.title}</h3>
            </div>
            <div class="Cart-product-quantity">
                <small>Quantity</small>
                <h3>${product.quantity}</h3>
            </div>
            <div class="Cart-product-price">
                <small>Price</small>
                <h3>${product.price}</h3>
            </div>
            <div class="Cart-product-total">
                <small>Total</small>
                <h3>${product.price * product.quantity}</h3>
            </div>
            <button class="u-button Cart-product-delete" id="${product.id}">
                <i class="bi bi-trash3-fill"></i>
            </button>
            `;

            cartContainer.append(productToBuy);
        })    
    }
    else
    {
        cartEmpty.classList.remove("u-d-none");
        cartContainer.classList.add("u-d-none");
        cartActions.classList.add("u-d-none");
        cartBuy.classList.add("u-d-none");
    }
    actDeleteButtons();
    updateMainTotal();
}

displayProductsInCart();

function actDeleteButtons()
{
    deleteButtons = document.querySelectorAll(".Cart-product-delete");
    deleteButtons.forEach(button => button.addEventListener("click", deleteFromCart))
};

function deleteFromCart(e)
{
    const idButton = e.currentTarget.id;
    const index = productsInCart.findIndex(product => product.id === idButton);

    productsInCart.splice(index,1);
    displayProductsInCart();
    localStorage.setItem("products-inCart", JSON.stringify(productsInCart));
};

emptyButton.addEventListener("click", () =>
{
    productsInCart.length = 0;
    localStorage.setItem("products-inCart", JSON.stringify(productsInCart));
    displayProductsInCart();
});

function updateMainTotal()
{
    const mainTotalCalculus = productsInCart.reduce((acc,product) => acc + (product.quantity * product.price),0);
    mainTotal.innerText = `$${mainTotalCalculus}`;  
};

buyButton.addEventListener("click", () =>
{
    productsInCart.length = 0;
    localStorage.setItem("products-inCart", JSON.stringify(productsInCart));
    cartEmpty.classList.add("u-d-none");
    cartContainer.classList.add("u-d-none");
    cartActions.classList.add("u-d-none");
    cartBuy.classList.remove("u-d-none");
});