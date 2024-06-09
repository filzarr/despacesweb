import React from 'react'

const Halfmap = () => {
  return (
    <section className="half-map-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div id="map-container" className="fullwidth-home-map">
                            <div id="map" data-map-zoom="9"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="widget-property-search">
                            <form action="#" className="row banner-search">
                                <div className="form_field full">
                                    <input type="text" className="form-control" placeholder="Enter Address, City or State"/>
                                </div>
                                <div className="form_field">
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
                                <div className="form_field">
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
                                <div className="form_field">
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
                                <div className="form_field">
                                    <div className="form-group">
                                        <div className="drop-menu">
                                            <div className="select">
                                                <span>Badrooms</span>
                                                <i className="fa fa-angle-down"></i>
                                            </div>
                                            <input type="hidden" name="gender"/>
                                            <ul className="dropeddown">
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="feat-srch">
                                    <div className="more-feat">
                                        <h3> <i className="la la-cog"></i> Show More Features</h3>
                                    </div> 
                                    <div className="form_field">
                                        <a href="#" className="btn btn-outline-primary ">
                                            <span>Search</span>
                                        </a>
                                    </div>
                                </div> 
                                <div className="features_list">
                                    <ul>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b1"/>
                                            <label for="b1">
                                                <span></span>
                                                <small>Parking</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b2"/>
                                            <label for="b2">
                                                <span></span>
                                                <small>Gym</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b3"/>
                                            <label for="b3">
                                                <span></span>
                                                <small>Washing Machine</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b4"/>
                                            <label for="b4">
                                                <span></span>
                                                <small>Elevator</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b5"/>
                                            <label for="b5">
                                                <span></span>
                                                <small>Storage</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b6"/>
                                            <label for="b6">
                                                <span></span>
                                                <small>Air Conditioner</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b7"/>
                                            <label for="b7">
                                                <span></span>
                                                <small>Wireless Internet</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b8"/>
                                            <label for="b8">
                                                <span></span>
                                                <small>Heating</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b9"/>
                                            <label for="b9">
                                                <span></span>
                                                <small>Swimming Pool</small>
                                            </label>
                                        </li>
                                        <li className="input-field">
                                            <input type="checkbox" name="bb" id="b10"/>
                                            <label for="b10">
                                                <span></span>
                                                <small>Home Theater</small>
                                            </label>
                                        </li>
                                    </ul>
                                </div> 
                            </form>
                        </div> 
                        <div className="listing-directs">
                            <div className="list-head">
                                <div className="sortby">
                                    <span>Sort by:</span>
                                    <div className="drop-menu">
                                        <div className="select">
                                            <span>Relevant</span>
                                            <i className="la la-caret-down"></i>
                                        </div>
                                        <input type="hidden" name="gender"/>
                                        <ul className="dropeddown">
                                            <li>For Sale</li>
                                            <li>For Rent</li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="view-change">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="grid-tab1" data-toggle="tab" href="#grid-view-tab1" role="tab" aria-controls="grid-view-tab1" aria-selected="true"><i className="la la-th-large"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="grid-tab2" data-toggle="tab" href="#grid-view-tab2" role="tab" aria-controls="grid-view-tab2" aria-selected="true"><i className="la la-th-list"></i></a>
                                        </li>
                                    </ul>
                                </div> 
                            </div> 
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="grid-view-tab1" role="tabpanel" aria-labelledby="grid-view-tab1">
                                    <div className="list_products">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                            <div className="col-lg-6 col-md-6">
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
                                                            <p>
                                                                <i className="la la-map-marker"></i>212 5th Ave, New York
                                                            </p>
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
                                    
                                </div>
                                <div className="tab-pane fade" id="grid-view-tab2" role="tabpanel" aria-labelledby="grid-view-tab2">
                                    <div className="list-products">
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
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
                                            <div className="card_bod_full">
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
                                                    <div className="crd-links">
                                                        <a href="#" className="pull-left">
                                                            <i className="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" className="plf">
                                                            <i className="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div> 
                                                    <a href="#" title="" className="btn btn-default">View Details</a>
                                                </div>
                                            </div> 
                                            <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                        </div> 
                                    </div> 
                                </div>
                            </div> 
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav> 
                        </div> 
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Halfmap