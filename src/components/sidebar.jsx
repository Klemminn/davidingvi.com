import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Davíð Ingvi Snorrason</a></h1>
              <span className="email"><i className="icon-mail"></i> Verkfræðingur</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Kynning</a></li>
                  <li><a href="#about" data-nav-section="about">Um mig</a></li>
                  <li><a href="#images" data-nav-section="images">Myndir</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Ævisagan</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/david.snorrason/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.linkedin.com/in/dav%C3%AD%C3%B0-ingvi-snorrason-5b622b143/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
