import { hideLoading, parseRequestUrl, showLoading } from '../utilis';
import { getProduct } from '../api';

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById('add-cart').addEventListener('click', () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<h1> ${product.error}</h1>`;
    }
    hideLoading();
    return `
    <section class="productScreen-section">

    <div class="row productScreen-row">
        <div class="col-md-3 col-img">
            <div class="productSCreenMain-image"><img class="card-img-top img pop  product-img"
                    src="${product.image}" alt="no image" /></div>

        </div>
        <div class="col-md-5 col-product-details col-color ">
            <h3 class="product-name">${product.name}</h3>

            <p class="product-brand product-pointers">${product.brand}</p>
            <div class="a-line"></div>
            <p class="product-inStock">${product.inStock} in stock</p>
            <div class="a-line"></div>
            <p class="product-pointers">Free Delivery Available.</p>
            <p class="product-pointers">Hassle-Free Exchanges & Returns for 30 Days.</p>
            <p class="product-pointers">12-Month Limited Warranty</p>


        </div>
        <div class="col-md-3 col-cart-details col-color">
            <h2 class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></h2>
            <p class="product-pointers">Free Delivery Available.</p>
            
            <p class="cart-text"> On Credit:R1,069/month</p>
                <button class="card-button-iphone add-to-cart" id= "add-cart">Add to Cart</button>   
        </div>
    </div>


    </div>


</section>

<div
      class="
        container-fluid
        me-0
        ms-0
        pe-0
        ps-0
        mb-0
        position-relative
        fixed-bottom
        footer
      "
    >
      <ul class="nav justify-content-center pt-5 m-0 bg-dark position-relative">
        <li class="nav-item">
          <a
            href="mailto:tonny@meyton.co.za"
            class="fa fa-envelope ps-5 pe-5 pb-4"
          ></a>
        </li>
        <li class="nav-item">
          <a href="#" class="fa fa-instagram pe-5 ps-5 pb-4"></a>
        </li>
        <li class="nav-item">
          <a href="#" class="fa fa-facebook pe-5 ps-5 pb-4"></a>
        </li>
      </ul>
      <ul class="nav justify-content-center p-0 mb-0 bg-dark">
        <li class="nav-item">
          <a class="nav-link" href="index.html"
            >website created By Unarine Makhesha:</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"
            >&#169; 2021 copyright all right reserved</a
          >
        </li>
      </ul>
    </div>`;
  },
};

export default ProductScreen;

{
  /* <p class="product-availability">Unavailable</p> */
}
