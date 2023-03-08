// Récuperer l'URL DU PRODUIT 

const urlOne = window.location.href;
const one = new URL(urlOne);
const search_params = new URLSearchParams(one.search);

let id = search_params.get('id');

// Recuperer les infos du produit

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

fetch("http://localhost:3000/api/products/" + id, requestOptions) 

    .then((response) => response.json())
    .then((result) => {

        const h1 = document.getElementById('title');

        h1.innerText = result.name;

        const span = document.getElementById("price");

        span.innerText = result.price;

        const description = document.getElementById("description");
        description.innerText = result.description;

        const imgProduct = document.getElementById("img-product");
        imgProduct.setAttribute('src', result.imageUrl);
        imgProduct.setAttribute('alt', result.altTxt);

        const select = document.getElementById('colors');

        for(const color of result.colors) {

            const option = document.createElement('option');
            option.innerText = color;

            option.setAttribute('value', color);

            select.appendChild(option);
            
        }

        // Ajout du produit au panier

        const button = document.getElementById('addToCart');

        button.addEventListener('click', () => {

            const setProduct = {
                id: result.productId,
                quantity: document.getElementById('quantity').value,
                colors: document.getElementById('colors').value
            }

            // Initialisation au localStorage

            const storageProduct = JSON.parse(localStorage.getItem('product'));

            if(storageProduct) {

                storageProduct.push(setProduct);
                localStorage.setItem('product', JSON.stringify(storageProduct));
                
            } else {

                storageProduct = [];
                storageProduct.push(setProduct);
                console.log(storageProduct);
                localStorage.setItem('product', JSON.stringify(storageProduct));

            }

        })

    })
    .catch((error) => console.error('error', error))