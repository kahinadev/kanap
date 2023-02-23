var requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

console.log('test');


fetch("http://localhost:3000/api/products", requestOptions) 

    .then((response) => response.json())
    .then((result) => { 
        console.log(result) 

        for(const kanap of result) {

            const a = document.createElement('a');
            const items = document.getElementById('items');
            items.appendChild(a);

            const article = document.createElement('article');
            a.appendChild(article);

            const img = document.createElement('img');
            article.appendChild(img);

            const h3 = document.createElement('h3');
            article.appendChild(h3);

            const p = document.createElement('p');
            article.appendChild(p);

            h3.innerText = kanap.name;
            p.innerText = kanap.description;

            a.setAttribute('href', './product.html?id=' + kanap._id);
            //  `./product.html?id=${kanap._id}`

            img.setAttribute('src', kanap.imageUrl);
            img.setAttribute('alt', kanap.altTxt);
            h3.setAttribute('class', 'productName');
            p.setAttribute('class', 'productDescription');

            console.log(kanap)
        }

        // Récuperer l'URL DU PRODUIT 

        const urlOne = "http://localhost:3000/images/kanap01.jpeg";
        const one = new URL(urlOne);
        const search_params = new URLSearchParams(one.search);

        if(search_params.has('id')) {
            let id = search_params.get('id');
            console.log(id)
        }

    }) 
    .catch((error) => console.log('error', error));

console.log('finish');
