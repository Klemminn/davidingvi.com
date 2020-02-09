import React from 'react'

const Introduction = () => (
  <div>
    <section id='colorlib-hero' className='js-fullheight' data-section='home'>
      <div className='flexslider js-fullheight'>
        <ul className='slides'>
          {[
            (<h1>Hæ! <br />Davíð heiti ég!</h1>),
            (<h1>Ég er <br /> VERKFRÓÐUR!!!</h1>),
            (<h1>Ég á <br /> flotta fjölskyldu!</h1>)
          ].map((text) => (
            <li>
              <div className='overlay' />
              <div className='container-fluid'>
                <div className='row'>
                  <div className='js-fullheight slider-text'>
                    <div className='slider-text-inner js-fullheight'>
                      <div className='desc'>
                        {text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
)

export default Introduction
