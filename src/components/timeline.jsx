import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Ævisagan</span>
                <h2 className="colorlib-heading animate-box">Tímalína</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ég fæðist <span>Ágúst 1988</span></h2>
                        <p>Þann 2. ágúst 1988 kem ég í heiminn.  Ég var stórt og myndarlegt barn.  Sérstaklega vil ég þakka móður minni og föður, sem og fyrri kynslóðum fjölskyldunnar, fyrir vel unnin störf og vinning í genalottóinu.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ýmislegt <span>1988-2019</span></h2>
                        <p>
                          Það hefur ýmislegt verið brallað, ég eignaðist fullt af flottum vinum, kynntist ástinni minni, Hildi Gyðu,
                          barnaði hana þrisvar, og hef lifað hamingjusömu lífi. Stefni á að halda flestu af þessu áfram.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Gerist meistari <span>Febrúar 2020</span></h2>
                        <p>
                          Loksins fékkst það skjalfest hversu mikill meistari ég er, þegar ég lauk meistaranámi í verkfræði frá Háskólanum í Reykjavík, febrúar 2020.
                          <br />Húrra fyrir mér!                          
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
