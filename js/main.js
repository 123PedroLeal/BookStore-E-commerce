const productsArray = 
[
    {
        id: "Book-SD-01",
        title: "Software Development 1",
        image: "./assets/Software-development/Sd-book-1.jpg",
        category: 
        {
            name:"Software-Development",
            id:"software-development"
        },
        price: 1000
    },
    {
        id: "Book-SD-02",
        title: "Software Development 2",
        image: "./assets/Software-development/Sd-book-2.jpg",
        category: 
        {
            name:"Software-Development",
            id:"software-development"
        },
        price: 2000
    },
    {
        id: "Book-SD-03",
        title: "Software Development 3",
        image: "./assets/Software-development/Sd-book-3.jpg",
        category: 
        {
            name:"Software-Development",
            id:"software-development"
        },
        price: 3000
    },
    {
        id: "Book-SD-04",
        title: "Software Development 4",
        image: "./assets/Software-development/Sd-book-4.jpg",
        category: 
        {
            name:"Software-Development",
            id:"software-development"
        },
        price: 4000
    },

    {
        id: "Book-DS-01",
        title: "Data Science 1",
        image: "./assets/Data-Science/DS-1.jpg",
        category: 
        {
            name:"Data-Science",
            id:"data-science"
        },
        price: 1000
    },
    {
        id: "Book-DS-02",
        title: "Data Science 2",
        image: "./assets/Data-Science/DS-2.jpg",
        category: 
        {
            name:"Data-Science",
            id:"data-science"
        },
        price: 2000
    },
    {
        id: "Book-DS-03",
        title: "Data Science 3",
        image: "./assets/Data-Science/DS-3.jpg",
        category: 
        {
            name:"Data-Science",
            id:"data-science"
        },
        price: 3000
    },
    {
        id: "Book-DS-04",
        title: "Data Science 4",
        image: "./assets/Data-Science/DS-4.jpg",
        category: 
        {
            name:"Data-Science",
            id:"data-science"
        },
        price: 4000
    },

    {
        id: "Math-1",
        title: "Math 1",
        image: "./assets/Math/Math-1.jpg",
        category: 
        {
            name:"Math",
            id:"math"
        },
        price: 1000
    },
    {
        id: "Math-2",
        title: "Math 2",
        image: "./assets/Math/Math-2.jpg",
        category: 
        {
            name:"Math",
            id:"math"
        },
        price: 2000
    },
    {
        id: "Math-3",
        title: "Math 3",
        image: "./assets/Math/Math-3.jpg",
        category: 
        {
            name:"Math",
            id:"math"
        },
        price: 3000
    },
    {
        id: "Math-4",
        title: "Math 4",
        image: "./assets/Math/Math-4.jpg",
        category: 
        {
            name:"Math",
            id:"math"
        },
        price: 4000
    },

    {
        id: "Phy-1",
        title: "Phylosophy 1",
        image: "./assets/Philosophy/Phy-1.jpg",
        category: 
        {
            name:"Phylosophy",
            id:"phylosophy"
        },
        price: 1000
    },
    {
        id: "Phy-2",
        title: "Phylosophy 2",
        image: "./assets/Philosophy/Phy-2.jpg",
        category: 
        {
            name:"Phylosophy",
            id:"phylosophy"
        },
        price: 2000
    },
    {
        id: "Phy-3",
        title: "Phylosophy 3",
        image: "./assets/Philosophy/Phy-3.jpg",
        category: 
        {
            name:"Phylosophy",
            id:"phylosophy"
        },
        price: 3000
    },
    {
        id: "Phy-4",
        title: "Phylosophy 4",
        image: "./assets/Philosophy/Phy-4.jpg",
        category: 
        {
            name:"Phylosophy",
            id:"phylosophy"
        },
        price: 4000
    },

    {
        id: "Cook-1",
        title: "Cooking 1",
        image: "./assets/Cooking/Cook-1.jpg",
        category: 
        {
            name:"Cooking",
            id:"cooking"
        },
        price: 1000
    },
    {
        id: "Cook-2",
        title: "Cooking 2",
        image: "./assets/Cooking/Cook-2.jpg",
        category: 
        {
            name:"Cooking",
            id:"cooking"
        },
        price: 2000
    },
    {
        id: "Cook-3",
        title: "Cooking 3",
        image: "./assets/Cooking/Cook-3.jpg",
        category: 
        {
            name:"Cooking",
            id:"cooking"
        },
        price: 3000
    },
    {
        id: "Cook-4",
        title: "Cooking 4",
        image: "./assets/Cooking/Cook-4.jpg",
        category: 
        {
            name:"Cooking",
            id:"cooking"
        },
        price: 4000
    }
]

const productContainer = document.getElementById("Product-container");
const categoryButtons = document.querySelectorAll(".button-category");
const mainTitle = document.querySelector(".Main-title");
let addButtons = document.querySelectorAll(".Product-description-button");
let productsInCart;
const bookQuantity = document.querySelector(".book-quantity")

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
            <button class="Product-description-button" id="${product.id}">Add</button>
         </div>
        `

        productContainer.append(newProduct);
    })

    actAddButtons();
}

displayProducts(productsArray);

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
            const productChoosed = productsArray.filter(product => product.category.id === e.currentTarget.id );
            displayProducts(productChoosed);
        }
        else
        {
            mainTitle.innerText = "All the products"
            displayProducts(productsArray);
        }
    })
})

function actAddButtons()
{
    addButtons = document.querySelectorAll(".Product-description-button");

    addButtons.forEach(button =>
    {
        button.addEventListener("click", addToCart)
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