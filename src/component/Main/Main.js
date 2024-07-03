import './Main.css'

function Main () {
  return (
    <div className="container">
      <main>
        <section className="html-review">
          <div className="left-content">
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
      </main>
    </div>
  )
}

export default Main
