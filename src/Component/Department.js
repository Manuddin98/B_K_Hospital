import React from 'react'
import './Doctor.css';
const Department = () => {
  return (
    <div>

<h1 className='hi2'>B K Hospital Department List</h1>


<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Department Name</th>
      <th scope="col">Head Name</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dentist Department</td>
      <td>Monika</td>
      <td>787897867565</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Medicine Department</td>
      <td>John</td>
      <td>86786786787</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>I C O</td>
      <td>Manuddin</td>
      <td>678686868876</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Ambulance</td>
      <td>Imran</td>
      <td>75765765765</td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>AltraSound</td>
      <td>Komal</td>
      <td>575765775756</td>
    </tr>

  </tbody>
</table>



    </div>
  )
}

export default Department