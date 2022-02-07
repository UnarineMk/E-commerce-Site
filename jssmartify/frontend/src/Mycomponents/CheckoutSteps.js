const CheckoutSteps = {
  render: (props) => {
    return `
        <div class ="checkout-steps">
            <div class="${props.step1 ? 'checkout-active' : ''}">Sigin</div>
            <div class="${props.step2 ? 'checkout-active' : ''}">Shipping</div>
            <div class="${props.step3 ? 'checkout-active' : ''}">Payment</div>
            <div class="${
              props.step4 ? 'checkout-active' : ''
            }">Place Order</div>
        </div>
        `;
  },
};

export default CheckoutSteps;
