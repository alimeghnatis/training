import './header.scss'



function Header() {  
  return (
      <div className="header1">
        <div className="logo">
          <img className="logo-img" src= {require('../image/logo.png')} alt="" />
        </div>

        <div className="menu-but">
          <a href="" className="menu-but-link">Menu</a>
        </div>

        <div className="search-but">
          <img className="search-img" src={require('../image/search-svgrepo-com.png')}  alt="" />
        </div>
        
        <div className="dark-but">
          <img className="dark-img" src={require('../image/dark-theme-svgrepo-com.png')} alt="" />
        </div>

        <div className="login-but">
          <a href="" className="login-but-link">Log in</a>
        </div>
        
      </div>
  );
}


export default Header
