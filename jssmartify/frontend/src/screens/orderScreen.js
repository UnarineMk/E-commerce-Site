import { getOrder, getPaypalClientId, payOrder } from '../api.js';
import {
  hideLoading,
  parseRequestUrl,
  rerender,
  showLoading,
  showMessage,
} from '../utilis';

const addPayPalSdk = async (totalPrice) => {
  const clientId = await getPaypalClientId();
  // showLoading();
  if (!window.paypal) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypalobjects.com/api/checkout.js';
    script.async = true;
    script.onload = () => handlePayment(clientId, totalPrice);
    document.body.appendChild(script);
  } else {
    handlePayment(clientId, totalPrice);
  }
};
const handlePayment = async (clientId, totalPrice) => {
  await window.paypal.Button.render(
    {
      env: 'sandbox',
      client: {
        sandbox: clientId,
        production: '',
      },
      locale: 'en_US',
      style: {
        size: 'responsive',
        color: 'black',
        shape: 'pill',
      },
      commit: true,
      payment(data, actions) {
        return actions.payment.create({
          transactions: [
            {
              amount: {
                total: totalPrice,
                currency: 'USD',
              },
            },
          ],
        });
      },

      onAuthorize(data, actions) {
        return actions.payment.execute().then(async () => {
          showLoading();
          await payOrder(parseRequestUrl().id, {
            orderID: data.orderID,
            payerID: data.payerID,
            paymentID: paymentID,
          });
          hideLoading();
          showMessage('Payment was Successful.', () => {
            rerender(OrderScreen);
          });
        });
      },
    },
    '#paypal-button'
  ).then(() => {
    hideLoading();
  });
};

const OrderScreen = {
  after_render: async () => {},
  render: async () => {
    const request = await parseRequestUrl();
    const {
      _id,
      shipping,
      payment,
      // orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      deliveredAt,
      isDelivered,
      isPaid,
      PaidAt,
    } = await getOrder(request.id);
    if (!isPaid) {
      await addPayPalSdk(totalPrice);
    }
    return `
    <section class="PlaceorderScreen-section">
        <h1 class="Order-id-text">Order ${_id}</h1>
            <div class="row main-order-row">

                <div class="row Order-shipping-row">
                    <div class="col-md-7 col-img order-shipping-details">
                        <h2 class="order-headings"><b>Shipping</b></h2>
                        <div class="order-text">
                            ${shipping.address},${shipping.city},${
      shipping.postalCode
    },${shipping.country}
                            <p class="product-description-price">Shipping cost R 100 each device</p>
                            <p class="product-description-price">${
                              isDelivered
                                ? `
                            <p> Delivered at ${deliveredAt}</p>`
                                : `<p> Not Delivered</p>`
                            }</p>
                        </div>
                        <div class=" cart-margine-order ">
                        </div>

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
                                <td>
                                <div id="paypal-button"> </div>
                                </td>
                            </tr>

                        </table>
                        




                    </div>
                </div>


                <div class="row Order-shipping-row">
                    <div class="col-md-7 col-img order-payment-details">
                        <h2 class="order-headings"><b>Payments</b></h2>
                        <div class="order-text">
                            Payment Method:${payment.paymentMethod}
                            ${
                              isPaid
                                ? `<p> Paid at ${PaidAt}</p>`
                                : `<p> Not Paid</p>`
                            }
                        </div>


                        <div class=" cart-margine-order ">
                        </div>
                    </div>


                    <div class="col-md-5 col-img order-payment-details">




                    </div>

                </div>


            </div>

    </section>
  `;
  },
};

export default OrderScreen;

//   ${orderItems
//     .map(
//       (item) => `
//   <div class="row order-product-row mb-3">
//       <div class="col-md-3 col-cart-img cart-margine">
//           <div class="cartSCreenMain-image order-img"><img class="card-img-top img pop cartScreen-main-image "
//                   src="${item.image}" alt="${item.name}" /></div>

//       </div>
//       <div class="col-md-6 col-product-details col-product-content cart-margine ">
//           <div>
//               <a href="/#/product/${item.product}">
//                   <h6 class="product-name ">${item.name}</h6>
//               </a>
//           </div>
//           <div> Qty:${item.qty}</div>
//           <p class="product-description"> The sought-after iPhone XR boasts some of the most impressive
//               tech
//               features in the world of smartphones. Advanced Face ID for maximum security, and a brilliant
//               LCD
//           </p>
//           <p class="product-description-price">R ${
//             item.price
//           }/each excluding vat</p>
//       </div>
//       <div class="col-md-3 col-cart-details col-price-content cart-margine">
//           <h3 class="card-text-iphone cart-product-price"><b><span>R</span>${
//             item.price * item.qty
//           }</b> excluding vat</h3>

//       </div>

//   `
//     )
//     .join('\n')}
// </div>
