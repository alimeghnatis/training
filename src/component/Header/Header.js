import './header.scss'

function Header() {
  const imagePath = '../../images/logo.png'
  return (
    <div class="header">
      <div className="logo">
        <img src={imagePath} alt="W3school logo" />
      </div>
      <ul className="menu">
        <li><a href="https://google.com">HTML</a></li>
        <li><a href="https://google.com">css</a></li>
        <li><a href="https://google.com">SCSS</a></li>
        <li><a href="https://google.com">Javascript</a></li>
        <li><a href="https://google.com">ReactJS</a></li>
        <li><a href="https://google.com">AngularJS</a></li>
        <li><a href="https://google.com">VueJS</a></li>
        <li><a href="https://google.com">PHP</a></li>
        <li><a href="https://google.com">MySQL</a></li>
      </ul>
    </div>
  )
}


export default Header
