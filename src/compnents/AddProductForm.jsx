import React from 'react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { getMenShirtsArr, getMinShirtsArr } from './menShirtsArr';
import {useNavigate} from "react-router-dom";

import {decode as base64_decode, encode as base64_encode} from 'base-64';
import '../compnents/styles/AddProductFormStyle.css'
const AddProductForm = () => {
    const navigate = useNavigate();
    const [menShirtsArr, setMenShirtsArr] = useState(getMenShirtsArr);
    const [title, setTitle] = useState('');
    const [smallSize,setSmallSize] = useState(false);
    const [mediumSize,setMediumSize] = useState(false);
    const [largeSize,setLargeSize] = useState(false);
    const [price,setPrice] = useState(null);
    const [gender, setGender] = useState('none');
    const [quantity, setQuantity] = useState();
    const [imgFile, setImgFile] = useState(null);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorGender, setErrorGender] = useState(false);
    const [errorSize, setErrorSize] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [file, setFile] = useState();
    const unique_id = uuid();
    const prodImg = 'null';

    const [idFile, setIdFile] = useState("");
    const [idFileName, setIdFileName] = useState("");
    const addData = e => {

    }
    const handleTitleChange = e=> {
        setTitle(e.target.value);
        if(e.target.value.length != 0){
            setErrorTitle(false);
        }
        else{
            setErrorTitle(true);
        } 
    }
    const handlePriceChange = e=> {
        setPrice(e.target.value);
        if(e.target.value <= 0 || e.target.value == null ){
            setErrorPrice(true);
        }
        else{
            setErrorPrice(false);
        } 
    }
    
    // const getBase64 = (file) => {
    //     let document = "";
    //     let reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         document = reader.result;
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };

    //     return document;
    // }
    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
            
        console.log("Base64" + file)
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }
    const handleImgChange = (e) => {
        // const file = e.target.files[0];
        // getBase64(file).then(base64 => {
        //   //localStorage["fileBase64"] = base64;
        //   console.debug("file stored",base64);
        // });
        // if(e.target.files[0] == null){
        //     setImgError(true);
        // }else{
        //     setImgError(false);
        // }
        console.log(e.target.value[0])
        const file = e.target.files[0];
            getBase64(file).then(base64 => {
                //localStorage["fileBase64"] = base64;
                setImgFile(base64);
                console.log("file stored",base64);
              })
        
        
    }
    // const getBase64 = async (file) => {
    //     return new Promise(resolve => {
    //       let fileInfo;
    //       let baseURL = "";
    //       let reader = new FileReader();
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //         baseURL = reader.result;
    //         // console.log(baseURL);
    //         resolve(baseURL);
    //       };
    //     });
    //   };
    //   const onIDFileChange = async (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //       const file = e.target.files[0]
    //       setIdFileName(file.name)
    //       // console.log(e.target.files[0].size)
    //       const base64 = await getBase64(file)
    //       const newBase64 = base64.split(",")
    //       validateIdFile(newBase64[1])
    //       setIdFile(newBase64[1])
    //       // console.log(base64)
    //     }
    //   }
    // const handleImgChange = e => {
    //     let reader = new FileReader();
    //     if(e.target.files[0]){
    //         const img = e.target.files[0];
    //         setFile(URL.createObjectURL(e.target.files[0]));
    //          setImgFile(e.target.files[0]);
    //         if(e.target.files[0] == null){
    //             setImgError(true);
    //         }else{
    //             setImgError(false);
    //         }
    //     }
      
    // }
    const handleSmallSizeChange = e => {
        e.target.checked == true? setSmallSize(true): setSmallSize(false);
        e.target.checked == true? setErrorSize(false): setErrorSize(true);
    }
    const handleMediumSizeChange = e => {
        e.target.checked == true? setMediumSize(true): setMediumSize(false);
        e.target.checked == true? setErrorSize(false): setErrorSize(true);
    }
    const handleLargeSizeChange = e => {
        e.target.checked == true? setLargeSize(true): setLargeSize(false);
        e.target.checked == true? setErrorSize(false): setErrorSize(true);
    }
    const handleSubmit = (e) => {
        console.log('handle submit function called')
        e.preventDefault();
        const obj = {
            id: unique_id,
            title,
            size: {
                smallSize,
                mediumSize,
                largeSize
            },
            price,
            gender,
            //imgFile: imgFile
            imgFile: imgFile
            
            
        };
        console.log("this is object" + obj);
        e.preventDefault();
        if(title.length == 0){
            setErrorTitle(true);
            //return
        }
        if(price == 0){
            setErrorPrice(true);
            //return
        }
        if(gender == 'none'){
            setErrorGender(true);
            //return
        }
        if(imgFile == null || price == null){
            // setImgError(true);
            //return
        }

        if(smallSize == false && mediumSize == false && largeSize == false){
            setErrorSize(true);
            //return
        }
        if(!errorTitle && !errorPrice && !errorGender){
            console.log("Submitted!")

            if(obj!=null){
                setMenShirtsArr([
                    ...menShirtsArr,
                    menShirtsArr.push(obj)
                ]);
            }
            else{
                console.log('error......!');
            }
            console.log(menShirtsArr)
            setTitle('');
            setPrice('');
            setGender('');
            setImgFile(null);
            setSmallSize(!true);
            setMediumSize(!true);
            setLargeSize(!true);
            //console.log(menShirtsArr);
            localStorage.setItem(('menShirtsArr'), JSON.stringify(menShirtsArr));
            console.log(localStorage.getItem('menShirtsArr'));
            navigate("/Products");
        }
        else{
            if(title.length == 0){
                setErrorTitle(true);
            }
            if(price == 0){
                setErrorPrice(true);
            }
            if(gender == 'none'){
                setErrorGender(true);
            }
            if(imgFile == null){
                setImgError(true);
            }
    
            if(smallSize == false && mediumSize == false && largeSize == false){
                setErrorSize(true);
            } 
            return}
    }
    return (
        <div>

            <div className="page-wrapper  p-t-100 p-b-50">
                <div className="wrapper wrapper--w900">
                    <div className="card card-6">
                        <div className="card-heading">
                            <h2 className="title">Add Product</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e)=>handleSubmit(e)}>
                                <div className="form-row">
                                    <div className="name">Title</div>
                                    <div className="value">
                                        <input 
                                        value={title}
                                        className="input--style-6" 
                                        type="text"
                                        name="title"
                                        onChange={(e)=>handleTitleChange(e)}/>
                                        {errorTitle?
                                        <label className='error-label'>Title can't be empty!</label>: ''}
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    {/* <div className="name">Email address</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-6" type="email" name="email" placeholder="example@email.com" />
                                </div>
                            </div> */}
                                    <div className="name">Size</div>
                                    <div className="form-check checkbox1">
                                        <input
                                        checked = {smallSize}
                                        value = {smallSize}
                                        className="form-check-input"
                                         type="checkbox"
                                         id="flexCheckDefault"
                                         onChange={e=>handleSmallSizeChange(e)} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <p className='size-text'>Small</p>
                                        </label>
                                    </div>
                                    <div className="form-check checkbox2">
                                        <input
                                        checked={mediumSize}
                                        value={mediumSize}
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                        onChange={e=>handleMediumSizeChange(e)} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <p className='size-text'>Medium</p>
                                        </label>
                                    </div>
                                    <div className="form-check checkbox3">
                                        <input
                                        // checked={largeSize}
                                        //value = {'large'}
                                        checked = {largeSize}
                                        value = {largeSize}
                                        className="form-check-input"
                                        type="checkbox" 
                                        id="flexCheckDefault"
                                        onChange={e=>handleLargeSizeChange(e)} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <p className='size-text'>Large</p>
                                        </label>
                                    </div>
                                    {errorSize?
                                    <label className='error-label'>Please select the size</label>:""}
                                </div>
                                <div className="form-row">
                                    <div className="name">Price</div>
                                    <div className="value">
                                        <input
                                        className="input--style-6"
                                        value={price}
                                        onChange={handlePriceChange}
                                        type="number"
                                        name="price"
                                        
                                         />
                                         {errorPrice?
                                        <label className='error-label'>Please enter price, should be more than 0!</label>: ''}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Gender</div>
                                    <div className='name w-75'>
                                    <select 
                                    value={gender}
                                    onChange = {e=>setGender((e.target.value == 'male' || e.target.value == 'female')?setErrorGender(false):setErrorGender(true))}
                                    className="form-select input--style-6 w-75" 
                                    aria-label="Default select example"
                                    >
                                        <option 
                                        value={gender}>
                                        
                                    {gender?gender:'Select Gender'}</option>
                                        <option value="male" onSelect = {e=>setGender(e.target.value)}>Male</option>
                                        <option value="female" onSelect = {e=>setGender(e.target.value)}>Female</option>
                                    </select>
                                    {errorGender?
                                    <label className='error-label'>Plz select the gender!</label>: ''}
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    <div className="name">Upload Image</div>
                                    <div className="value">
                                        <div className="input-group js-input-file">
                                            <input className="file" type="file" name="img" id="file" onChange={e=>handleImgChange(e)}/>
                                        </div>
                                        <div className="label--desc">Add Image of your product</div>
                                        {imgError?
                                        <label className='error-label'>Plz enter the product image!</label>: ''}
                                        {imgFile != null?
                                            <label><img src={imgFile} className='show-img'/>{file}</label>: ''}
                                    </div>
                                </div>
                                <div className="card-footer">
                            <center>
                            <button className="btn btn--radius-2 btn--black-2" type="submit" onClick={(e)=>handleSubmit(e)}>Upload</button>
                            
                            </center>
                            
                        </div>
                            </form>
                        </div>
                     
                    </div>
                </div>
            </div>


        </div>
    )

                                        }                                                  
export default AddProductForm