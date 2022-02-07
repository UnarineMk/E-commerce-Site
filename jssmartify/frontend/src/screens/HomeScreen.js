import axios from 'axios';
import { hideLoading, showLoading } from '../utilis';
const HomeScreen = {
  after_render: async () => {
    const shopNowbutton = document.getElementById('shop-now-button-scroll');
    const nextSection = document.getElementById('iphone-section');

    shopNowbutton.addEventListener('click', function (e) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  },
  render: async () => {
    showLoading();
    const response = await axios({
      url: 'http://localhost:5000/api/products',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    hideLoading();
    if (!response || response.statusText !== 'OK') {
      return `<div>Error Getting the Data</div>`;
    }

    const iphoneProducts = response.data.slice(0, 4);
    const samsungProducts = response.data.slice(4, 8);
    const smartWatches = response.data.slice(8, 20);
    const headPhones = response.data.slice(20, 28);
    const accessories = response.data.slice(28, 40);
    return `
    <main class="container-fluid main" id="main-container">
        <section class="main-section">

            <div class="row main-row">
                <div class="col-md-6">
                    <h1 class="main-heading">Products we sell</h1>
                    <p class="main-para">get the best deals in South Africa for any device you purchase</p>
                    <button type="submit" class="main-shop-button" id="shop-now-button-scroll"> Shop Now</button>

                </div>
                <div class="col-md-6">
                    <div class="main-image-div"><img class="card-img-top img pop img-main-image"
                            src="./e-com pics/backimg/14187845de52b98dba77f2e2f5edb715.jpg" alt="no image" /></div>

                </div>
            </div>


        </section>
            <h2 class="category-name" id="iphone-section">Smartphones</h2>
            <h3 class="phone-name">Apple Iphones</h3>

            <div class="container-fluid-iphone position-relative  mb-0 ms-1">
                <div class="row mb-2 mt-3 iphone-row ">
                       
    ${iphoneProducts
      .map(
        (product) =>
          `
      <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
      <div class="card shadow-sm iphone-card">
          <div class="product">
          <a href="#/product/${product._id}">
              <img class="card-img-top img pop ${product.imgClass}"
                  src="${product.image}" alt="${product.name}" />
                  </a>
          </div>

          <div class="card-body card-body-iphone">
              <p class="card-text-iphone product-name">${product.name}</p>
              <p class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></p>
              <p class="card-text-iphone product-colours">${product.moreColors}</p>
              <div class="product-button">
                  <a href="#/product/${product._id}">
                      <button class="card-button-iphone">Shop Product</button>
                  </a>
            </div>
            </div>
            </div>
            </div>
    `
      )
      .join('')}
    </div>

   
            <h3 class="phone-samsung">Samsung and Huawei Smartphones</h3>

    <div class="container-fluid-samsung position-relative pb-5 mb-0 ms-1">
    <div class="row mb-5 mt-3 iphone-row ">
    ${samsungProducts
      .map(
        (product) =>
          `
      <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
      <div class="card shadow-sm iphone-card">
          <div class="product">
          <a href="#/product/${product._id}">
              <img class="card-img-top img pop ${product.imgClass}"
                  src="${product.image}" alt="${product.name}" />
                  </a>
          </div>

          <div class="card-body card-body-iphone">
              <p class="card-text-iphone product-name">${product.name}</p>
              <p class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></p>
              <p class="card-text-iphone product-colours">${product.moreColors}</p>
              <div class="product-button">
                  <a href="#/product/${product._id}">
                      <button class="card-button-iphone">Shop Product</button>
                  </a>
            </div>
            </div>
            </div>
            </div>
    `
      )
      .join('')}
    </div>

    <h2 class="category-name-smartwatches">Smart Watches</h2>
    <h3 class="phone-samsung">Samsung and Huawei Smartphones</h3>

    <div class="container-fluid-samsung position-relative pb-5 mb-0 ms-1">
    <div class="row mb-5 mt-3 iphone-row ">
    ${smartWatches
      .map(
        (product) =>
          `
      <div class="col col-md-3 iphone-col mb-4 ms-0 p-0 products">
      <div class="card shadow-sm iphone-card">
          <div class="product">
          <a href="#/product/${product._id}">
              <img class="card-img-top img pop ${product.imgClass}"
                  src="${product.image}" alt="${product.name}" />
                  </a>
          </div>

          <div class="card-body card-body-iphone">
              <p class="card-text-iphone product-name">${product.name}</p>
              <p class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></p>
              <p class="card-text-iphone product-colours">${product.moreColors}</p>
              <div class="product-button">
                  <a href="#/product/${product._id}">
                      <button class="card-button-iphone">Shop Product</button>
                  </a>
            </div>
            </div>
            </div>
            </div>
    `
      )
      .join('')}
    </div>



    <h2 class="category-name-smartwatches">Heaphones</h2>
    <h3 class="phone-samsung">Apple, JBL, Sony wireless Heaphones</h3>

    <div class="container-fluid-samsung position-relative pb-5 mb-0 ms-1">
    <div class="row mb-5 mt-3 iphone-row ">
    ${headPhones
      .map(
        (product) =>
          `
      <div class="col col-md-3 iphone-col mb-4 ms-0 p-0 products">
      <div class="card shadow-sm iphone-card">
          <div class="product">
          <a href="#/product/${product._id}">
              <img class="card-img-top img pop ${product.imgClass}"
                  src="${product.image}" alt="${product.name}" />
                  </a>
          </div>

          <div class="card-body card-body-iphone">
              <p class="card-text-iphone product-name">${product.name}</p>
              <p class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></p>
              <p class="card-text-iphone product-colours">${product.moreColors}</p>
              <div class="product-button">
                  <a href="#/product/${product._id}">
                      <button class="card-button-iphone">Shop Product</button>
                  </a>
            </div>
            </div>
            </div>
            </div>
    `
      )
      .join('')}
    </div>


    <h2 class="category-name-smartwatches">Accessories </h2>
    <h3 class="phone-samsung">Airpods and Phone Covers</h3>

    <div class="container-fluid-samsung position-relative mb-0 ms-1">
    <div class="row mt-3 iphone-row ">
    ${accessories
      .map(
        (product) =>
          `
      <div class="col col-md-3 iphone-col mb-4 ms-0 p-0 products">
      <div class="card shadow-sm iphone-card">
          <div class="product">
          <a href="#/product/${product._id}">
              <img class="card-img-top img pop ${product.imgClass}"
                  src="${product.image}" alt="${product.name}" />
                  </a>
          </div>

          <div class="card-body card-body-iphone">
              <p class="card-text-iphone product-name">${product.name}</p>
              <p class="card-text-iphone product-price"><b><span>R</span>${product.price}</b></p>
              <p class="card-text-iphone product-colours">${product.moreColors}</p>
              <div class="product-button">
                  <a href="#/product/${product._id}">
                      <button class="card-button-iphone">Shop Product</button>
                  </a>
            </div>
            </div>
            </div>
            </div>
    `
      )
      .join('')}
    </div>


    </main>
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
      "
    >
      <ul class="nav justify-content-center pt-5 m-0 bg-dark position-relative">
        <li class="nav-item">
          <a
            href="mailto:unarine.makhesha2@gmail.com"
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
    </div>

    `;
  },
};

export default HomeScreen;
