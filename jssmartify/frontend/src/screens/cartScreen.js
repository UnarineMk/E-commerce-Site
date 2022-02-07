import { getProduct } from '../api';
import { getCartItems, setCartItems } from '../localStorage';
import { parseRequestUrl, rerender } from '../utilis';

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();

  const existItems = cartItems.find((x) => x.product === item.product);
  if (existItems) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) =>
        x.product === existItems.product ? item : x
      );
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if (forceUpdate) {
    rerender(cartScreen);
  }
};
const removeFromCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.product !== id));
  if (id === parseRequestUrl().id) {
    document.location.hash = '/cart';
  } else {
    rerender(cartScreen);
  }
};

const cartScreen = {
  after_render: () => {
    const qtySelects = document.getElementsByClassName('qty-select');
    Array.from(qtySelects).forEach((qtySelect) => {
      qtySelect.addEventListener('change', (e) => {
        const item = getCartItems().find((x) => x.product === qtySelect.id);
        addToCart({ ...item, qty: Number(e.target.value) }, true);
      });
    });

    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        removeFromCart(deleteButton.id);
      });
    });

    document.getElementById('Checkout-button').addEventListener('click', () => {
      document.location.hash = `/signin`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      const product = await getProduct(request.id);
      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        inStock: product.inStock,
        description: product.description,
        qty: 1,
      });
    }
    const cartItems = getCartItems();
    return `<section class="cartScreen-section">
    <div class="cart-list">
    <div class="row row-cart-size cartHeadings-row">
    <b>
    Shopping Cart
    </b>       
    </div>
            ${
              cartItems.length === 0
                ? `<div> Cart is Empty.<a href ="/#/" class="Go-shopping-link"> Go Shopping</a>`
                : cartItems
                    .map(
                      (item) => `
                    <div class="row row-cart-size carttScreen-row mb-3">
            <div class="col-md-3 col-cart-img cart-margine">
                <div class="cartSCreenMain-image"><img class="card-img-top img pop ${
                  item.imgClass
                }"
                        src="${item.image}" alt="${item.name}" /></div>

            </div>
            <div class="col-md-6 col-product-details col-product-content cart-margine ">
            <div>
            <a href="/#/product/${item.product}">
                <h6 class="product-name ">${item.name}</h6>
                </a>
                </div>
                <p class="product-description"> Available Product in Stock ${
                  item.inStock
                }</p>
                <p class="product-description-price">R ${
                  item.price
                }/each excluding vat</p>
                <select class="qty-select" id="${item.product}">
                    ${[...Array(item.inStock).keys()].map((x) =>
                      item.qty === x + 1
                        ? `<option selected value="${x + 1}">${x + 1}</option>`
                        : `<option value="${x + 1}">${x + 1}</option>`
                    )}
                </select>
                
                <i class="fa fa-trash delete-button" style="font-size:25px" aria-hidden="true" id="${
                  item.product
                }"></i>
                </div>

            <div class="col-md-3 col-cart-details col-price-content cart-margine">
                <h3 class="card-text-iphone cart-product-price"><b><span>R</span>${
                  item.price * item.qty
                }</b> excluding vat</h3>
            </div>
            
            </div>


        </div>
        `
                    )
                    .join('\n')
            }
        </div>


    </div>

    <div class="col-md-3 col-cart-checkout">
    <h4 class="cart-summary">Cart Summary</h4>
            <h3 class="card-text-iphone product-subtotal">
                Subtotal (${cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                <b class="bold-total">R ${cartItems.reduce(
                  (a, c) => a + c.price * c.qty,
                  0
                )}</b>
            </h3>

            <button class="card-button-iphone checkout-button" id="Checkout-button">Proceed to Checkout</button>

        </div>

    
    </section>
    `;
  },
};
export default cartScreen;
