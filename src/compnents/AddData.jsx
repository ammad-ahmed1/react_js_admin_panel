import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../compnents/styles/FormStyle.css';
const AddData = () => {
    return (
        <div>
            <div className='form'>
            <Form className='form-body'>
                <div className='row'>
                <h1>Add item</h1>
                </div>
                
                <div className='row'>
                    <div className='col-12'>
                        {/* <label>Title</label> */}
                        <input
                        placeholder='Title'
                            
                        ></input>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='option col-6'>
                        <select class="form-control">
                            <option>Default select</option>
                        </select>
                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-12'>
                        {/* <label>Title</label> */}
                        <input 
                        placeholder='Title'
                            value={''}
                        ></input>
                    </div>
                </div>

            </Form>
            </div>

        </div>
    )
}

export default AddData