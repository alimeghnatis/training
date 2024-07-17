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
    </main>  
  )
}

export default Main
