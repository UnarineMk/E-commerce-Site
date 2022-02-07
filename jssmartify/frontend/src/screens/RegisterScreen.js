import { register } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../utilis';

const RegisterScreen = {
  after_render: () => {
    document
      .getElementById('register-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await register({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          redirectUser();
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <section class="signIn mb-5" id="register-form" >
    <div class="alignment">
        <h5 class="section-title">Create Account</h5>
        <div class="signIncontainer bd-grid">
            <form class="signIn-form">
            <input type="name" class="signIn-input" placeholder="Name" name="name" id="name" />
                <input type="email" class="signIn-input" placeholder="email" name="email" id="email" />
                <input type="password" class="signIn-input" placeholder="Password" name="password" id="password"/>
                <input type="password" class="signIn-input" placeholder="Re-enter Password" name="repassword" id="repassword"/>
                <input type="submit" value="Register" class="signIn-button button" />
                <p class="new-user"> Already have an account? <a href="#/signin" class="new-accountlink">Sign-In</a>
                </p>
            </form>
        </div>

    </div>

</section>
        `;
  },
};

export default RegisterScreen;
