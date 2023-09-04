import React from 'react'
import { MenuList } from './Faucalty'
import './AfterCaro2.css';

const AfterCaro2 = () => {
  return (
    <div>

<div class="container">
          <div class="row justify-content-evenly mt-5">
           
           {

            MenuList.map(item=>(

                <div class="col-md-3 text-center" id='back'>
                
                <img src={item.image} class="img-fluid" alt="..."id='imgh1' />
                <h5>{item.name}</h5>
                <p>{item.work}</p>

                
            </div>

            ))

           }
            

           

          
             
          </div>

          </div>








    </div>
  )
}

export default AfterCaro2