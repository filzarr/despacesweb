import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="footer-content">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-md-6">
                <div className="copyright">
                  <p>&copy; Selio theme made in EU. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="footer-social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer