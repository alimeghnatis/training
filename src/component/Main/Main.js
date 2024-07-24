import './main.scss';

function Main() {
    
  return (
    <main class="main">

      {/* lessons */}
      <div className="lessons">
        <section className="lessons-section green-smooth" id="html-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-3">HTML</h1>
            <p className="lessons-left-introduction">The language for building web pages</p>
            <a className="link green" href="#">Learn HTML</a>
            <br />
            <a className="link light-yellow" href="#">Video Tutorial</a>
            <br />
            <a className="link black" href="#">HTML Reference</a>
            <br />
            <a className="link pink" href="#">Get Certified</a>
          </div>
          <div className="lessons-right-content">
            <div className="code-board-wrapper">
              <h3 className="lessons-right-codeBoard-title">HTML Example:</h3>
              <div className="lessons-right-general-codeBoard">
                <div className="code-space-wrapper">
                
                </div> 
              </div>
            </div>
            <a className="lessons-right-try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
        <section className="lessons-section lessons-padding light-yellow" id="css-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-3">CSS</h1>
            <p className="lessons-left-introduction">The language for styling web pages</p>
            <a className="link green" href="#">Learn CSS</a>
            <br />
            <a className="link black" href="#">CSS Reference</a>
            <br />
            <a className="link pink" href="#">Get Certified</a>
          </div>
          <div className="lessons-right-content">
            <div className="code-board-wrapper">
              <h3 className="lessons-right-codeBoard-title">CSS Example:</h3>
              <div className="lessons-right-general-codeBoard">
                <div className="code-space-wrapper">
                
                </div> 
              </div>
            </div>
            <a className="lessons-right-try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
        <section className="lessons-section lessons-padding black" id="js-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-4">JavaScript</h1>
            <p className="lessons-left-introduction">The language for programming web pages</p>
            <a className="link green" href="#">Learn JavaScript</a>
            <br />
            <a className="link white" href="#">JavaScript Reference</a>
            <br />
            <a className="link pink" href="#">Get Certified</a>
          </div>
          <div className="lessons-right-content">
            <div className="code-board-wrapper">
              <h3 className="lessons-right-codeBoard-title">JavaScript Example:</h3>
              <div className="lessons-right-general-codeBoard">
                <div className="code-space-wrapper">
                
                </div> 
              </div>
            </div>
            <a className="lessons-right-try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
        <section className="lessons-section lessons-padding pink-smooth" id="python-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-5">Python</h1>
            <p className="lessons-left-introduction">A popular programming language</p>
            <a className="link green" href="#">Learn Python</a>
            <br />
            <a className="link black" href="#">Python Reference</a>
            <br />
            <a className="link pink" href="#">Get Certified</a> 
          </div>
          <div className="lessons-right-content">
            <div className="code-board-wrapper">
              <h3 className="lessons-right-codeBoard-title">Python Example:</h3>
              <div className="lessons-right-general-codeBoard">
                <div className="code-space-wrapper">
                
                </div>
              </div>
            </div>
            <a className="lessons-right-try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
        <section className="lessons-section lessons-padding sky-blue" id="sql-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-5">SQL</h1>
            <p className="lessons-left-introduction">A language for accessing databases</p>
            <a className="link green" href="#">Learn SQL</a>
            <br />
            <a className="link black" href="#">SQL Reference</a>
            <br />
            <a className="link pink" href="#">Get Certified</a>  
          </div>
          <div className="lessons-right-content">
            <div className="code-board-wrapper">
              <h3 className="lessons-right-codeBoard-title">SQL Example:</h3>
              <div className="lessons-right-general-codeBoard">
                <div className="code-space-wrapper">
                
                </div> 
              </div>
            </div>
            <a className="lessons-right-try-it-link" href="#">Try it Yourself</a>
          </div>
        </section>
      </div>
      
      {/* cards */}
      <div className="cards black">
        <div className="cards-container">
          <div className="cards-section pink" id="php-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">PHP</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A web server programming language</h5>
              </div>
              <a className="link black" href="#">Learn PHP</a>
            </div>
          </div>
          <div className="cards-section light-yellow" id="jQuary-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">jQuary</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A JS library for developing web pages</h5>
              </div>
              <a className="link black" href="#">Learn jQuary</a>
            </div>
          </div>
          <div className="cards-section pink-smooth" id="java-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">Java</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A programming language</h5>
              </div>
              <a className="link black" href="#">Learn Java</a>
            </div>
          </div>
          <div className="cards-section green-smooth" id="C++-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">C++</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A programming language</h5>
              </div>
              <a className="link black" href="#">Learn C++</a>
            </div>
          </div>
          <div className="cards-section sky-blue" id="w3-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">W3.CSS</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A CSS framework for faster and better responsive web pages</h5>
              </div>
              <a className="link black" href="#">Learn W3.CSS</a>
            </div>
          </div>
          <div className="cards-section light-blue" id="bootstrap-card">
            <div className="cards-content-wrapper">
              <h2 className="cards-title">Bootstrap</h2>
              <div className="cards-introduction-wrapper">
                <h5 className="cards-introduction">A CSS framework for designing better web pages</h5>
              </div>
              <a className="link black" href="#">Learn Bootstrap</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* tutorials */}
      <div className="tutorials black">
        <div className="tutorials-container">
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles">
            <a className="tutorials-btn Blackish-pink tutorials-btn-diff-styles" href="#">C</a>
          </div>
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles tutorials-grid-col-styles">
            <a className="tutorials-btn yellow-smooth tutorials-btn-diff-styles" href="#">C#</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">R</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">Kotlin</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">Node.js</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">React</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">JSON</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">Vue</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">MySQL</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">XML</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">Sass</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">Icons</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">RWD</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">Graphics</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">SVG</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">Canvas</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">Raspberry Pi</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">Cyber <span className="tutorials-btn-hidden-word">Security</span></a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">Colors</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">Git</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">Matplotlib</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">NumPy</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">Pandas</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">SciPy</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">ASP</a>
          </div> 
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">AngularJS</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">AppML</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">Go</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">TypeScript</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">Django</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">MongoDB</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">Statistics</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">Data Science</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn light-green" href="#">Typing Speed</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn cyan" href="#">HowTo</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn Blackish-pink" href="#">Code Game</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn yellow-smooth" href="#">Spaces</a>
          </div>
          <div className="tutorials-btn-wrapper">
            <a className="tutorials-btn white-smooth" href="#">PostgreSQL</a>
          </div>
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles">
            <a className="tutorials-btn cyan" href="#">Excel</a>
          </div>
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles tutorials-grid-col-styles">
            <a className="tutorials-btn yellow-smooth" href="#">DSA - D<span className="tutorials-btn-small-word">ata</span> S<span className="tutorials-btn-small-word">tructures and</span> A<span className="tutorials-btn-small-word">lgorithms</span></a>
          </div>
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles">
            <a className="tutorials-btn Blackish-pink" href="#">Machine Learning</a>
          </div>
          <div className="tutorials-btn-wrapper tutorials-grid-child-styles tutorials-grid-col-styles">
            <a className="tutorials-btn light-green" href="#">Artificial Intelligence</a>
          </div>
        </div>
      </div>

      {/* code editor */}
      <div className="code-editor black">
        <div className="code-editor--container">
          <h1 className="code-editor--title">Code Editor</h1>
          <h4 className="code-editor--introduction">With our online code editor, you can edit code and view the result in your browser</h4>
          <div className="code-editor--wrapper">
            <div className="code-editor--header">
              <div className="code-editor--circles-wrapper">
                <span className="circle red-circle"></span>
                <span className="circle yellow-circle"></span>
                <span className="circle green-circle"></span>
              </div>
              <div className="code-editor--input-wrapper">
                <input type="text" disabled value="www.w3schools.com/tryit/" className="code-editor--input" />
              </div>
            </div>
            <div className="code-editor--buttons-wrapper">
              <button className="code-editor--btn active-btn code-editor--btn-hover" id="frontBtn">Frontend</button>
              <button className="code-editor--btn code-editor--btn-hover inactive-btn" id="backBtn">Backend</button>
            </div>
            <div id="Frontend">
              <img className="avg-style-gif img1" src={require('../../images/codeeditor.gif')} alt="" />
            </div>
            <div id="Backend">
              <img className="avg-style-gif img2" src={require('../../images/best2.gif')} alt="" />
            </div>
            <div className="code-editor--front-link-wrapper">
              <a className="code-editor--link green" href="#">Try Frontend Editor (HTML/CSS/JS)</a>
            </div>
            <div className="code-editor--back-link-wrapper">
              <a className="code-editor--link light-yellow" href="#">Try Backend Editor (Python/PHP/Java/C..)</a>
            </div>
          </div>
        </div>
      </div>

      {/* w3schools spaces */}
      <div className="w3schools-spaces black">
        <div className="w3schools-spaces--container">
          <h1 className="w3schools-spaces--title">W3Schools Spaces</h1>
          <h3 className="w3schools-spaces--first-introduction">
            If you want to create your own website, check out
            <a className="w3schools-spaces--first-introduction-link" href="#"> W3Schools Spaces</a>
            .
          </h3>
          <h3 className="w3schools-spaces--second-introduction">
            It is free to use, and does not require any setup: 
          </h3>
          <div className="w3schools-spaces--img-wrapper">
            <img className="avg-style-gif" src={require('../../images/dynamicspaces.gif')} alt="" />
          </div>
          <a className="w3schools-spaces--link green" href="#">Learn More</a>
        </div>
      </div>
      
      {/* my learning */}
      <div className="my-learning green-smooth">
        <div className="my-learning--container">
          <h1 className="my-learning--title">My Learning</h1>
          <h4 className="my-learning--first-introduction">
            Track your progress with our<strong className="my-learning--first-introduction-strong"> free</strong> "My Learning" program.
          </h4>
          <h4 className="my-learning--second-introduction">Log in to your account, and start earning points!</h4>
          <div className="my-learning--img-wrapper">
            <img className="my-learning--img" src={require('../../images/myl-green-off.png')} alt="" />
          </div>
          <a className="my-learning--link green" href="#">Sign Up for Free</a>
        </div>
      </div>

      {/* plus user */}
      <div className="plus-user black">
        <div className="plus-user--container">
          <h1 className="plus-user--title">Become a Plus User</h1>
          <h3 className="plus-user--introduction">And unlock powerful features:</h3>
          <div className="plus-user--list-wrapper">
            <ul>
              <li className="plus-user--list">
                <img className="plus-user--list-img" src={require('../../images/check3.db67d31e.png')} alt="" />
                Browse W3Schools <span className="plus-user--bold-text">without ads</span>
              </li>
              <li className="plus-user--list">
                <img className="plus-user--list-img" src={require('../../images/check3.db67d31e.png')} alt="" />
                Build and host Websites
              </li>
              <li className="plus-user--list">
                <img className="plus-user--list-img" src={require('../../images/check3.db67d31e.png')} alt="" />
                Get extra credits
              </li>
              <li className="plus-user--list">
                <img className="plus-user--list-img" src={require('../../images/check3.db67d31e.png')} alt="" />
                Priority support
              </li>
            </ul>
          </div>
          <a className="plus-user--link green" href="#">Learn More</a>
        </div>
      </div>
      
      {/* color picker */}
      <div className="color-picker pink-smooth">
        <div className="color-picker--container">
          <h1 className="color-picker--title">Color Picker</h1>
          <h4 className="color-picker--introduction">W3Schools' famous color picker:</h4>
          <a className="color-picker--img-link" href="#">
            <img className="color-picker--img" src={require('../../images/colorpicker.png')} alt="" />
          </a>
        </div>
      </div>
      
      {/* code game */}
      <div className="code-game sky-blue">
        <div className="code-game--container">
          <h1 className="code-game--title">Code Game</h1>
          <h4 className="code-game--introduction">Help the Lynx collect pine cones!</h4>
          <div className="code-game--img-wrapper">
            <a className="code-game--img-link" href="#">
            <img className="code-game--img" src={require('../../images/w3lynx_200.png')} alt="" />
            </a>
          </div>
          <a className="code-game--link black" href="#">Play Game</a>
        </div>
      </div>
      
      {/* exercise and quizzes */}
      <div className="exercise black">
        <div className="exercise-container">
          <h2 className="exercise-title">Exercises and Quizzes</h2>
          <h4 className="exercise-introduction">Test your skills!</h4>
          <div className="exercise-item-wrapper">
            <div className="exercise-item">
              <a className="exercise-item-link green" href="#">Exercises</a>
            </div>
            <div className="exercise-item">
              <a className="exercise-item-link light-yellow" href="#">Quizzes</a>
            </div>
          </div>
        </div>
      </div>

    </main>  
  ) 
}

export default Main
