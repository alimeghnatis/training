import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'


function Header() {  
  return (
    <header className="header">
      <div className="left-content">

          <div className="w3s-image-wrapper">
            <a className="logo-link" href="#">
              <img className="w3s-logo" src={require('./../image/channels4_profile.jpg')} />
            </a>
          </div>
         
          <nav className="nav-menu">
            <ul>
              <li id="tutorial-btn"><a href="#" className="nav-link ml"> Tutorials
                <img className="down-arrow" src={require('./../image/back-up-down-svgrepo-com.png')} alt="" /></a>
              </li>
            </ul>
            <ul>
              <li><a href="#" className="nav-link ml">Exercises
                <img className="down-arrow" src={require('./../image/back-up-down-svgrepo-com.png')} alt="" /></a>
              </li>
            </ul>
            <ul>
              <li><a href="#" className="nav-link ml">Certificates
                <img className="down-arrow" src={require('./../image/back-up-down-svgrepo-com.png')} alt="" /></a>
              </li>
            </ul>  
            <ul>
              <li><a href="#" className="nav-link ml">Services
                <img className="down-arrow" src={require('./../image/back-up-down-svgrepo-com.png')} alt="" /></a>
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

      <main> 
        <div className="nested-navigation-container nested_navigation_hidden" id="nested-navigation-container-id">
          <div className="nested-navigation-container-close-btn" >
            <button className="clbtn">
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="nested-navigation-container-content">
            <h1 className="content-h1">Tutorials</h1>
            <div className="nested-navigation-container-content-data">
              <div className="nested-navigation-item">
                <h2>HTML and CSS</h2>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">HTML</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">CSS</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">RWD</span></a>
              </div>
              <div className="nested-navigation-item">
                <h2 className="item-h2">JavaScript</h2>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">JavaScript</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">React</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">jQuery</span></a>
              </div>
              <div className="nested-navigation-item">
                <h2>Backend</h2>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">Python</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">SQL</span></a>
                <a href="" className="a11"><span className="span1">Learn</span><span className="span2">MySql</span></a>
              </div>
            </div>
          </div>
        </div>
      </main>  
      
  )
}


export default Header
