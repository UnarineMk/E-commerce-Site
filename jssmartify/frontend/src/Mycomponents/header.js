import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">Smartify</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link current" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/About Us">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/service">Services</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="/#/cart">Cart</a>
                    </li>
                    ${isAdmin ? `<a href ="/#/dashboard"> Dashboard</a>` : ''}
                    <li class="nav-item me-3">
                    ${
                      name
                        ? `<a class=" sign-in-link nav-link " style="color: rgba(236, 106, 106, 1);" href="/#/profile"> ${name} </a>`
                        : `
                    <a class=" sign-in-link nav-link " style="color: rgba(236, 106, 106, 1);" href="/#/signin">Sign
                            In</a>`
                    }
                        
                    </li>
                </ul>
                
            </div>
        </nav>`;
  },

  after_render: () => {},
};

export default Header;
