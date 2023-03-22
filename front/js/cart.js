// Création du template de l'article 

const articleItem = document.createElement('article');
const cartItemImg = document.createElement('div');
articleItem.appendChild(cartItem);

const img = document.createElement('img'); 
cartItemImg.appendChild(img); // Ajout de l'image du produit dans la carte

const cartContent = document.createElement('div');
const cartDescription = document.createElement('div');
articleItem.appendChild(cartContent);
cartContent.appendChild(cartDescription);

const h2 = document.createElement('h2');
cartDescription.appendChild(h2);

const pColor = document.createElement('p');
cartDescription.append(pColor)

const price = document.createElement('p');
cartDescription.appendChild(price);

const cartSettings = document.createElement('div');
cartContent.appendChild(cartSettings);

const cartSetQuant = document.createElement('div');
cartSettings.appendChild(cartSetQuant);

const itemSetDelete = document.createElement('div');
cartContent.appendChild(itemSetDelete);

const pDelete = document.createElement('p');
itemSetDelete.appendChild(pDelete);


// Ajout des attributs 

articleItem.setAttribute('class', 'cart__item');
cartItemImg.setAttribute('class', 'cart__item__img');
img.setAttribute('src', kanap.imageUrl);
img.setAttribute('alt', kanap.altTxt);

cartContent.setAttribute('class', 'cart__item__content');
cartDescription.setAttribute('class', 'cart__item__content__description');

cartSettings.setAttribute('class', 'cart__item__content__settings');
cartSetQuant.setAttribute('class', 'cart__item__content__settings_quantity');

itemSetDelete.setAttribute('class', 'cart__item__content__settings__delete');
pDelete.setAttribute('class', 'deleteItem');







