let productsArray = [];
fetch("./js/books.json").then(response => response.json()).then(data =>
    {
        productsArray = data;
        displayProducts(productsArray);
    })
const wrapper = document.querySelector(".Wrapper");
const productContainer = document.getElementById("Product-container");
const productDescriptions = document.querySelectorAll(".Product-description");
const categoryButtons = document.querySelectorAll(".button-category");
const mainTitle = document.querySelector(".Main-title");
let addButtons = document.querySelectorAll(".Product-description-button");
let productsInCart;
const bookQuantity = document.querySelector(".book-quantity");

function displayProducts(productType)
{
    productContainer.innerHTML="";
    productType.forEach(product =>
    {
        const newProduct = document.createElement("div");
        newProduct.classList.add("Product");
        newProduct.innerHTML = 
        `<img class="Product-img" src="${product.image}" alt="${product.title}">
         <div class="Product-description">
            <h3 class="Product-description-title">${product.title}</h3>
            <p class="Product-description-price">${product.price}</p>
            <button class="Product-description-button" id="${product.id}">Buy <i class="bi bi-hand-thumbs-up-fill"></i></button>
         </div>
        `
        productContainer.append(newProduct);
    })

    actAddButtons();
    changeProductDescriptionBackgroundColor();
}

categoryButtons.forEach(button =>
{
    button.addEventListener("click",(e)=>
    {
        categoryButtons.forEach(button =>
        {
            button.classList.remove("isActive");
        })
        e.currentTarget.classList.add("isActive");

        if(e.currentTarget.id !="all")
        {
            const productCategory = productsArray.find(product => product.category.id === e.currentTarget.id);
            mainTitle.innerText = productCategory.category.name;
            mainTitle.style.color = productCategory.category.color;
            wrapper.style.backgroundColor = productCategory.category.color;
            const productChoosed = productsArray.filter(product => product.category.id === e.currentTarget.id );
            displayProducts(productChoosed);
        }
        else
        {
            mainTitle.innerText = "All the products"
            mainTitle.style.color = "#2c387d";
            wrapper.style.backgroundColor = "#2c387d";
            displayProducts(productsArray);
        }
    })
})

function actAddButtons()
{
    addButtons = document.querySelectorAll(".Product-description-button");

    addButtons.forEach(button =>
    {
        button.addEventListener("click", addToCart);
    })
}

let productsInCartSC = localStorage.getItem("products-inCart");

if(productsInCartSC)
{
    productsInCart = JSON.parse(productsInCartSC);
    updateBooks();
}
else
{
    productsInCart = [];
}

function addToCart (e)
{
    const idButton = e.currentTarget.id;
    const addedProduct = productsArray.find(product => product.id === idButton);

    if(productsInCart.some(product=> product.id === idButton))
    {
       const index = productsInCart.findIndex(product => product.id === idButton);
       productsInCart[index].quantity++;
    }
    else
    {
        addedProduct.quantity = 1;
        productsInCart.push(addedProduct);
    }

    updateBooks();

    localStorage.setItem("products-inCart", JSON.stringify(productsInCart))
}

function updateBooks()
{
    let newbooks = productsInCart.reduce((acc,product)=> acc+product.quantity, 0);
    bookQuantity.innerText = newbooks;   
}

function changeProductDescriptionBackgroundColor() 
{
    productDescriptions.forEach(description => 
    {
      description.style.backgroundColor = productCategory.category.color;
    });
}