import React from 'react'
import Hostp1 from '../image/Hostp1.jpg';
import Hostp2 from '../image/Hostp2.jpg';
import Hostp3 from '../image/Hostp3.jpg';
import './Caro1.css'



const Caro1 = () => {
  return (
    <div>

<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={Hostp1} class="d-block w-100" alt="..." id='img1'/>
        <div class="carousel-caption  d-md-block">
          <h2>B K Inside Room</h2>
          <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Hostp2} class="d-block w-100" alt="..." id='img1'/>
        <div class="carousel-caption d-md-block">
          <h2>B k Hospital FrontSide</h2>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Hostp3} class="d-block w-100" alt="..." id='img1'/>
        <div class="carousel-caption d-md-block">
          <h2>B K Hospital Inside Room</h2>
          <h5>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h5>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>







    </div>
  )
}

export default Caro1