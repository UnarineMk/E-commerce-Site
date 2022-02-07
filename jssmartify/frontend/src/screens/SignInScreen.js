import { signin } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';
import { hideLoading, redirectUser, showLoading, showMessage } from '../utilis';

const SigninScreen = {
  after_render: () => {
    document
      .getElementById('signin-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await signin({
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          redirectUser;
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <section class="signIn" id="signin-form">
    <div class="alignment">
        <h5 class="section-title">Sign-in</h5>
        <div class="signIncontainer bd-grid">
            <form class="signIn-form">
                <input type="email" class="signIn-input" placeholder="email" name="email" id="email" />
                <input type="password" class="signIn-input" placeholder="Password" name="password" id="password"/>
                <input type="submit" value="Sign-In" class="signIn-button button" />
                <p class="new-user"> New User? <a href="#/register" class="new-accountlink">Create your account</a>
                </p>
            </form>
        </div>

    </div>

</section>
        `;
  },
};

export default SigninScreen;
