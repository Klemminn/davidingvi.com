import React from 'react'

const Images = () => (
  <section className='colorlib-about' data-section='images'>
    <div className='colorlib-narrow-content'>
      <div className='row'>
        <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box' data-animate-effect='fadeInLeft'>
          <span className='heading-meta'>Myndir</span>
          <h2 className='colorlib-heading'>Nokkrar af mér og mínum</h2>
        </div>
      </div>
      <div className='row row-pt-md'>
        {Array.from(Array(9).keys()).map((index) => (
          <div className='col-md-4 text-center animate-box'>
            <div className={`services color-${(index % 6) + 1}`} style={{ background: `url(images/model${index + 1}.jpg) no-repeat center center`, backgroundSize: 'cover', height: '24em' }}>
              <span className='icon'>
                <i className='icon-bulb' />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Images
