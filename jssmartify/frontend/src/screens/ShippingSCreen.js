import { getUserInfo, getShipping, setShipping } from '../localStorage';
import CheckoutSteps from '../Mycomponents/CheckoutSteps';

const ShippingScreen = {
  after_render: () => {
    document
      .getElementById('shipping-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        setShipping({
          address: document.getElementById('address').value,
          city: document.getElementById('city').value,
          postalCode: document.getElementById('postalCode').value,
          country: document.getElementById('country').value,
        });
        document.location.hash = '/payment';
      });
  },
  render: () => {
    const { name } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }
    const { address, city, postalCode, country } = getShipping();
    return `
    ${CheckoutSteps.render({ step1: true, step2: true })}
    <section class="signIn mb-5" id="profile-form" >
    <div class="alignment">
        <h5 class="section-title">Shipping</h5>
        <div class="signIncontainer bd-grid">
            <form id="shipping-form">
            <div class ="form-items">
            <input type="text" class="signIn-input"  name="address" id="address" value ="${address}"/>
            <input type="text" class="signIn-input"  name="city" id="city" value ="${city}" placeholder ="City"/>
            <input type="text" class="signIn-input"  name="postalCode" id="postalCode" value ="${postalCode}" placeholder ="Postal Code"/>
            <input type="text" class="signIn-input"  name="country" id="country" value ="${country}" placeholder ="Country"/>
                
                <input type="submit" value="Continue" class="signIn-button button" />
                </div>
            </form>
        </div>

    </div>

</section>
        `;
  },
};

export default ShippingScreen;
