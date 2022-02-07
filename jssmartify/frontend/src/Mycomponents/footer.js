import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 

    
    `;
  },

  after_render: () => {},
};

export default Header;
