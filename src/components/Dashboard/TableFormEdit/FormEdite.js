import React, { useEffect, useState } from 'react'
export default function Editrowtable(props) {

    // console.log(props)

    // State to keep track of the new row data
    // const [newRowData, setNewRowData] = useState( {prev_order: '', current_order: '', status: '', translates : '', date: '', },);

    // console.log(props)

    const [newRowData, setNewRowData] = useState({ prev_order: '', current_order: '', status: '', translates: '', date: '' } || null) 

    const [currentId, setCurrentId] = useState(null)

    // useEffect(() => {
    //     console.log(props.dataWillChange)
    //     setData(props.dataWillChange)
    // })

    // Handle the add form submit
    const handleAddFormSubmit = () => {
        props.dataWillChange.map((item) => setCurrentId(item.id))
        const id = props.dataWillChange.map((item) => item.id);
        const newRow = {...newRowData, id: id[0] };
        props.setDataWillChange(null);
        props.setNewItem(newRow)
        // Reset The State Of New Row Data If User Want To Add New Row Other Time
        // setNewRowData({ prev_order: '', current_order: '', status: '', translates: '', date: '' });
        // console.log(newRowData)
        // }
    };
    // Handle the change in the add form inputs
    const handleAddFormChange = (e, field) => {
        // console.log(e.target.value, field)
        // let prevData = props.data;
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
        // console.log(newRowData)
    };
    return (
        <>
            {props.dataWillChange ? props.dataWillChange.map((item) =>
            (
                <div className='add-item-form' key={item.id}>
                    <div className="box-item">
                        {/* <div className="close-from" onClick={() => setShowAddForm(false)}> */}
                        <div className="close-from">
                            <p>
                                <i class="fa-solid fa-xmark"></i>
                            </p>
                        </div>
                        <div className="title-head">
                            <p>صنف جديد</p>
                        </div>
                    </div>
                    <div className='form-add' >
                        <form>
                                <p>{item.prev_order}</p>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" required
                                    class="form-control" id="floatingInput" placeholder="التاريخ"
                                    // value={item.prev_order}
                                    onChange={(e) => {handleAddFormChange(e, 'prev_order')}}
                                />
                                <label for="floatingInput">الصنف</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" required
                                    class="form-control" id="floatingInput" placeholder="اسم الصنف"
                                    onChange={(e) => handleAddFormChange(e, 'current_order')}
                                    
                                />
                                <label for="floatingInput">اسم الصنف</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" required
                                    class="form-control" id="floatingInput" placeholder="التاريخ"
                                    // value={item.status}
                                    onChange={(e) => handleAddFormChange(e, 'status')}
                                />
                                <label for="floatingInput">الصنف</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input
                                    type="text" required
                                    class="form-control" id="floatingInput" placeholder="التاريخ"
                                    // value={item.translates}
                                    onChange={(e) => handleAddFormChange(e, 'translates')}
                                />
                                <label for="floatingInput">الصنف</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input
                                    type="date" required
                                    class="form-control" id="floatingInput" placeholder="التاريخ"
                                    // value={item.date}
                                    onChange={(e) => handleAddFormChange(e, 'date')}
                                />
                                <label for="floatingInput">الصنف</label>
                            </div>
                            {/* <div className='form-floating mb-3'>
                                    <input
                                        type="number" required
                                        class="form-control" id="floatingInput" placeholder="التكلفة"
                                        value={item.amount}
                                        onChange={(e) => handleAddFormChange(e, 'amount')}
                                    />
                                    <label for="floatingInput">التكلفة</label>
                                </div> */}
                            <button className='btn' type="button" onClick={handleAddFormSubmit}>
                                {/* <button className='btn' type="button" > */}
                                حفظ
                            </button>
                        </form>
                    </div>
                </div>

            )) : null}
        </>)
}