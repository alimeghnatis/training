import './header.scss'



function Header() {  
  return (
    
    <div className="header">
      <div className="w3s-logo">
        <a href="" className="logo-url">
          <img src={require('../image/logo.png')} alt="" className="logo-img"/>
        </a>
      </div>
      <div className="tutorial">
        <a href="" className="tutorial-text">Tutorials</a>
        <a href="" className="menudn-1">Menu</a>
        <img src={require('../image/back-up-down-svgrepo-com.png')} alt="" className="dropdownimg"/>
      </div>
      <div className="exercises">
        <a href="" className="exercises-text">Exercises</a>
        <img src={require('../image/back-up-down-svgrepo-com.png')} alt="" className="dropdownimg"/>
      </div>
      <div className="certificates">
        <a href="" className="certificates-text">Certificates</a>
        <img src={require('../image/back-up-down-svgrepo-com.png')} alt="" className="dropdownimg" />
      </div>
      <div className="services">
        <a href="" className="services-text">Services</a>
        <img src={require('../image/back-up-down-svgrepo-com.png')} alt="" className="dropdownimg" />
      </div>
      <div className="search">
        <img src={require('../image/search-svgrepo-com.png')} alt="" className="searchimg" />
      </div>
      <div className="darkbut">
        <img src={require('../image/dark-theme-svgrepo-com.png')} alt="" className="darkimg" />
      </div>
      <div className="plus">
        <img src={require('../image/stars-svgrepo-com.png')} alt="" className="plusimg" />
        <a href="" className="plus-text">Plus</a>
      </div>
      <div className="spaces">
        <img src={require('../image/code-svgrepo-com.png')} alt="" className="spacesimg"/>
        <a href="" className="spaces-text">Spaces</a>
      </div>
      <div className="get-certified">
        <img src={require('../image/shop-cart-svgrepo-com.png')} alt="" className="certifiedimg"/>
        <a href="" className="certified-text">Get Certified</a>
      </div>
      <div className="sign">
        <a href="" className="signup">SignUp</a>
        <a href="" className="login">LogIn</a>
      </div>
    </div>


  );
}  


export default Header
