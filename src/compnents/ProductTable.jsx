import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../compnents/styles/ProductTableStyle.css'
import { getMenShirtsArr } from './menShirtsArr';
const ProductTable = () => {

  const [menShirtsArr, setMenShirtsArr] = useState([])
  const [file, setFile] = useState();
  useEffect(() => {
    let arr = localStorage.getItem("menShirtsArr")
    console.log(arr)
    if (arr) {
      setMenShirtsArr(JSON.parse(arr))
    }
    else {
      let _data = getMenShirtsArr()
      localStorage.setItem("menShirtsArr", JSON.stringify(_data))
      setMenShirtsArr(_data)
    }
  }, [])
  return (
    <div>
      <div className='header'>
        <h4>Product Table</h4>
        <button className='btn btn-dark btn-sm addBtn'><h3 className='addText'>+</h3></button>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Img</th>
            <th>Title</th>
            {/* <th>Quantity</th> */}
            {/* <th>Sizes</th> */}
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {menShirtsArr.map((item, index) =>
          <tbody className='overflow-auto' >
            
            <tr>
              <td className=''>{index + 1}</td>
               <td className=''><img src='blob:http://localhost:3000/ce9cbf38-974d-4a25-8a27-4ea5192f476c' /></td>
               {console.log( item.imgFile)}
              <td className=''>{item.title}</td>
              {/* <td className=''>{item.size}</td> */}
              <td className=''>{item.price}</td>
              <td><button className='btn btn-warning btn-sm'>
                Del
              </button></td>
            </tr>
          </tbody>
        )}

      </Table>
    </div>
  )
}

export default ProductTable