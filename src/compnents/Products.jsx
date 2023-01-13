import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import '../compnents/styles/ProductStyles.css'
import { getMenShirtsArr } from './menShirtsArr';
import pic from '../compnents/ClientSide/images/Homepage imgs/MenJacket2.webp'

const Products = () => {
  const navigate = useNavigate();
  const index = 1;
  const [menShirtsArr, setMenShirtsArr] = useState([getMenShirtsArr()])
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

//   const DeleteConfirmation = (item) => {
//     setSelected(item)
//     handleShow();
// }
// const HandleDelete = (selected) => {

//     console.log(`Delete buton clicked at ${selected.id}`);
//     if (selected != null) {
//         setItemsData(

//             selected = itemsData.filter(
//                 m => m.id !== selected.id,
//             )
//         )
//         setItemsData(selected);
//         localStorage.setItem('itemsData', JSON.stringify(selected));

//     }
//     else {
//         return;
//     }
//     handleClose();
//   }


  return (
    <>
    {/* <div className='container'>
      <div className='row justify-content-center products'>
        {menShirtsArr.map((item, index) =>
          <div className='prod-card col-md-4 col-sm-1 col-lg-4 justify-content-center' key={item.id + 1}>
            <div className='prod-img row'>
              <img src={pic} />
            </div>
            <center>
              <div className='prod-info row'>
                <div className='prod-title'>
                  <h4>{item.title}</h4>
                </div>
                <div className='prod-gender'>
                  <h4>{item.gender}</h4>
                </div>
                <div className='prod-price'>
                  {item.price}
                </div>
                <div className='del-btn-class'>
                  <button className='btn del-btn'>Delete</button>
                </div>
                <div className='update-btn-class'>
                  <button className='btn update-btn'>Update</button>
                </div>
              </div>

            </center>
            
          </div>

        )
        }

      </div>
      
      {/* {men_tshirts.map((item, index) =>
          <div className="card products" >
            {console.log(item.img)}
          <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.id}</p>
              <p className="card-text">{item.price}</p>
              <a href="#" className="btn btn-secondary">Update</a>
              <a href="#" className="btn btn-warning">Go somewhere</a>
            </div>
        </div>
        )} *//*}
        
    </div> */}
    <section>
    <button className='btn btn-primary add-btn float-lg-end float-md-end float-sm-end'
        onClick={()=>navigate("/AddProductForm")}>Add Product</button>
  <div className="container py-3 ">
    <div class="row justify-content-center  show-product">
      
    {menShirtsArr.map((item, index) => 
              <div class="col-md-4 col-lg-4 col-xl-4 sm-1">
              <div class="card text-black">
                <img
                  src={item.imgFile}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{item.title}</h5>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span className = "text-black">Price</span><span className = "text-black">{item.price}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>
                      <button className='btn btn-warning'>Delete</button>
                    </span>
                    <span>
                    <button className='btn btn-secondary'>Update</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          
        )}
</div>
  </div>
</section>
    
    </>
  )
}

export default Products