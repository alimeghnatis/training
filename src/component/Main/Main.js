import './main.scss';

function Main() {
  return (
    <main class="main">
      <div className="lessons">
        <section className="lessons-section" id="html-review">
          <div className="lessons-left-content">
            <h1 className="lessons-left-title fs-3">HTML</h1>
            <p className="lessons-left-introduction">The language for building web pages</p>
            <a className="lessons-left-link green" href="#">Learn HTML</a>
            <br />
            <a className="lessons-left-link light-yellow" href="#">Video Tutorial</a>
            <br />
            <a className="lessons-left-link black" href="#">HTML Reference</a>
            <br />
            <a className="lessons-left-link pink" href="#">Get Certified</a>
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
            <a className="lessons-left-link green" href="#">Learn CSS</a>
            <br />
            <a className="lessons-left-link black" href="#">CSS Reference</a>
            <br />
            <a className="lessons-left-link pink" href="#">Get Certified</a>
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
            <a className="lessons-left-link green" href="#">Learn JavaScript</a>
            <br />
            <a className="lessons-left-link white" href="#">JavaScript Reference</a>
            <br />
            <a className="lessons-left-link pink" href="#">Get Certified</a>
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
            <a className="lessons-left-link green" href="#">Learn Python</a>
            <br />
            <a className="lessons-left-link black" href="#">Python Reference</a>
            <br />
            <a className="lessons-left-link pink" href="#">Get Certified</a> 
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
            <a className="lessons-left-link green" href="#">Learn SQL</a>
            <br />
            <a className="lessons-left-link black" href="#">SQL Reference</a>
            <br />
            <a className="lessons-left-link pink" href="#">Get Certified</a>  
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
    </main>  
  )
}

export default Main
