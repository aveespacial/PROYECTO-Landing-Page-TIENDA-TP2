const destacado = JSON.parse(localStorage.getItem("producto"));


const mostrarProducto = document.querySelector("#producto-elegido"); 

const p = document.createElement("p");


function convertirAEstrellas(Puntuación) {
    const estrellasLlenas = Puntuación.length;
    const estrellasVacias = 5 - estrellasLlenas;

    const estrellasHTML = '<span class="estrella-llena">★</span>'.repeat(estrellasLlenas) +
        '<span class="estrella-vacia">☆</span>'.repeat(estrellasVacias);

    return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
}
 
destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
            <h3 class="name">${product.nombre}</h3> </div>
        <div class="imagen-descripcion">
            <img class="imagen" src="${product.imagen}">
            <p class="descriptionLarge">${product.descripcionLarga}</p>
        </div>
        <div>
            <p class="price-product">${product.precio}</p>
           <p>${convertirAEstrellas(product.Puntuación)}</p> 
        </div>
    `;

    mostrarProducto.append(content);
});
