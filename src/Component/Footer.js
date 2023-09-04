import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main-footer bg-dark text-light ' id='fo'>
     <div className='container'>
     <div className='row'>

<div className='col-md-4 col-sm-6'>
<h4>Important Link</h4>

<ul className='list-unstyled'>
    <li id='l2'>Home</li>
    <li id='l2'>About</li>
    <li id='l2'>Staff</li>
    <li id='l2'>Career</li>
</ul>

</div>

<div className='col-md-4 col-sm-6'>
<h4>Service</h4>

<ul className='list-unstyled'>
    <li id='l2'>Heart Surgery</li>
    <li id='l2'>Bone Pain</li>
    <li id='l2'>Teath Problem</li>
    <li id='l2'>Hair Replacment</li>
</ul>

</div>
<div className='col-md-4 col-sm-6'>
<h4>Contact</h4>

<ul className='list-unstyled'>
    <li>Mobile - 7217766456</li>
    <li>Gmail - manuddinkhan98gmail.com</li>
    <li>Address - Ballabgarh , Faridabad</li>
    
</ul>

</div>




     </div>

     


     </div>   

     <div className='div1 bg-dark'>
        <p id='h1'> &copy;{new Date().getFullYear()}B K Hospital Web - All Right Reserved</p>
     </div>


    </div>
  )
}

export default Footer