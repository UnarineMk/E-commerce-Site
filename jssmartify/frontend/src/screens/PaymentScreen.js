import { getUserInfo, setPayment } from '../localStorage';
import CheckoutSteps from '../Mycomponents/CheckoutSteps';

const PaymentScreen = {
  after_render: () => {
    document
      .getElementById('payment-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const paymentMethod = document.querySelector(
          'input[name="payment-method"]:checked'
        ).value;
        setPayment({ paymentMethod });
        document.location.hash = '/placeorder';
      });
  },
  render: () => {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }

    return `
    ${CheckoutSteps.render({ step1: true, step2: true, step3: true })}
    <section class="signIn mb-5" id="payment" >
    <div class="alignment">
        <h5 class="section-title">Payment</h5>
        <div class="signIncontainer bd-grid">
            <form id="payment-form">
            <div class ="form-items">
            <div>
            <input type ="radio" name="payment-method" id="paypal" value="Paypal" checked>
            <label for="paypal">Paypal</label>
            </div>
                </div>
                <div>
            <input type ="radio" name="payment-method" id="stripe" value="Stripe">
            <label for="stripe">Stripe</label>
            </div>
            <input type="submit" value="Continue" class="signIn-button button" />
                </div>
            </form>
        </div>

    </div>

</section>
        `;
  },
};

export default PaymentScreen;
