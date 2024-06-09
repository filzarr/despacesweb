import React from 'react'

const ListLayout = () => {
    return (
        <div>  <section id="map-container" className="fullwidth-home-map wmap">
            <h3 className="vis-hid">Invisible</h3>
            <div id="map" data-map-zoom="9"></div>
        </section>

            <section className="listing-main-sec section-padding">
                <div className="container">
                    <div className="listing-main-sec-details">
                        <div className="row">
                            <div className="col-lg-8">
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
                                                    <a className="nav-link" id="grid-tab1" data-toggle="tab" href="#grid-view-tab1" role="tab" aria-controls="grid-view-tab1" aria-selected="true"><i className="la la-th-large"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="grid-tab2" data-toggle="tab" href="#grid-view-tab2" role="tab" aria-controls="grid-view-tab2" aria-selected="true"><i className="la la-th-list"></i></a>
                                                </li>
                                            </ul>
                                        </div> 
                                    </div> 
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="grid-view-tab1" role="tabpanel" aria-labelledby="grid-view-tab1">
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
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="card">
                                                            <a href="24_Property_Single.html" title="">
                                                                <div className="img-block">
                                                                    <div className="overlay"></div>
                                                                    <img src="https://via.placeholder.com/295x235" alt="" className="img-fluid"/>
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
                                                                    <img src="https://via.placeholder.com/295x235" alt="" className="img-fluid"/>
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
                                        <div className="tab-pane fade show active" id="grid-view-tab2" role="tabpanel" aria-labelledby="grid-view-tab2">
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
                                                        </div>
                                                    </div> 
                                                    <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                                </div> 
                                                <div className="card">
                                                    <a href="24_Property_Single.html" title="">
                                                        <div className="img-block">
                                                            <div className="overlay"></div>
                                                            <img src="https://via.placeholder.com/295x235" alt="" className="img-fluid"/>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
                                                        </div>
                                                    </div> 
                                                    <a href="24_Property_Single.html" title="" className="ext-link"></a>
                                                </div> 
                                                <div className="card">
                                                    <a href="24_Property_Single.html" title="">
                                                        <div className="img-block">
                                                            <div className="overlay"></div>
                                                            <img src="https://via.placeholder.com/295x235" alt="" className="img-fluid"/>
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
                                                            <a href="24_Property_Single.html" title="" className="btn-default">View Details</a>
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
                            <div className="col-lg-4">
                                <div className="sidebar layout2">
                                    <div className="widget widget-property-search">
                                        <h3 className="widget-title">Property Search</h3>
                                        <form action="#" className="row banner-search">
                                            <div className="form_field">
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
                                            <div className="form_field">
                                                <h4>More Features</h4>
                                                <ul>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c1"/>
                                                            <label for="c1">
                                                                <span></span>
                                                                <small>Parking</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c2"/>
                                                            <label for="c2">
                                                                <span></span>
                                                                <small>Air Conditioner</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c3"/>
                                                            <label for="c3">
                                                                <span></span>
                                                                <small>Washing Machine</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c4"/>
                                                            <label for="c4">
                                                                <span></span>
                                                                <small>Heating</small>
                                                            </label>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c5"/>
                                                            <label for="c5">
                                                                <span></span>
                                                                <small>Gym</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c6"/>
                                                            <label for="c6">
                                                                <span></span>
                                                                <small>Wireless Internet</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c7"/>
                                                            <label for="c7">
                                                                <span></span>
                                                                <small>Elevator</small>
                                                            </label>
                                                    </li>
                                                    <li className="input-field">
                                                        <input type="checkbox" name="cc" id="c8"/>
                                                            <label for="c8">
                                                                <span></span>
                                                                <small>Swimming Pool</small>
                                                            </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="form_field">
                                                <a href="#" className="btn btn-outline-primary ">
                                                    <span>Search</span>
                                                </a>
                                            </div>
                                        </form>
                                    </div> 
                                    <div className="widget widget-featured-property">
                                        <h3 className="widget-title">Featured Property</h3>
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
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="widget widget-catgs">
                                        <h3 className="widget-title">Categories</h3>
                                        <ul>
                                            <li>
                                                <a href="#" title=""><i className="la la-angle-right"></i><span>House</span></a>
                                                <span>7</span>
                                            </li>
                                            <li>
                                                <a href="#" title=""><i className="la la-angle-right"></i><span>Condo</span></a>
                                                <span>15</span>
                                            </li>
                                            <li>
                                                <a href="#" title=""><i className="la la-angle-right"></i><span>Townhouse</span></a>
                                                <span>4</span>
                                            </li>
                                            <li>
                                                <a href="#" title=""><i className="la la-angle-right"></i><span>Coop</span></a>
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
                                                        <strong>$125.700</strong>
                                                        <span><i className="la la-map-marker"></i>212 5th Ave, New York</span>
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
                                                        <strong>$125.700</strong>
                                                        <span><i className="la la-map-marker"></i>212 5th Ave, New York</span>
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
                                                        <strong>$125.700</strong>
                                                        <span><i className="la la-map-marker"></i>212 5th Ave, New York</span>
                                                    </div> 
                                                </div> 
                                            </li>
                                        </ul>
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
            </section></div>
    )
}

export default ListLayout