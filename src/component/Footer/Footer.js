import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faYoutube , faLinkedin , faDiscord , faSquareFacebook , faInstagram} from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (

  <div className="footer">
    <div className="space">  
    
      <div className="up-menu">
        <div className="uper-link">
        
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">SPACES</a>
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">UPGRADE</a>
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">AD-FREE</a>
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">NEWSLETTER</a>
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">GET CERTIFIED</a>
        </div>
        <div className="uper-link">
          <a className="upl-a" href="#">CONTACT US</a>
        </div>
      </div>  
      <div className="mid-menu">
        <div className="midm-block">  
          <h5 className="mmb-title">Top Tutorials</h5>
          <a href="" className="ga-button">HTML Tutorial</a>
          <a href="" className="ga-button">CSS Tutorial</a>
          <a href="" className="ga-button">JavaScript Tutorial</a>
          <a href="" className="ga-button">How To Tutorial</a>
          <a href="" className="ga-button">SQL Tutorial</a>
          <a href="" className="ga-button">Python Tutorial</a>
          <a href="" className="ga-button">W3.CSS Tutorial</a>
          <a href="" className="ga-button">Bootstrap Tutorial</a>
          <a href="" className="ga-button">PHP Tutorial</a>
          <a href="" className="ga-button">Java Tutorial</a>
          <a href="" className="ga-button">C++ Tutorial</a>
          <a href="" className="ga-button">jQuery Tutorial</a>
        </div>

        <div className="midm-block">
          <h5 className="mmb-title">Top References</h5>
          <a href="" className="ga-button">HTML Refrence</a>
          <a href="" className="ga-button">CSS Refrence</a>
          <a href="" className="ga-button">JavaScript Refrence</a>
          <a href="" className="ga-button">SQL Refrence</a>
          <a href="" className="ga-button">Python Refrence</a>
          <a href="" className="ga-button">W3.CSS Refrence</a>
          <a href="" className="ga-button">Bootstrap Refrence</a>
          <a href="" className="ga-button">PHP Refrence</a>
          <a href="" className="ga-button">Java Refrence</a>
          <a href="" className="ga-button">Angular Refrence</a>
          <a href="" className="ga-button">jQuery Refrence</a>
        </div>

        <div className="midm-block">
          <h5 className="mmb-title">Top Examples</h5>
          <a href="" className="ga-button">HTML Examples</a>
          <a href="" className="ga-button">CSS Examples</a>
          <a href="" className="ga-button">JavaScript Examples</a>
          <a href="" className="ga-button">How To Examples</a>
          <a href="" className="ga-button">SQL Examples</a>
          <a href="" className="ga-button">Python Examples</a>
          <a href="" className="ga-button">W3.CSS Examples</a>
          <a href="" className="ga-button">Bootstrap Examples</a>
          <a href="" className="ga-button">PHP Examples</a>
          <a href="" className="ga-button">Java Examples</a>
          <a href="" className="ga-button">XML Examples</a>
          <a href="" className="ga-button">jQuery Examples</a>
        </div>

        <div className="midm-block">
          <h5 className="mmb-title">Get Certified</h5>
          <a href="" className="ga-button">HTML Certified</a>
          <a href="" className="ga-button">CSS Certified</a>
          <a href="" className="ga-button">JavaScript Certified</a>
          <a href="" className="ga-button">Front End Certified</a>
          <a href="" className="ga-button">SQL Certified</a>
          <a href="" className="ga-button">Python Certified</a>
          <a href="" className="ga-button">PHP Certified</a>
          <a href="" className="ga-button">jQuery Certified</a>
          <a href="" className="ga-button">Java Certified</a>
          <a href="" className="ga-button">C++ Certified</a>
          <a href="" className="ga-button">C# Certified</a>
          <a href="" className="ga-button">XML Certified</a>
        </div>

      </div>
      <div className="social">
        <a href="" className="blank">
          <i className="sl">
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </i>
        </a>
        <a href="" className="blank">
          <i className="sl">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </i>
        </a>
        <a href="" className="blank">
          <i className="sl">
            <FontAwesomeIcon icon="fa-brands fa-discord" />
          </i>
        </a>
        <a href="" className="blank">
          <i className="sl">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
          </i>
        </a>
        <a href="" className="blank">
          <i className="sl"> 
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </i>
        </a>
        <div className="line"></div>
        <a href="" className="blank2">FORUM</a>
        <a href="" className="blank2">ABOUT</a>
        <a href="" className="blank2">CLASSROOM</a>
      </div>
      <div className="ftext">
        W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
        <br className="hs"/>
        Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
        <br className="hs"/>
        of all content. While using W3Schools, you agree to have read and accepted our 
        <a href="" className="gabot">terms of use</a>
        , 
        <a href="" className="gabot">cookie and privacy policy</a>
        .
        <br/>
        <br/>
        <a href="" className="gabot">Copyright 1999-2024</a>
         by Refsnes Data. All Rights Reserved.
        <a href="" className="gabot">W3Schools is Powered by W3.CSS</a>
        .
        <br/>
        <br/>
      </div>

    </div>  
  </div>

  )
}

export default Footer
