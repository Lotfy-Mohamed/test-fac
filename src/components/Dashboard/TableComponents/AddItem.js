
import React, { useState } from 'react';

export default function AddItem(props) {

    const [formData, setFormData] = useState({});

    const [showAlert, setAhowAlert] = useState(false);


    const [active, setActive] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, id : props.newId , [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // var tableMain_Row = []
        // props.tableHead.forEach(element => {
        //     tableMain_Row.push(element.getAttribute('value'))
        // });

        // console.log(tableMain_Row)

        // tableMain_Row.forEach(ele => {
        //     if(formData[ele] == undefined){
        //         console.log('undefined')
        //     } 
        // });

        const tableMain_Row = props.tableHead.map((item) => item.getAttribute('value'));

        const isFormValid = tableMain_Row.every((fieldName) => formData[fieldName] == undefined);
    


        console.log(tableMain_Row)
        if(isFormValid){
            // props.setShowAddForm(false);
            // props.setFormData_Add(formData)
            setTimeout(() => {
                setAhowAlert(false)
            }, 3000);
            setAhowAlert(true)
        }else{
            props.setShowAddForm(false);
            props.setFormData_Add(formData)
        }
        // if(formData.name == undefined
        // || formData.price == undefined
        // || formData.quantity == undefined
        // || formData.unit == undefined
        // || formData.category == undefined
        // || formData.description == undefined ){
        //     setTimeout(() => {
        //         setAhowAlert(false)
        //     }, 3000);
        //     setAhowAlert(true)
        //     console.log('alert')
        // }else{
        //     props.setShowAddForm(false);
        //     props.setFormData_Add(formData)
        // }
        // console.log(tableMain_Row)
        // setFormData({});
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
                                        {/* {setTableMain_Row([...tableMain_Row, item.getAttribute('value')])} */}
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
