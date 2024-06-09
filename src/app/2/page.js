import React from 'react'

const page = () => {
    return (
        <div className="wrapper">

            <header className="pb">

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="01_Home.html">
                                        <img src="assets/images/logo2.png" alt=""/>
                                    </a>
                                    <button className="menu-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                                        <span className="icon-spar"></span>
                                        <span className="icon-spar"></span>
                                        <span className="icon-spar"></span>
                                    </button>

                                    <div className="navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item dropdown active">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                                    Home
                                                </a>
                                                <div className="dropdown-menu animated">
                                                    <a className="dropdown-item" href="01_Home.html">White Menu with Center Search</a>
                                                    <a className="dropdown-item active" href="02_Home.html">Image Menu with Center Search 2</a>
                                                    <a className="dropdown-item" href="03_Home.html">Map with Center Search</a>
                                                    <a className="dropdown-item" href="04_Home.html">Geo SVG Map</a>
                                                    <a className="dropdown-item" href="05_Home.html">Slider Header</a>
                                                    <a className="dropdown-item" href="06_Home.html">Image Header with Description</a>
                                                    <a className="dropdown-item" href="07_Home_Categories_and_Advanced_Search.html">More Search Features</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                                    Features
                                                </a>
                                                <div className="dropdown-menu animated">
                                                    <a className="dropdown-item" href="17_Features_Example_Alt_Titlebar.html">Features Example</a>
                                                    <a className="dropdown-item" href="18_Half_Map.html">Half Map</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                                    Listing
                                                </a>
                                                <div className="dropdown-menu animated">
                                                    <a className="dropdown-item" href="21_List_Layout_With_Map.html">List Layout with Map</a>
                                                    <a className="dropdown-item" href="22_List_Layout_With_Sidebar.html">List Layout with Sidebar</a>
                                                    <a className="dropdown-item" href="11_Agent_Profile.html">Agent Profile</a>
                                                    <a className="dropdown-item" href="24_Property_Single.html">Property Single</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown">
                                                    Pages
                                                </a>
                                                <div className="dropdown-menu animated">
                                                    <a className="dropdown-item" href="12_Blog_Grid.html">Blog Grid</a>
                                                    <a className="dropdown-item" href="13_Blog_Standart.html">Blog Standard</a>
                                                    <a className="dropdown-item" href="14_Blog_Open.html">Blog Open</a>
                                                    <a className="dropdown-item" href="10_About.html">About</a>
                                                    <a className="dropdown-item" href="15_Contact.html">Contact</a>
                                                    <a className="dropdown-item" href="09_404.html">404</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="d-inline my-2 my-lg-0">
                                            <ul className="navbar-nav">
                                                <li className="nav-item signin-btn">
                                                    <a href="#" className="nav-link">
                                                        <i className="la la-sign-in"></i>
                                                        <span><b className="signin-op">Sign in</b> or <b className="reg-op">Register</b></span>
                                                    </a>

                                                </li>
                                                <li className="nav-item submit-btn">
                                                    <a href="#" className="my-2 my-sm-0 nav-link sbmt-btn">
                                                        <i className="icon-plus"></i>
                                                        <span>Submit Listing</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" title="" className="close-menu"><i className="la la-close"></i></a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header> 

            <div className="popup" id="sign-popup">
                <h3>Sign In to your Account</h3>
                <div className="popup-form">
                    <form>
                        <div className="form-field">
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="form-field">
                            <input type="text" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-cp">
                            <div className="form-field">
                                <div className="input-field">
                                    <input type="checkbox" name="ccc" id="cc1"/>
                                        <label for="cc1">
                                            <span></span>
                                            <small>Remember me</small>
                                        </label>
                                </div>
                            </div>
                            <a href="#" title="">Forgot Password?</a>
                        </div> 
                        <button type="submit" className="btn2">Sign In</button>
                    </form>
                    <a href="#" title="" className="fb-btn"> <i className="fa fa-facebook"></i>Sign In With Facebook</a>
                </div>
            </div> 

            <div className="popup" id="register-popup">
                <h3>Register</h3>
                <div className="popup-form">
                    <form>
                        <div className="form-field">
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="form-field">
                            <input type="text" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-field">
                            <input type="text" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-cp">
                            <div className="form-field">
                                <div className="input-field">
                                    <input type="checkbox" name="ccc" id="cc2"/>
                                        <label for="cc2">
                                            <span></span>
                                            <small>I agree with terms</small>
                                        </label>
                                </div>
                            </div>
                            <a href="#" title="" className="signin-op">Have an account?</a>
                        </div> 
                        <button type="submit" className="btn2">Register</button>
                    </form>
                </div>
            </div> 

            <section className="banner hp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content">
                                <h1>Discover best properties in one place</h1>
                            </div>
                            <form action="#" className="row banner-search">
                                <div className="form_field addres">
                                    <input type="text" className="form-control" placeholder="Enter Address, City or State"/>
                                </div>
                                <div className="form_field tpmax">
                                    <div className="form-group">
                                        <div className="drop-menu">
                                            <div className="select">
                                                <span>Any type</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                            <input type="hidden" name="gender"/>
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
                                            <input type="hidden" name="gender"/>
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
                                            <input type="hidden" name="gender"/>
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

            <section className="popular-listing hp2 section-padding">
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
                                            <div className="rate-info">
                                                <h5>$550.000</h5>
                                                <span>For Rent</span>
                                            </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <a href="24_Property_Single.html" title="">
                                        <h3>Traditional Apartments</h3>
                                        <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
                                            <div className="rate-info">
                                                <h5>$550.000</h5>
                                                <span>For Rent</span>
                                            </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <a href="24_Property_Single.html" title="">
                                        <h3>Traditional Apartments</h3>
                                        <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
                                            <div className="rate-info">
                                                <h5>$550.000</h5>
                                                <span>For Rent</span>
                                            </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <a href="24_Property_Single.html" title="">
                                        <h3>Traditional Apartments</h3>
                                        <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
                                            <div className="rate-info">
                                                <h5>$550.000</h5>
                                                <span>For Rent</span>
                                            </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <a href="24_Property_Single.html" title="">
                                        <h3>Traditional Apartments</h3>
                                        <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
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
                                        <img src="https://via.placeholder.com/370x295" alt="" className="img-fluid"/>
                                            <div className="rate-info">
                                                <h5>$550.000</h5>
                                                <span>For Rent</span>
                                            </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <a href="24_Property_Single.html" title="">
                                        <h3>Traditional Apartments</h3>
                                        <p><i className="la la-map-marker"></i>212 5th Ave, New York</p>
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
                        <div className="col-lg-12">
                            <div className="load-more-posts">
                                <a href="#" title="" className="btn2">Load More</a>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

            <section className="apartment-sec section-padding">
                <div className="container">
                    <div className="card">
                        <a href="24_Property_Single.html" title="">
                            <div className="img-block">
                                <div className="overlay"></div>
                                <img src="https://via.placeholder.com/570x464" alt="" className="img-fluid"/>
                            </div>
                        </a>
                        <div className="card_bod_full">
                            <div className="card-body">
                                <a href="24_Property_Single.html" title="">
                                    <h3>Traditional Apartments</h3>
                                    <p> <i className="la la-map-marker"></i>212 5th Ave, New York</p>
                                </a>
                                <div className="rate-info">
                                    <span>For Rent</span>
                                    <h5>$550.000</h5>
                                </div>
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpu tate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincid-unt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per.</p>
                                <ul>
                                    <li>3 Bathrooms</li>
                                    <li>2 Beds</li>
                                    <li>Area 555 Sq Ft</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <div className="crd-links">
                                    <a href="#" className="pull-left">
                                        <i className="la la-heart-o"></i>
                                    </a>
                                    <a href="#" className="plf">
                                        <i className="la la-calendar-check-o"></i> 25 Days Ago
                                    </a>
                                </div> 
                            </div>
                        </div> 
                        <a href="24_Property_Single.html" title="" className="ext-link"></a>
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

            <section className="blog-grid hp2 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading">
                                <span>Our Blog</span>
                                <h3>Recent Posts</h3>
                            </div>
                        </div>
                    </div>
                    <div className="blog-grid-posts mg">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/370x295" alt=""/>
                                        </a>
                                        <div className="view-post">
                                            <a href="14_Blog_Open.html" title="" className="view-posts">View Post</a>
                                        </div>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit vamec.</p>
                                        <a href="14_Blog_Open.html" title="">Read More <i className="la la-long-arrow-right"></i></a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/370x295" alt=""/>
                                        </a>
                                        <div className="view-post">
                                            <a href="14_Blog_Open.html" title="" className="view-posts">View Post</a>
                                        </div>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit vamec.</p>
                                        <a href="14_Blog_Open.html" title="">Read More <i className="la la-long-arrow-right"></i></a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/370x295" alt=""/>
                                        </a>
                                        <div className="view-post">
                                            <a href="14_Blog_Open.html" title="" className="view-posts">View Post</a>
                                        </div>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit vamec.</p>
                                        <a href="14_Blog_Open.html" title="">Read More <i className="la la-long-arrow-right"></i></a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section className="testimonial-sec section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading">
                                <span>Clients Say</span>
                                <h3>Testimonials</h3>
                            </div>
                        </div>
                    </div>
                    <div className="testimonail-sect">
                        <div className="comment-carousel">
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                            <div className="comment-info">
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elitco nsequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum sanpsum velit. Nam nec tellus a odio tinci.</p>
                                <div className="cm-info-sec">
                                    <div className="cm-img">
                                        <img src="https://via.placeholder.com/61x61" alt=""/>
                                    </div> 
                                    <div className="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>Property Owner</h4>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div>
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
                                <img src="assets/images/logo.png" alt="" className="img-fluid"/>
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


        </div>
    )
}

export default page