/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from './lazy.js';

const maximun = 122;
const minimun = 1;

const random = () => { 
    return Math.floor(Math.random() * (maximun - minimun)) + minimun;
}


//Crear imagenes

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'mx-auto d-block';
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;	

    container.appendChild(image);
    return container;
}


const createImage = createImageNode();

const mountNode = document.getElementById('images');
const addButton = document.querySelector('#btnImage');

const addImage = () => { 
    console.log('addImage');
    const newImage = createImageNode(); 
    mountNode.append(newImage);
    registerImage(newImage);
}
addButton.addEventListener('click', addImage);
