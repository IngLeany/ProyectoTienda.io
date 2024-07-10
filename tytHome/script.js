 
function displayProductos(productList) {
    let productosHTML ='';
    productList.forEach(element => {
        productosHTML +=
       ` <div class="block-4 text-center border">
                  <figure class="block-2-image">
                    <a href="shop-single.html"><img src="${element.image}" alt="Image placeholder" class="img-fluid"></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a href="shop-single.html">${element.name}</a></h3>
                    <p class="text-secondary font-weight-bold">$${element.price}</p>
                  </div>
                </div>`
        document.getElementById('page-content').innerHTML = productosHTML;
    });

}

window.onload = async () => {
    const productList = await (await fetch("/api/productos")).json();
    console.log(productList);
    displayProductos(productList);
}
