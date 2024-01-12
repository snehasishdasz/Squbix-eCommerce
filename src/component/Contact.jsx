import React from 'react';

const Contact = () => {
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Contact</h2>
            <p className="text-secondary mb-5 text-center">
            We can help. Our team of experts is on hand to answer your questions.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <form action="#!">
                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      
                      <input type="tel" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
