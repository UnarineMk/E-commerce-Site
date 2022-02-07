import { createOrder } from '../api.js';
import {
  cleanCart,
  getCartItems,
  getPayment,
  getShipping,
} from '../localStorage.js';
import CheckoutSteps from '../Mycomponents/CheckoutSteps.js';
import { hideLoading, showLoading, showMessage } from '../utilis';

const convertCartToOrder = () => {
  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = '/cart';
  }
  const shipping = getShipping();
  if (!shipping.address) {
    document.location.hash = '/shipping';
  }
  const payment = getPayment();
  if (!payment.paymentMethod) {
    document.location.hash = '/payment';
  }
  const itemsPrice = orderItems.reduce((x, z) => x + z.price * z.qty, 0);
  // const itemsPriceWithoutTax = orderItems.reduce((x, z) => x + z.price * z.qty, 0);
  const shippingPrice =
    itemsPrice > 400 ? orderItems.reduce((x, z) => x + 100 * z.qty, 0) : 0;
  const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  return {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};
const PlaceOrderScreen = {
  after_render: async () => {
    document
      .getElementById('placeorder-button')
      .addEventListener('click', async () => {
        const order = convertCartToOrder();
        showLoading();
        const data = await createOrder(order);
        hideLoading();

        if (data.error) {
          showMessage(data.error);
        } else {
          cleanCart();
          document.location.hash = `/order/${data.order._id}`;
        }
      });
  },
  render: () => {
    const {
      orderItems,
      shipping,
      payment,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = convertCartToOrder();

    return `
    ${CheckoutSteps.render({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
    })}
    <section class="PlaceorderScreen-section">
        <div class="row">
            <div class="col col-md-7">
                <div class="row Order-shipping-row">
                    <div class="col-md-4 col-img order-shipping-details">
                        <h2 class="order-headings"><b>Shipping</b></h2>
                        <div class="order-text">
                            ${shipping.address},${shipping.city},${
      shipping.postalCode
    },${shipping.country}
                            <p class="product-description-price">Shipping cost R 100 each device</p>
                        </div>

                    </div>

                </div>
                <div class=" cart-margine-order ">
                </div>
                <div class="row Order-payment-row">
                    <div class="col-md-4 col-img order-payment-details">
                        <h2 class="order-headings"><b>Payments</b></h2>
                        <div class="order-text">
                            Payment Method:${payment.paymentMethod}
                        </div>

                    </div>

                </div>
                <div class=" cart-margine-order ">
                </div>
                <div class="row row-cart-size cartHeadings-row">
                    <b>
                        Shopping Cart
                    </b>
                </div>
                ${orderItems
                  .map(
                    (item) => `
                <div class="row order-product-row mb-3">
                    <div class="col-md-3 col-cart-img cart-margine">
                        <div class="cartSCreenMain-image order-img"><img class="card-img-top img pop cartScreen-main-image "
                                src="${item.image}" alt="${item.name}" /></div>

                    </div>
                    <div class="col-md-6 col-product-details col-product-content cart-margine ">
                        <div>
                            <a href="/#/product/${item.product}">
                                <h6 class="product-name ">${item.name}</h6>
                            </a>
                        </div>
                        <div> Qty:${item.qty}</div>
                        <p class="product-description"> The sought-after iPhone XR boasts some of the most impressive
                            tech
                            features in the world of smartphones. Advanced Face ID for maximum security, and a brilliant
                            LCD
                        </p>
                        <p class="product-description-price">R ${
                          item.price
                        }/each excluding vat</p>
                    </div>
                    <div class="col-md-3 col-cart-details col-price-content cart-margine">
                        <h3 class="card-text-iphone cart-product-price"><b><span>R</span>${
                          item.price * item.qty
                        }</b> excluding vat</h3>

                    </div>

                </div>
                `
                  )
                  .join('\n')}
            </div>

            <div class="col col-md-5 order-placement">
                
            <table>
            <tr>
                <th>
                    <h4 class="order-summary"><b>Order Summary</b></h4>
                </th>
            </tr>
            <tr>
                <td>
                    <p class="summary-prices">Price of Items</p>
                </td>
                <td>
                    <p class="summary-prices table-padding">R${itemsPrice}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="summary-prices">Shipping price</p>
                </td>
                <td>
                    <p class="summary-prices table-padding">R${shippingPrice}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="summary-prices">Tax</p>
                </td>
                <td>
                    <p class="summary-prices table-padding">R${taxPrice}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="summary-prices total-price"><b>Order total</b></p>
                </td>
                <td>
                    <p class="summary-prices table-padding total-price"><b>R${totalPrice}</b></p>
                </td>
            </tr>
        </table>
 <button id="placeorder-button" class="button card-button-iphone primary fw">
                        Place Order
                    </button>

                

            </div>

        </div>
    </section>
  `;
  },
};

export default PlaceOrderScreen;
