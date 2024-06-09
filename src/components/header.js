"use client"
import Link from 'next/link' 
import { usePathname } from 'next/navigation'
 const Header = () => {
    const pathname = usePathname()
    return (
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
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                
                                    <Link className="navbar-brand  " href={"/"}  >
                                        <img src='/assets/images/logo.png' />
                                    </Link>
                                

                                <button className="menu-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                                    <span className="icon-spar"></span>
                                    <span className="icon-spar"></span>
                                    <span className="icon-spar"></span>
                                </button>

                                <div className="navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li  className={pathname  == "/" ? "nav-item dropdown active" : "nav-item dropdown"}>
                                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                                Home
                                            </a>
                                            <div className="dropdown-menu animated">
                                                <a className="dropdown-item active" href="01_Home.html">White Menu with Center Search</a>
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
                                        
                                        <li   className={pathname === "/about" ? "nav-item dropdown active" : "nav-item dropdown"}>
                                            <a className="nav-link dropdown-toggle"  href="" data-toggle="dropdown">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu animated">
                                                <a className="dropdown-item" href="12_Blog_Grid.html">Blog Grid</a>
                                                <a className="dropdown-item" href="13_Blog_Standart.html">Blog Standard</a>
                                                <a className="dropdown-item" href="14_Blog_Open.html">Blog Open</a>
                                                 
                                                <Link className={pathname === "/about" ? "dropdown-item active" : "dropdown-item"} href={"/about"}>About</Link>
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
    )
}
export default Header;