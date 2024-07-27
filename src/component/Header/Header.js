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

      </div>
      <div className="darkbut">

      </div>
      <div className="plus">

      </div>
      <div className="spaces">

      </div>
      <div className="get-certified">

      </div>
      <div className="sign">

      </div>
    </div>


  );
}  


export default Header
