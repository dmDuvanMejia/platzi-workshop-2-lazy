const isIntersecting = ( entry ) => {
    return entry.isIntersecting; //True (dentro de la pantalla)
}

const loadImage = ( entry ) => {
    const container = entry.target; //Div
    const image = container.firstChild;//container.querySelector('img'); //Imagen
    const url = image.dataset.src; //url de la imagen

    //Cargue de la imagen 
    image.src = url;
    console.log('loadImage');
	
    //Desregistra la imagen o deja de escuchar
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter( isIntersecting  )
    .forEach( loadImage );
    
});

//Crear funcion registrar imagen
export const registerImage = (image) => {
    //IntersectationObserver
   observer.observe(image);
}
