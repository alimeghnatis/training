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

      </div>
      <div className="certificates">

      </div>
      <div className="services">

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
