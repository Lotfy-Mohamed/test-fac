// Add Item Component
// -----------Take-----------
// 1- tableHead: Table Header Selected From Table Component
// 2- setShowAddForm: Function To Close Add Item Component
// 3- newId: New Id To Add Item
// -----------Give-----------
// 1- Object Data (New Item Only)
// 2- Close Add Item Component

import React, { useState } from 'react';

export default function AddItem(props) {

    const [formData, setFormData] = useState({});

    const [showAlert, setAhowAlert] = useState(false);



    const handleInputChange = (e) => {
        setFormData({ ...formData, id : props.newId , [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const tableMain_Row = props.tableHead.map((item) => item.getAttribute('value'));

        const isFormValid = tableMain_Row.every((fieldName) => formData[fieldName] == undefined);
    


        console.log(tableMain_Row)
        if(isFormValid){
            setTimeout(() => {
                setAhowAlert(false)
            }, 3000);
            setAhowAlert(true)
        }else{
            props.setShowAddForm(false);
            props.setFormData_Add(formData)
        }
    };


    return(
        <>
            <div className='overlay'></div> 
            <div className='add-item-form'>
                <div className="box-item">
                    <div className="close-from" onClick={() => props.setShowAddForm(false)}>
                        <p>
                            <i class="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                    <div className="title-head">
                        <p>إضافة</p>
                    </div>
                </div>
                <div className='form-add' >
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {
                            props.tableHead.map((item ,index) => 
                                (
                                    <>
                                        <div className='form-floating mb-3' key={item.id}>
                                            <input 
                                                type={`${item.getAttribute('type')}`}
                                                name={`${item.getAttribute('value')}`}
                                                class="form-control" 
                                                id={`floatingInput-${index}`} 
                                                placeholder={item.textContent}
                                                onChange={handleInputChange}
                                                />
                                            <label for={`floatingInput-${index}`}>{item.textContent}</label>
                                        </div>
                                    </>
                                )
                            )
                        }
                        <button className='btn' type="button" onClick={handleSubmit}>حفظ</button>
                    </form>
                </div>
            </div>
            {showAlert ? 
            <>
            <div class="alert alert-danger" style={{zIndex : "3"}} role="alert">
                الرجاء ملئ جميع الحقول
            </div> 
            </>
            : null}
        </>
    )
}
