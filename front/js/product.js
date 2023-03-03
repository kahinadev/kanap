// Récuperer l'URL DU PRODUIT 

const urlOne = window.location.href;
const one = new URL(urlOne);
const search_params = new URLSearchParams(one.search);

if(search_params.has('id')) {
    let id = search_params.get('id');
    console.log(id)
}

// Recuperer les infos du produit

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

fetch("http://localhost:3000/api/products/{product-ID}", requestOptions) 

    .then((response) => response.json())
    .then((result) => {

        for(const kanap of result) {
            
            const item = document.createElement('item');
            const article = document.createElement('article');

            item.appendChild(article);

            const itemContent = document.createElement('div');
            const itemTitle = document.createElement('div');
            const itemDescription = document.createElement('div');
            const itemSettings = document.createElement('div');

            itemContent.appendChild(itemTitle);
            itemContent.appendChild(itemDescription);
            itemContent.appendChild(itemSettings);

            // Première partie du contenu 

            const h1 = document.createElement('h1');
            itemTitle.appendChild(h1);

            const p = document.createElement('p');
            const span = document.createElement('span');

            p.appendChild(span);

            // Deuxieme partie du contenu 

            const productDescriptionTitle = document.createElement('p');
            const productDescription = document.createElement('p')

            itemDescription.appendChild(productDescriptionTitle);
            itemDescription.appendChild(productDescription);

            // Ajout du contenu 

            h1.innerText = kanap.name;
            h1.setAttribute('id', 'title');

            p.innerText = 'Prix :';

            span.innerText = kanap.price;
            span.setAttribute('id', 'price');

            productDescriptionTitle.innerText = 'Description :';
            productDescription.innerText = kanap.description;

            productDescriptionTitle.setAttribute('class', 'item__content__description__title');
            productDescription.setAttribute('id', 'description');

            console.log(kanap)

        }

    })
    .catch((error) => console.error('error', error))