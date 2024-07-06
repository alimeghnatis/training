import './Main.css'

function Main () {
  return (
    <div className="container">
      <main>
        <section className="html-review">
          <div className="left-content mt-6">
            <h1 className="html-left-title avg-style-leftTitle">HTML</h1>
            <p className="html-left-introduction avg-style-leftIntroduction">The language for building web pages</p>
            <a href="#" className="html-left-learn-link avg-style-leftLink green">Learn HTML</a>
            <br />
            <a href="#" className="html-left-video-link avg-style-leftLink lemon">Video Tutorial</a>
            <br />
            <a href="#" className="html-left-reference-link avg-style-leftLink black">HTML Reference</a>
            <br />
            <a href="#" className="html-left-certified-link avg-style-leftLink pink">Get Certified</a>
          </div>
          <div className="right-content">
            <div className="code-board-wrapper avg-style-codeBoard">
              <h3 className="html-board-title">HTML Example:</h3>
              <div className="general-code-boarder avg-style-general-codeBoard"> 
                <div className="code-space-wrapper">
                  <span className="doctype-html-code-wrapper">
                    <span className="doctype-html-code brw-cl fs-code bs-doc">!DOCTYPE</span>
                    <span className="html-code fs-code bf-doc"> html</span>
                  </span>
                  <br />
                  <br />
                  <span className="html-open-tag-code-wrapper brw-cl bs fs-code">
                    html
                  </span>
                  <br />
                  <br />
                  <span className="heade-open-tag-code-wrapper brw-cl bs fs-code">
                    heade
                  </span>
                  <br />
                  <br />
                  <span className="title-open-tag-code-wrapper brw-cl bs fs-code">
                    title
                  </span>
                  <span className="fs-code">HTML Tutorial</span>
                  <span className="title-close-tag-code-wrapper brw-cl bs fs-code">
                    /title
                  </span>
                  <br />
                  <br />
                  <span className="head-close-tag-code-wrapper brw-cl bs fs-code">
                    /head
                  </span>
                  <br />
                  <br />
                  <span className="body-open-tag-code-wrapper brw-cl bs fs-code">
                    body
                  </span>
                  <br />
                  <br />
                  <span className="h1-open-tag-code-wrapper brw-cl bs fs-code">
                    h1
                  </span>
                  <span className="h1-tag-code-content fs-code">
                    This is a heading
                  </span>
                  <span className="h1-close-tag-code-wrapper brw-cl bs fs-code">
                    /h1
                  </span>
                  <br />
                  <br /> 
                  <span className="p-tag-code-wrapper brw-cl bs fs-code">
                    p
                  </span>
                  <span className="p-tag-code-content fs-code">
                    This is a paragraph.
                  </span>
                  <span className="p-close-tag-code-wrapper brw-cl bs fs-code">
                    /p
                  </span>
                  <br />
                  <br />
                  <span className="body-close-tag-code-wrapper brw-cl bs fs-code">
                    /body
                  </span>
                  <br />
                  <br />
                  <span className="html-close-tag-code-wrapper brw-cl bs fs-code">
                    /html
                  </span>
                </div> 
              </div>
              <a className="try-it-link" href="#">Try it Yourself</a>
            </div>
          </div>
        </section>

        <section className="css-review">
          <div className="left-content mt-6">
            <h1 className="css-left-title avg-style-leftTitle">CSS</h1>
            <p className="css-left-introduction avg-style-leftIntroduction">The language for styling web pages</p>
            <a className="css-left-learn-link avg-style-leftLink green" href="#">Learn CSS</a>
            <br />
            <a className="css-left-reference-link avg-style-leftLink black" href="#">CSS Reference</a>
            <br />
            <a className="css-left-certified-link avg-style-leftLink pink" href="#">Get Certified</a>
          </div>
          <div className="right-content">
            <div className="code-board-wrapper avg-style-codeBoard">
              <h3 className="css-board-title">CSS Example:</h3>
              <div className="general-code-boarder avg-style-general-codeBoard">
                <div className="code-space-wrapper">
                  <span className="body-selector brw-cl fs-code">body</span>
                  <span className="body-style-wrapper">
                    <span className="body-bgc-property fs-code orange">background-color</span>
                    <span className="body-bgc-value fs-code blue">lightblue</span>
                  </span>
                  <br />
                  <span className="body-close-b fs-code">}</span>
                  <span className="h1-selector brw-cl fs-code">h1</span>
                  <div className="h1-style-wrapper">
                    <span className="h1-color-property fs-code orange">color</span>
                    <span className="h1-color-value fs-code blue">white</span>
                    <br />
                    <span className="h1-text-align-property fs-code orange">text-align</span>
                    <span className="h1-text-align-value fs-code blue">center</span>
                  </div> 
                  <span className="h1-close-b fs-code">}</span>
                  <span className="p-selector brw-cl fs-code">p</span>
                  <div className="p-style-wrapper">
                    <span className="p-font-family-property fs-code orange">font-family</span>
                    <span className="p-font-family-value fs-code blue">verdana</span>
                  </div>
                  <span className="p-close-b fs-code">}</span>
                </div> 
              </div>
              <a className="try-it-link" href="#">Try it Yourself</a>
            </div>
          </div>
        </section>

        <section className="js-review">
          <div className="left-content mt-6">
            <h1 className="js-left-title avg-style-leftTitle">JavaScript</h1>
            <p className="js-left-introduction avg-style-leftIntroduction">The language for programming web pages</p>
            <a className="js-left-learn-link avg-style-leftLink green" href="#">Learn JavaScript</a>
            <br />
            <a className="js-left-reference-link avg-style-leftLink white-bg" href="#">JavaScript Reference</a>
            <br />
            <a className="js-left-certified-link avg-style-leftLink pink" href="#">Get Certified</a>
          </div>
          <div className="right-content">
            <div className="code-board-wrapper avg-style-codeBoard">
              <h3 className="css-board-title">JavaScript Example:</h3>
              <div className="general-code-boarder avg-style-general-codeBoard">
                <div className="code-space-wrapper">
                  <div className="js-button-codes-wrapper">
                    <div className="mb-06">
                      <span className="js-open-button-tag fs-code brw-cl">button</span>
                      <span className="js-button-att fs-code orange">onclick</span>
                      <span className="js-button-equal-sign fs-code blue">=</span>
                      <span className="js-button-att-value fs-code blue">"myFunction( )"></span>
                      <span className="js-button-txt fs-code">Click Me!</span>
                    </div>
                    <span className="js-close-button-tag fs-code brw-cl">/button</span>
                  </div>
                  <div className="js-script-code-wrapper">
                    <span className="open-script-tag fs-code brw-cl">script</span>
                    <div className="mb-06">  
                      <span className="js-function fs-code blue">function</span>
                      <span className="js-function-name fs-code"> myFunction( )</span>
                    </div>
                    <div className="mb-06">
                      <span className="js-let-variable fs-code blue">let</span>
                      <span className="js-let-variable-name fs-code"> x</span>
                      <span className="js-let-variable-equal fs-code"> =</span>
                    </div>
                    <div className="mb-06">
                      <span className="js-doc-getId fs-code">document.getElementById(<span className="js-doc-getId-demo fs-code brw-cl">"demo"</span>);</span>
                    </div>
                    <div className="mb-06">
                      <span className="js-x-style-fs fs-code">x.style.fontSize = <span className="js-x-style-fs-value fs-code brw-cl">"25px"</span>;</span>
                    </div>
                    <div className="mb-06">
                      <span className="js-x-style-color fs-code">x.style.color = <span className="js-x-style-color-value fs-code brw-cl">"red"</span>;</span>
                    </div>
                    <div className="mb-06">
                      <span className="js-close-c-bracket fs-code">}</span>
                    </div>
                    <span className="close-script-tag fs-code brw-cl">/script</span>
                  </div>
                </div>
              </div>
              <a className="try-it-link" href="#">Try it Yourself</a>
            </div>
          </div>
        </section>

        <section className="python-review">
          <div className="left-content mt-6">
            <h1 className="python-left-title avg-style-leftTitle">Python</h1>
            <p className="python-left-introduction avg-style-leftIntroduction">A popular programming language</p>
            <a className="python-left-learn-link avg-style-leftLink green" href="#">Learn Python</a>
            <br />
            <a className="python-left-reference-link avg-style-leftLink black" href="#">Python Reference</a>
            <br />
            <a className="python-left-certified-link avg-style-leftLink pink" href="#">Get Certified</a>
          </div>
          <div className="right-content">
            <div className="code-board-wrapper avg-style-codeBoard">
              <h3 className="python-board-title">Python Example:</h3>
              <div className="general-code-boarder avg-style-general-codeBoard">
                <div className="code-space-wrapper">
                  <div className="mb-06">
                    <span className="python-if-statement fs-code"><span className="if fs-code blue">if</span> <span className="if-first-value fs-code orange">5</span> > <span className="if-twice-value fs-code orange">2</span>:</span>
                  </div>
                  <div className="ml-2rem">
                    <span className="if-output fs-code">print (<span className="fs-code brw-cl">"Five is greater than two!"</span>)</span>
                  </div>
                </div>
              </div>
              <a className="try-it-link" href="#">Try it Yourself</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
