 
import Image from 'next/image'
import styles from './page.module.css' 

const Home = () => {
  return ( 

      
    

      

      <div className="">
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content">
                  <h1>Discover best properties in one place</h1>
                </div>
                <form action="#" className="row banner-search">
                  <div className="form_field addres">
                    <input type="text" className="form-control" placeholder="Enter Address, City or State" />
                  </div>
                  <div className="form_field tpmax">
                    <div className="form-group">
                      <div className="drop-menu">
                        <div className="select">
                          <span>Any type</span>
                          <i className="fa fa-angle-down"></i>
                        </div>
                        <input type="hidden" name="gender" />
                        <ul className="dropeddown">
                          <li>For Sale</li>
                          <li>For Rent</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form_field tpmax">
                    <div className="form-group">
                      <div className="drop-menu">
                        <div className="select">
                          <span>Min Price</span>
                          <i className="fa fa-angle-down"></i>
                        </div>
                        <input type="hidden" name="gender" />
                        <ul className="dropeddown">
                          <li>300$</li>
                          <li>400$</li>
                          <li>500$</li>
                          <li>200$</li>
                          <li>600$</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form_field tpmax">
                    <div className="form-group">
                      <div className="drop-menu">
                        <div className="select">
                          <span>Max Price</span>
                          <i className="fa fa-angle-down"></i>
                        </div>
                        <input type="hidden" name="gender" />
                        <ul className="dropeddown">
                          <li>2000</li>
                          <li>3000</li>
                          <li>4000</li>
                          <li>5000</li>
                          <li>6000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form_field srch-btn">
                    <a href="#" className="btn btn-outline-primary ">
                      <i className="la la-search"></i>
                      <span>Search</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="intro section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 pl-0">
                <div className="intro-content">
                  <h3>Homes around the world</h3>
                  <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                  </p>
                  <a href="#" className="btn btn-outline-primary view-btn">
                    <i className="icon-arrow-right-circle"></i>View for rent</a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pr-0">
                <div className="intro-img">
                  <img
                    src="https://via.placeholder.com/570x400"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className='img-fluid' // Mengatur bagaimana gambar disesuaikan dalam kontainer
                  />
                </div>
              </div>
            </div>
            <div className="intro-thumb-row">
              <a href="#" className="intro-thumb">
                <img
                  src="https://via.placeholder.com/95x70"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain" className='img-fluid' // Mengatur bagaimana gambar disesuaikan dalam kontainer
                />
                <h6>Homes</h6>
              </a>
              <a href="#" className="intro-thumb">
                <img
                  src="https://via.placeholder.com/95x70"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain" className='img-fluid' // Mengatur bagaimana gambar disesuaikan dalam kontainer
                />
                <h6>Appartments</h6>
              </a>
              <a href="#" className="intro-thumb">
                <img
                  src="https://via.placeholder.com/95x70"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain" className='img-fluid' // Mengatur bagaimana gambar disesuaikan dalam kontainer
                />
                <h6>Garages</h6>
              </a>
            </div>
          </div>
        </section>
        <section className="popular-listing section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-heading">
                  <span>Discover</span>
                  <h3>Popular Listing</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <a href="24_Property_Single.html" title="">
                    <div className="img-block">
                      <div className="overlay"></div>
                      <img
                        src="https://via.placeholder.com/370x295"
                        alt="Logo"
                        layout="fill"
                        objectFit="contain" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                        className='img-fluid'
                      />
                      <div className="rate-info">
                        <h5>$550.000</h5>
                        <span>For Rent</span>
                      </div>
                    </div>
                  </a>
                  <div className="card-body">
                    <a href="24_Property_Single.html" title="">
                      <h3>Traditional Apartments</h3>
                      <p> <i className="la la-map-marker"></i>212 5th Ave, New York</p>
                    </a>
                    <ul>
                      <li>3 Bathrooms</li>
                      <li>2 Beds</li>
                      <li>Area 555 Sq Ft</li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="pull-left">
                      <i className="la la-heart-o"></i>
                    </a>
                    <a href="#" className="pull-right">
                      <i className="la la-calendar-check-o"></i> 25 Days Ago</a>
                  </div>
                  <a href="24_Property_Single.html" title="" className="ext-link"></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <a href="24_Property_Single.html" title="">
                    <div className="img-block">
                      <div className="overlay"></div>
                      <img
                        src="https://via.placeholder.com/370x295"
                        alt="Logo"
                        layout="fill"
                        objectFit="contain"
                        className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                      />
                      <div className="rate-info">
                        <h5>$550.000</h5>
                        <span>For Rent</span>
                      </div>
                    </div>
                  </a>
                  <div className="card-body">
                    <a href="24_Property_Single.html" title="">
                      <h3>Traditional Apartments</h3>
                      <p> <i className="la la-map-marker"></i>212 5th Ave, New York</p>
                    </a>
                    <ul>
                      <li>3 Bathrooms</li>
                      <li>2 Beds</li>
                      <li>Area 555 Sq Ft</li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="pull-left">
                      <i className="la la-heart-o"></i>
                    </a>
                    <a href="#" className="pull-right">
                      <i className="la la-calendar-check-o"></i> 25 Days Ago</a>
                  </div>
                  <a href="24_Property_Single.html" title="" className="ext-link"></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <a href="24_Property_Single.html" title="">
                    <div className="img-block">
                      <div className="overlay"></div>
                      <img
                        src="https://via.placeholder.com/370x295"
                        alt="Logo"
                        layout="fill"
                        objectFit="contain"
                        className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                      />
                      <div className="rate-info">
                        <h5>$550.000</h5>
                        <span>For Rent</span>
                      </div>
                    </div>
                  </a>
                  <div className="card-body">
                    <a href="24_Property_Single.html" title="">
                      <h3>Traditional Apartments</h3>
                      <p> <i className="la la-map-marker"></i>212 5th Ave, New York</p>
                    </a>
                    <ul>
                      <li>3 Bathrooms</li>
                      <li>2 Beds</li>
                      <li>Area 555 Sq Ft</li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="pull-left">
                      <i className="la la-heart-o"></i>
                    </a>
                    <a href="#" className="pull-right">
                      <i className="la la-calendar-check-o"></i> 25 Days Ago</a>
                  </div>
                  <a href="24_Property_Single.html" title="" className="ext-link"></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="alert alert-success" role="alert">
          <strong>Added to Favourites</strong> You can check your favourite items here <a href="#" className="alert-link">Favourite Items</a>.
          <a href="#" title="" className="close-alert"><i className="la la-close"></i></a>
        </div>
        <section className="explore-feature section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-heading">
                  <span>Explore Features</span>
                  <h3>Service You Need</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                <a href="#" title="">
                  <div className="card">
                    <div className="card-body">
                      <i className="icon-home"></i>
                      <h3>Perfect Tools</h3>
                      <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                <a href="#" title="">
                  <div className="card">
                    <div className="card-body">
                      <i className="icon-cursor"></i>
                      <h3>Search in Click</h3>
                      <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                <a href="#" title="">
                  <div className="card">
                    <div className="card-body">
                      <i className="icon-lock"></i>
                      <h3>User Control</h3>
                      <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-cities section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-heading">
                  <span>Popular Cities</span>
                  <h3>Find Perfect Place</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <a href="#">
                  <div className="card">
                    <div className="overlay"></div>
                    <img
                      src="https://via.placeholder.com/370x370"
                      alt="Logo"
                      layout="fill"
                      objectFit="contain"
                      className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                    />
                    <div className="card-body">
                      <h4>New York</h4>
                      <p>5 Listings</p>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 col-md-6">
                <a href="#">
                  <div className="card">
                    <div className="overlay"></div>
                    <img
                      src="https://via.placeholder.com/370x370"
                      alt="Logo"
                      layout="fill"
                      objectFit="contain"
                      className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                    />
                    <div className="card-body">
                      <h4>London</h4>
                      <p>10 Listings</p>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 col-md-6">
                <a href="#">
                  <div className="card">
                    <div className="overlay"></div>
                    <img
                      src="https://via.placeholder.com/370x370"
                      alt="Logo"
                      layout="fill"
                      objectFit="contain"
                      className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                    />
                      <div className="card-body">
                        <h4>Melbrone</h4>
                        <p>7 Listings</p>
                        <i className="fa fa-angle-right"></i>
                      </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="map-container" className="fullwidth-home-map">
          <h3 className="vis-hid">Visible Heading</h3>
          <div id="map" data-map-zoom="9"></div>
        </section>
        <a href="#" title="">
          <section className="cta section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="cta-text">
                    <h2>Discover a home you'll love to stay</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </a>
        <section className="bottom section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-sm-6 col-md-4">
                <div className="bottom-logo">
                <img
                      src="/assets/images/logo.png"
                      alt="Logo"
                      layout="fill"
                      objectFit="contain"
                      className="img-fluid" // Mengatur bagaimana gambar disesuaikan dalam kontainer
                    />
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-3">
                <div className="bottom-list">
                  <h3>Helpful Links</h3>
                  <ul>
                    <li>
                      <a href="18_Half_Map.html" title="">Half Map</a>
                    </li>
                    <li>
                      <a href="#" title="">Register</a>
                    </li>
                    <li>
                      <a href="#" title="">Pricing</a>
                    </li>
                    <li>
                      <a href="#" title="">Add Listing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-sm-12 col-md-5 pl-0">
                <div className="bottom-desc">
                  <h3>Aditional Information</h3>
                  <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
   
      </div>

     
 
  )
}
Home.getInitialProps = async () => {
  // Nonaktifkan SSR dengan mengembalikan objek kosong
  return {props: {}};
};

export default Home;
