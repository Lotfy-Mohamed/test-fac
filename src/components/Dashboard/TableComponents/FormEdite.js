import React, { useEffect, useState } from 'react'
export default function Editrowtable(props) {

    const [newRowData, setNewRowData] = useState({ prev_order: '', current_order: '', status: '', translates: '', date: '' } || null)

    const [currentId, setCurrentId] = useState(null)

    const [showAlrt, setShowAlert] = useState(false)

    const SudmitData = () => {
        props.dataWillChange.map((item) => setCurrentId(item.id))
            const id = props.dataWillChange.map((item) => item.id);
            const newRow = { ...newRowData, id: id[0] };
            props.setDataWillChange(null);
            
            console.log(Object.keys(props.dataWillChange[0]).length)
            let prevData = props.dataWillChange[0];
            for(let i = 0; i < Object.keys(props.dataWillChange[0]).length; i++){
                if(newRow.prev_order === ""){
                    newRow.prev_order = prevData.prev_order
                } else if(newRow.current_order === ""){
                    newRow.current_order = prevData.current_order
                } else if(newRow.status === ""){
                    newRow.status = prevData.status
                } else if(newRow.translates === ""){
                    newRow.translates = prevData.translates
                } else if(newRow.date === ""){
                    newRow.date = prevData.date
                } 
            }
            props.setNewItem(newRow)
            setNewRowData({ prev_order: '', current_order: '', status: '', translates: '', date: '' });
    }

    // Handle the add form submit
    const handleAddFormSubmit = () => {
        console.log(newRowData.current_order)
        if (newRowData.current_order === '' || newRowData.prev_order === '' || newRowData.status === '' || newRowData.translates === '' || newRowData.date === '') {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
                props.setDataWillChange(null);
                SudmitData();
            },4000)
        } else {
            SudmitData();
        }
    };
    // Handle the change in the add form inputs
    const handleAddFormChange = (e, field) => {
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

    const handleFormClose = () => {
        props.setDataWillChange(null);
        setNewRowData({ prev_order: '', current_order: '', status: '', translates: '', date: '' });
    }


    return (
        <>  
            {showAlrt? <div className="alert alert-danger order-alrt" role="alert">
                الحقول الفارغه لن يتم تعديل بياناتها
            </div> : null}
            {props.dataWillChange ? props.dataWillChange.map((item) =>
            (
                <div className='add-item-form order-manage'  key={item.id}>
                    <div className="box-item">
                        <div className="close-from" onClick={() => handleFormClose()}>
                            <p>
                                <i class="fa-solid fa-xmark"></i>
                            </p>
                        </div>
                    </div>
                    <div className='form-add'>
                        <form>
                                <p className='old-data-show alert alert-secondary'>
                                    سابقاً :
                                    {" "}{item.prev_order}
                                </p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" 
                                    class="form-control" id="floatingInput" placeholder="الطلبيه السابقة"
                                    onChange={(e) => { handleAddFormChange(e, 'prev_order') }}
                                />
                                <label for="floatingInput">الطلبيه السابقة</label>
                            </div>
                            <p className='old-data-show alert alert-secondary'>
                                    سابقاً :
                                    {" "}{item.current_order}
                                </p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" 
                                    class="form-control" id="floatingInput" placeholder="الطلبية الحالية"
                                    onChange={(e) => handleAddFormChange(e, 'current_order')}
                                />
                                <label for="floatingInput">الطلبية الحالية</label>
                            </div>
                                <p className='old-data-show alert alert-secondary'>
                                    سابقاً :
                                    {" "}{item.status}
                                </p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" 
                                    class="form-control" id="floatingInput" placeholder="الحالة"
                                    onChange={(e) => handleAddFormChange(e, 'status')}
                                />
                                <label for="floatingInput">الحالة</label>
                            </div>
                            <p className='old-data-show alert alert-secondary'>
                                    سابقاً :
                                    {" "}{item.translates}
                                </p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" 
                                    class="form-control" id="floatingInput" placeholder="الموردين"
                                    onChange={(e) => handleAddFormChange(e, 'translates')}
                                />
                                <label for="floatingInput">الموردين</label>
                            </div>
                            <p className='old-data-show alert alert-secondary'>
                                    سابقاً :
                                    {" "}{item.date}
                                </p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="date" 
                                    class="form-control" id="floatingInput" placeholder="التاريخ"
                                    onChange={(e) => handleAddFormChange(e, 'date')}
                                />
                                <label for="floatingInput">الصنف</label>
                            </div>
                            <button className='btn' type="button" onClick={handleAddFormSubmit}>
                                تعديل
                            </button>
                        </form>
                    </div>
                </div>
            )) : null}
        </>)
}