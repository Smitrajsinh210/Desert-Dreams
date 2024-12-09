document.addEventListener('DOMContentLoaded',function(){
    const categoryFilter= document.getElementById
    ('category-filter');
    const searchBox = document.getElementById('search-box');
    const products = document.querySelector('.product');

    categoryFilter.addEventListener('change',filterProducts);
    searchBox.addEventListener('input',filterProducts);

    function filterProducts(){
        const category=categoryFilter.value;
        const searchTerm= searchBox.value.toLowerCase();

        products.forEach(product =>{
            const productCategory = product.getAttribute('data-category');
            const productName =product.querySelector('h3').textContent.toLowerCase();

            if((category === 'all' || productCategory === category) && productName.includes(searchTerm)){
                product.style.display='';
            }else{
                product.style.display='none';
            }
        });
    }

});