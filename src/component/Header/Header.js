import './header.scss'

function Header() {
  return (

    <header className="header">
    <div className="left-content">
          <div className="w3s-image-wrapper">
            <a className="logo-link" href="#">
              <img className="w3s-logo" src={require('./../../images/channels4_profile.jpg')} />
            </a>
          </div>
          <nav className="nav-menu">


            <ul>
              <li><a href="#" className="nav-link ml"> Tutorials
                <img className="down-arrow" src={require('./../../images/back-svgrepo-com.png')} alt="" /></a>
                  <ul className="dropdown">
                    <li><a href="#">HTML and CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#"c>Backend</a></li>
                    <li><a href="#">Data Analytics</a></li>
                    <li><a href="#">Web Building</a></li>
                  </ul>
              </li>
            </ul>

            <ul>
              <li><a href="#" className="nav-link ml">Exercises
                <img className="down-arrow" src={require('./../../images/back-svgrepo-com.png')} alt="" /></a>
                  <ul className="dropdown">
                    <li><a href="#">HTML and CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">Backend</a></li>
                    <li><a href="#">Data Analytics</a></li>
                    <li><a href="#">Web Building</a></li>
                  </ul>
              </li>
            </ul>

            <ul>
              <li><a href="#" className="nav-link ml">Certificates
                <img className="down-arrow" src={require('./../../images/back-svgrepo-com.png')} alt="" /></a>
                  <ul className="dropdown">
                    <li><a href="#">HTML and CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                    <li><a href="#">Backend</a></li>
                    <li><a href="#">Data Analytics</a></li>
                    <li><a href="#">Programs</a></li>
                  </ul>
              </li>
            </ul>  

            <ul>
              <li><a href="#" className="nav-link ml">Services
                <img className="down-arrow" src={require('./../../images/back-svgrepo-com.png')} alt="" /></a>
                  <ul className="dropdown">
                    <li><a href="#">Free Tutorials</a></li>
                    <li><a href="#">References</a></li>
                    <li><a href="#">Create a Website</a></li>
                    <li><a href="#">Exercises</a></li>
                    <li><a href="#">Quizzes</a></li>
                    <li><a href="#">Get Certified</a></li>
                  </ul>
              </li>
            </ul>  


          </nav>
          <div className="search-input-wrapper">
            <input className="search-input" type="search" placeholder="Search..." />
            <div className="search-icon-wrapper">
              <img className="search-icon" src={require('./../../images/search-svgrepo-com.png')} alt="" />
            </div>
          </div>
          <div className="l-d-mode-wrapper">
            <img className="l-d-mode" src={require('./../../images/dark-theme-svgrepo-com.png')} alt="" />
          </div>
        </div>
        <div className="right-content">
          <div className="plus-item-wrapper">
            <a className="plus-item item" href="#">
              <img className="plus-item-logo logo-item" src={require('./../../images/stars-svgrepo-com.png')} alt="" />
              Plus
            </a>
          </div>
          <div className="spaces-item-wrapper ml2">
            <a className="spaces-item item" href="#">
              <img className="spaces-item-logo logo-item" src={require('./../../images/code-svgrepo-com.png')} alt="" />
              Spaces
            </a>
          </div>
          <div className="certified-item-wrapper ml2">
            <a className="certified-item item" href="#">
              <img className="certificate-logo logo-item" src={require('./../../images/shop-cart-svgrepo-com.png')} alt="" />
              Get Certified
            </a>
          </div>
          <div className="sign-log-link-wrapper">
            <div className="sign">
              <a className="sign-link ml3" href="#">Sign Up</a>
            </div>
            <div className="log">
              <a className="log-link" href="#">Log in</a>
            </div>
          </div>
        </div>
      </header>
    


  )
}


export default Header
