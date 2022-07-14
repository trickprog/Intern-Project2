import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div>

            <footer class="page-footer font-small blue pt-4 " style={{ background: '#2196F3', color: 'white' }}>


                <div class="container-fluid text-center text-md-left" style={{paddingTop:30, paddingBottom:20,}}>


                    <div class="row">


                        <div class="col-md-2  mt-3">

                            <h5 class="text-uppercase fs-1 fw-bold">OBE</h5>


                        </div>


                        <hr class="clearfix w-100 d-md-none pb-3" />

                        <div class="col-md-1 mb-md-0 mb-3">


                            <h5 class="text-uppercase ">Quick Links</h5>
                            <hr style={{ height: '2px' }} />

                            <ul class="list-unstyled " style={{ marginTop: '30px' }}>
                                <li className='footerli'>
                                    Home
                                </li>
                                <li className='footerli'>
                                    About Us
                                </li>
                                <li className='footerli'>
                                    Contact Us
                                </li>
                                <li className='footerli'>
                                    Premium
                                </li>
                            </ul>

                        </div>

                        <div class="col-md-1 mb-md-0 mb-3" style={{ marginLeft: '200px' }}>


                            <h5 class="text-uppercase ">Important Links</h5>
                            <hr style={{ height: '2px' }} />

                            <ul class="list-unstyled " style={{ marginTop: '30px' }}>
                                <li className='footerli'>
                                    Terms and Condition
                                </li>
                                <li className='footerli'>
                                    Privacy Policy
                                </li>

                            </ul>

                        </div>
                        <div class="col-md-4 mb-md-0 mb-3" style={{ marginLeft: '200px' }}>


                            <h5 class="text-uppercase  " >Subscribe to our newsletter and be the first to know about our updates</h5>


                            <ul class="list-unstyled " style={{ marginTop: '30px' }}>
                                <form class="form-inline d-flex ">
                                    <input class="form-control me-3" type="text" placeholder="Search"
                                        aria-label="Search" style={{ width: '300px' }} />
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                    <button class="btn btn-light " type="button">Subscribe</button>
                                </form>

                            </ul>

                        </div>




                    </div>

                </div>

                <hr style={{ height: '2px' }} />

                <div class="footer-copyright text-left py-3 px-5">Copyright © 2020. All Rights Reserved
                    <div className='d-flex justify-content-end '>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer