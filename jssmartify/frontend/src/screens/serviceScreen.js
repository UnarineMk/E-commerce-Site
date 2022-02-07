const serviceScreen = {
  after_render: async () => {
    document.getElementById('service-button').addEventListener('click', () => {
      document.location.hash = `/`;
    });
    document
      .getElementById('main-shop-button')
      .addEventListener('click', () => {
        document.location.hash = `/`;
      });
  },
  render: async () => {
    return `
      
        </section>


        <section class="main-section">

        <div class="row main-row">
            <div class="col-md-6">
                <h1 class="main-heading-service">We are all about the smart devices</h1>
                <p class="main-para-service">here to make a purchase?, We’ve got just what You need.</p>
                <button type="submit" class="main-shop-button" id="main-shop-button"> Shop Now</button>

            </div>
            <div class="col-md-6">
                <div class="main-image-div"><img class="card-img-top img pop img-main-image"
                        src="./e-com pics/backimg/s-zoomppl.png" alt="no image" /></div>

            </div>
        </div>


    </section>

    <div class="container-fluid carousel-con position-relative img-carousel">
        <div class="row p-0 m-0 carousel-row">
            <div class="col-xxl-12">
                <div id="carouselExampleIndicators" class="
                    carousel
                    slide
                    position-absolute
                    top-50
                    start-50
                    translate-middle
                    text-center
                    w-100
                  " data-bs-ride="carousel">
                    <div class="carousel-indicators indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner p-5">
                        <div class="carousel-item active">
                            <div class="row car-row">
                                <div class="col-md-6">
                                    <img src="./e-com pics/smartphones/iphone 13 pro Max/13 pro Max Blue2.png"
                                        alt="" class="testimonial__photo" />
                                </div>
                                <div class="col-md-6 column-text">
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <h2 class="main-text">iwatch made just for you</h2>
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <button class="card-button-iphone" id="service-button" >shop now</button>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="row car-row">
                                <div class="col-md-6">
                                    <img src="./e-com pics/smartphones/Samsung Galaxy Z fold/galaxy fold Z gold-2.png"
                                        alt="" class="testimonial__photo" />
                                </div>
                                <div class="col-md-6 column-text">
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <h2 class="main-text">iwatch made just for you</h2>
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <button class="card-button-iphone" id="service-button">shop now</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row car-row">
                                <div class="col-md-6">
                                    <img src="./e-com pics/headphones/JBL/JBL T510BT wireless/JBL T510BT wireless pink-2.png"
                                        alt="" class="testimonial__photo" />
                                </div>
                                <div class="col-md-6 column-text">
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <h2 class="main-text">iwatch made just for you</h2>
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <button class="card-button-iphone" id="service-button">shop now</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row car-row">
                                <div class="col-md-6">
                                    <img src="./e-com pics/smartwatches/apple watches/apple watch series 7/apple watch series  7 red.png"
                                        alt="" class="testimonial__photo" />
                                </div>
                                <div class="col-md-6 column-text">
                                    <p class="carousel-para fw-light">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <h2 class="main-text">iwatch made just for you</h2>
                                    <p class="carousel-para fw-light ">
                                        orem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Accusantium quas quisquam non?
                                    </p>
                                    <button class="card-button-iphone" id="service-button">shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev p-0 prev" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next next" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon " aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>







    <h2 class="category-name-services">Shop for the Following Devices Now</h2>

    <div class="container-fluid-iphone position-relative mb-0 ms-1 ">
        <div class="row mb-5 mt-3 iphone-row ">
            <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
                <div class="card shadow-sm iphone-card">
                    <div class="product">
                        <a href="/">
                            <img class="card-img-top img pop img-iphone13"
                                src="./e-com pics/smartphones/Samsung Galaxy S21/Galaxy S21 Violet-2.png"
                                alt="No Image" />
                        </a>
                    </div>

                    <div class="card-body card-body-iphone">
                        <p class="card-text-iphone product-name">Smartphones</p>
                        <p class="card-text-iphone product-price"><b>Ratings</b></p>
                        <p class="card-text-iphone product-colours">More Colors</p>
                        <div class="product-button">
                            <a href="">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
                <div class="card shadow-sm iphone-card">
                    <div class="product">
                        <a href="/">
                            <img class="card-img-top img pop img-iphone13"
                                src="./e-com pics/Accessories/phone cover/iphone 13 covers/iphone 13 red cover-2.png"
                                alt="No Image" />
                        </a>
                    </div>

                    <div class="card-body card-body-iphone">
                        <p class="card-text-iphone product-name">Smartphones</p>
                        <p class="card-text-iphone product-price"><b>Ratings</b></p>
                        <p class="card-text-iphone product-colours">More Colors</p>
                        <div class="product-button">
                            <a href="">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
                <div class="card shadow-sm iphone-card">
                    <div class="product">
                        <a href="/">
                            <img class="card-img-top img pop img-iphone13"
                                src="./e-com pics/headphones/Apple/Apple AirPods Max headphones green-2.png"
                                alt="No Image" />
                        </a>
                    </div>

                    <div class="card-body card-body-iphone">
                        <p class="card-text-iphone product-name">Smartphones</p>
                        <p class="card-text-iphone product-price"><b>Ratings</b></p>
                        <p class="card-text-iphone product-colours">More Colors</p>
                        <div class="product-button">
                            <a href="">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
                <div class="card shadow-sm iphone-card">
                    <div class="product">
                        <a href="">
                            <img class="card-img-top img pop img-iphone13"
                                src="./e-com pics/smartwatches/apple watches/apple watch series 7/apple watch series  7 blue-2.png"
                                alt="No Image" />
                        </a>
                    </div>

                    <div class="card-body card-body-iphone">
                        <p class="card-text-iphone product-name">Smartphones</p>
                        <p class="card-text-iphone product-price"><b>Ratings</b></p>
                        <p class="card-text-iphone product-colours">More Colors</p>
                        <div class="product-button">
                            <a href="">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-2.5 iphone-col mb-4 ms-0 p-0 products">
                <div class="card shadow-sm iphone-card">
                    <div class="product">
                        <a href="">
                            <img class="card-img-top img pop img-iphone13"
                                src="./e-com pics/Accessories/Airpods/airpods 2 white-2.png" alt="No Image" />
                        </a>
                    </div>

                    <div class="card-body card-body-iphone">
                        <p class="card-text-iphone product-name">Smartphones</p>
                        <p class="card-text-iphone product-price"><b>Ratings</b></p>
                        <p class="card-text-iphone product-colours">More Colors</p>
                        <div class="product-button">
                            <a href="">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class=" button-shopNow" id="service-button" >shop now</button>
    </div>

    <section class="icon-row">
        <div class="row">
            <div class=" col-md-3">
                <div class="icon-container">
                    <img src="./e-com pics/icons/plane.png" alt="plane img" class="icon-img">
                </div>


                <p>


                    orem ipsum dolor sit, amet consectetur adipisicing eli
                    orem ipsum dolor sit, amet consectetur adipisicing el
                </p>


            </div>
            <div class="col-md-3">
                <div class="icon-container">
                    <img src="./e-com pics/icons/credit-card.png" alt="plane img" class="icon-img">
                </div>

                <p>
                    orem ipsum dolor sit, amet consectetur adipisicing eli
                    orem ipsum dolor sit, amet consectetur adipisicing el
                </p>


            </div>
            <div class="col-md-3">
                <div class="icon-container">
                    <img src="./e-com pics/icons/credit-cards.png" alt="plane img" class="icon-img">
                </div>

                <p>
                    orem ipsum dolor sit, amet consectetur adipisicing eli
                    orem ipsum dolor sit, amet consectetur adipisicing el
                </p>


            </div>


            <div class="col-md-3">
                <div class="icon-container">
                    <img src="./e-com pics/icons/support.png" alt="plane img" class="icon-img">
                </div>
                <p>
                    orem ipsum dolor sit, amet consectetur adipisicing eli
                    orem ipsum dolor sit, amet consectetur adipisicing el
                </p>

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

export default serviceScreen;
