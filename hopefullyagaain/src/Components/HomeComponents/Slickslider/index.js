import React from 'react'
import './index.scss'
export default function Slickslider() {
    return (

        <div>
            <h2 className='explore'>EXPLORE OUR PRODUCTS</h2>
            <div class="container">
                <div class="row">
                    <div id="carousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="d-none d-lg-block">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/01480520-08BA-439E-A626-2E3D6F0D9908/w240/h175" alt="First slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="First slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/A8895516-3C00-4DA2-97CA-04F258098672/w240/h175" alt="First slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/868C3307-DD02-4624-8BA7-31B62EE4A38F/w240/h175" alt="First slide" />
                                    </div>
                                </div>
                                <div class="d-none d-md-block d-lg-none">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/47257F22-A35B-4A7D-A18C-CDAC0ED7B6EA/w240/h175" alt="First slide" />
                                        <img src="https://picsum.photos/240/200/?image=1&random" alt="First slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175" alt="First slide" />
                                    </div>
                                </div>
                                <div class="d-none d-sm-block d-md-none">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="First slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/30D1F34B-0C37-4D9D-92E4-487372FD254F/w240/h175" alt="First slide" />
                                    </div>
                                </div>
                                <div class="d-block d-sm-none">
                                    <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/070A915A-ED63-4C9E-B837-F6F1766E2863/w240/h175" alt="First slide" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-none d-lg-block">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/FE102E9F-C72D-407F-A49B-2AB1006A0669/w240/h175" alt="Second slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/070A915A-ED63-4C9E-B837-F6F1766E2863/w240/h175" alt="Second slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/3563183B-A875-4ACE-82E9-DDFD0406562B/w240/h175" alt="Second slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175" alt="Second slide" />
                                    </div>
                                </div>
                                <div class="d-none d-md-block d-lg-none">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/09D0ECE7-D85B-49F2-8432-8938293A39BB/w240/h175" alt="Second slide" />
                                        <img src="https://picsum.photos/240/200/?image=4&random" alt="Second slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/3563183B-A875-4ACE-82E9-DDFD0406562B/w240/h175" alt="Second slide" />
                                    </div>
                                </div>
                                <div class="d-none d-sm-block d-md-none">
                                    <div class="slide-box">
                                        <img src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="Second slide" />
                                        <img src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="Second slide" />
                                    </div>
                                </div>
                                <div class="d-block d-sm-none">
                                    <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/5DBD796D-6613-4949-8848-BCC0D9D81D83/w240/h175" alt="Second slide" />
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>














        </div>
    )
}
