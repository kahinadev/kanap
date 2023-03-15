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
                id: result._id,
                quantity: parseInt(document.getElementById('quantity').value),
                colors: document.getElementById('colors').value
            }

            console.log(setProduct, result, document.getElementById('colors'));

            if(!setProduct.colors) {

                alert('Il faut préciser une couleur');

                return; 

            }

            if(!setProduct.quantity) {

                alert('Il faut mettre une quantité');

                return;

            }

            // Initialisation au localStorage

            let storageProduct = JSON.parse(localStorage.getItem('product'));

            if (!storageProduct) {
                
                storageProduct = [];

            }
               
            const index = storageProduct.findIndex(

                (value) => {

                    return value.id === setProduct.id && value.colors === setProduct.colors;

                }

            );

            if(index === -1) {

                storageProduct.push(setProduct);

            } else {

                storageProduct[index].quantity = storageProduct[index].quantity + setProduct.quantity;

            }

            localStorage.setItem('product', JSON.stringify(storageProduct));

        })

    })
    .catch((error) => console.error('error', error))