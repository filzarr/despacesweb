import React from 'react'

const Blog = () => {
  return (
    <div className="wrapper">

        <header>

            <div className="top-header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-md-7 col-sm-12">
                            <div className="header-address">
                                <a href="#">
                                    <i className="la la-phone-square"></i>
                                    <span>(647) 346-0855</span>
                                </a>
                                <a href="#">
                                    <i className="la la-map-marker"></i>
                                    <span>CF Fairview Mall, Toronto, ON</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-5 col-sm-12">
                            <div className="header-social">
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

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="01_Home.html">
                                    <img src="assets/images/logo.png" alt=""/>
                                </a>
                                <button className="menu-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                                    <span className="icon-spar"></span>
                                    <span className="icon-spar"></span>
                                    <span className="icon-spar"></span>
                                </button>

                                <div className="navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                                Home
                                            </a>
                                            <div className="dropdown-menu animated">
                                                <a className="dropdown-item" href="01_Home.html">White Menu with Center Search</a>
                                                <a className="dropdown-item" href="02_Home.html">Image Menu with Center Search 2</a>
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
                                                <a className="dropdown-item active" href="13_Blog_Standart.html">Blog Standard</a>
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

        <section className="pager-sec bfr">
            <div className="container">
                <div className="pager-sec-details">
                    <h3>Blog Standard</h3>
                    <ul>
                        <li><a href="#" title="">Home</a></li>
                        <li><span>Blog Standard</span></li>
                    </ul>
                </div> 
            </div>
        </section>

        <section className="blog-standard section-padding">
            <div className="container">
                <div className="blog-single-details">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-posts">
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/770x483" alt=""/>
                                        </a>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                            <li><i className="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                            <li><i className="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget porta. Aliquam eget bibendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex. Aenean luctus, orci ac condimentum cus, quam lorem vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices, ullamcorp magna sollicitudin. </p>
                                        <a href="14_Blog_Open.html" title="" className="btn-default">Read More</a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div>   
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/770x483" alt=""/>
                                        </a>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                            <li><i className="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                            <li><i className="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget porta. Aliquam eget bibendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex. Aenean luctus, orci ac condimentum cus, quam lorem vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices, ullamcorp magna sollicitudin. </p>
                                        <a href="14_Blog_Open.html" title="" className="btn-default">Read More</a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div>   
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/770x483" alt=""/>
                                        </a>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                            <li><i className="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                            <li><i className="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget porta. Aliquam eget bibendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex. Aenean luctus, orci ac condimentum cus, quam lorem vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices, ullamcorp magna sollicitudin. </p>
                                        <a href="14_Blog_Open.html" title="" className="btn-default">Read More</a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div> 
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/770x483" alt=""/>
                                        </a>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                            <li><i className="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                            <li><i className="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget porta. Aliquam eget bibendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex. Aenean luctus, orci ac condimentum cus, quam lorem vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices, ullamcorp magna sollicitudin. </p>
                                        <a href="14_Blog_Open.html" title="" className="btn-default">Read More</a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div> 
                                <div className="blog-single-post">
                                    <div className="blog-img">
                                        <a href="14_Blog_Open.html" title="">
                                            <img src="https://via.placeholder.com/770x483" alt=""/>
                                        </a>
                                    </div> 
                                    <div className="post_info">
                                        <ul className="post-nfo">
                                            <li><i className="la la-calendar"></i>April 25, 2018</li>
                                            <li><i className="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                            <li><i className="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                        </ul>
                                        <h3><a href="14_Blog_Open.html" title="">Real Estate near ocean</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nec purus eget porta. Aliquam eget bibendum erat. Donec dui eros, tincidunt at felis non, tristique aliquet ex. Aenean luctus, orci ac condimentum cus, quam lorem vulputate ligula, ac pretium risus metus non est. Cras rutrum dolor in tortor ultrices, ullamcorp magna sollicitudin. </p>
                                        <a href="14_Blog_Open.html" title="" className="btn-default">Read More</a>
                                    </div>
                                    <a href="14_Blog_Open.html" title="" className="ext-link"></a>
                                </div>  
                            </div> 
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item active"><a className="page-link" href="#"><b>1</b></a></li>
                                    <li className="page-item"><a className="page-link" href="#"><b>2</b></a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><b><i className="la la-arrow-right"></i></b></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="widget widget-search">
                                    <form>
                                        <input type="text" name="search" placeholder="Search here ..."/>
                                        <button type="submit"><i className="la la-search"></i></button>
                                    </form>
                                </div> 
                                <div className="widget widget-catgs">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title=""><i className="la la-angle-right"></i><span>Apartments</span></a>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i className="la la-angle-right"></i><span>Business</span></a>
                                            <span>15</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i className="la la-angle-right"></i><span>Construction</span></a>
                                            <span>4</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i className="la la-angle-right"></i><span>Location</span></a>
                                            <span>1</span>
                                        </li>
                                    </ul>
                                </div> 
                                <div className="widget widget-posts">
                                    <h3 className="widget-title">Popular Posts</h3>
                                    <ul>
                                        <li>
                                            <div className="wd-posts">
                                                <div className="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt=""/>
                                                    </a>
                                                </div> 
                                                <div className="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Traditional Apartments</a></h3>
                                                    <span><i className="la la-calendar"></i>April 25, 2018</span>
                                                </div> 
                                            </div> 
                                        </li>
                                        <li>
                                            <div className="wd-posts">
                                                <div className="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt=""/>
                                                    </a>
                                                </div> 
                                                <div className="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Luxury Home</a></h3>
                                                    <span><i className="la la-calendar"></i>April 25, 2018</span>
                                                </div> 
                                            </div> 
                                        </li>
                                        <li>
                                            <div className="wd-posts">
                                                <div className="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt=""/>
                                                    </a>
                                                </div> 
                                                <div className="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Real Estate Industry</a></h3>
                                                    <span><i className="la la-calendar"></i>April 25, 2018</span>
                                                </div> 
                                            </div> 
                                        </li>
                                    </ul>
                                </div> 
                                <div className="widget widget-adver">
                                    <a href="#" title="">
                                        <img src="https://via.placeholder.com/350x300" alt=""/>
                                    </a>
                                </div> 
                                <div className="widget widget-tags">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <ul>
                                        <li><a href="#" title="">Real Estate</a></li>
                                        <li><a href="#" title="">Business</a></li>
                                        <li><a href="#" title="">Construction</a></li>
                                        <li><a href="#" title="">Apartment</a></li>
                                        <li><a href="#" title="">Houzez</a></li>
                                        <li><a href="#" title="">Location</a></li>
                                        <li><a href="#" title="">Alignment</a></li>
                                        <li><a href="#" title="">Blog</a></li>
                                        <li><a href="#" title="">Business Development</a></li>
                                    </ul>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </section> 
      
        <a href="#" title="">    
            <section className="cta st2 section-padding">
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

export default Blog