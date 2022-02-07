// import { getMyOrders, update } from '../api';
import { update } from '../api';
import { clearUser, getUserInfo, setUserInfo } from '../localStorage';
import { hideLoading, redirectUser, showMessage } from '../utilis';

const ProfileScreen = {
  after_render: () => {
    document.getElementById('signout-button').addEventListener('click', () => {
      clearUser();
      document.location.hash = '/';
    });
    document
      .getElementById('profile-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = await update({
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
  render: async () => {
    const { name, email } = getUserInfo();
    if (!name) {
      document.location.hash = '/';
    }
    // const orders = await getMyOrders();

    return `
    <section class="signIn mb-5" id="profile-form" >
    <div class="row  main-order-row">
    <div class = "col col-md-4 userinfo-page"></div>
    
    <div class="alignment">
        <h5 class="section-title">User Profile</h5>
        <div class="signIncontainer bd-grid">
            <form class="profile-form">
            <input type="name" class="signIn-input"  name="name" id="name" value ="${name}"/>
                <input type="email" class="signIn-input" name="email" id="email" value ="${email}"/>
                <input type="password" class="signIn-input"  name="password" id="password" placeholder ="change Password"/>
                <input type="submit" value="Update Profile" class="signIn-button button" />
                <input type="button" value="Logout" class="signIn-button button" id="signout-button" />
            </form>
        </div>

    </div>
    
    </div>

</section>
        `;
  },
};

export default ProfileScreen;
