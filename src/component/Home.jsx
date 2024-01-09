import React from 'react'

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg4.jpg" className="card-img" alt="Background" height="660px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0"><span  className='bg-light text-dark px-2' >NEW SEASON</span> ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home