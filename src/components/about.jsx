import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Davíð Ingvi</span>
                    <h2 className="colorlib-heading">Hver er ég?</h2>
                    <p>Ég er framúskarandi verkfræðingur, faðir, elskhugi, sonur og vinur.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="images">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Myndir</span>
                <h2 className="colorlib-heading">Nokkrar af mér og mínum</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" style={{backgroundImage: 'url(images/model1.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2" style={{backgroundImage: 'url(images/model2.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3" style={{backgroundImage: 'url(images/model3.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4" style={{backgroundImage: 'url(images/model4.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5" style={{backgroundImage: 'url(images/model5.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6" style={{backgroundImage: 'url(images/model6.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" style={{backgroundImage: 'url(images/model7.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2" style={{backgroundImage: 'url(images/model8.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3" style={{backgroundImage: 'url(images/model9.jpg)', backgroundSize: 'cover', height: '24em' }}>
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
