import React from 'react'
import { useState, useEffect } from 'react';
const UploadForm = ({uploader}) => {
    const handleChange = (e) =>{
        uploader(e.target.files[0])
    }
    return <form>
        <input type="file" accept ="image/*" onChange ={handleChange}/>
    </form>;
}
const TestUpload = () => {
    const [url, setUrl] =useState('');
    const uploader = (file) =>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
       console.log(localStorage.setItem('recent-image',reader.result)) 
    })
    reader.readAsDataURL(file);
    console.log(file)
}
useEffect(() => {
    setUrl(localStorage.getItem('recent-image'));
}, [])
return ( 
    <div>
        <UploadForm uploader = {uploader}/>
    </div>
 );
}

export default TestUpload