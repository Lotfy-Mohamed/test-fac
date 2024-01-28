import React, { useEffect, useState } from 'react'
export default function Editrowtable(props) {

    const { structureRow, tableHead, dataWillChange, showEdit, setShowEdit } = props

    const [newRowData, setNewRowData] = useState(structureRow || null)

    const [currentId, setCurrentId] = useState(null)

    const [showAlrt, setShowAlert] = useState(false)

    // console.log(tableHead)

    // console.log(props.dataWillChange)

    const SudmitData = () => {
        dataWillChange.map((item) => setCurrentId(item.id))
        const id = dataWillChange.map((item) => item.id);
        const newRow = { ...newRowData, id: id[0] };
        props.setDataWillChange(null);

        console.log(Object.keys(dataWillChange[0]).length)
        let prevData = dataWillChange[0];
        console.log(prevData)
        for(let i = 0; i < Object.keys(dataWillChange[0]).length; i++) {
            tableHead.forEach(element => {
                if(newRow[element.getAttribute("value")] == "") {
                    newRow[element.getAttribute("value")] = prevData[element.getAttribute("value")]
                }
                // element.getAttribute("value")
            });
            // if(newRow. === "") {
            //     newRow.prev_order = prevData.prev_order
            //     console.log("caasc")
            // }
        }
        // for (let i = 0; i < Object.keys(props.dataWillChange[0]).length; i++) {
        //     if (newRow.prev_order === "") {
        //         newRow.prev_order = prevData.prev_order
        //     } else if (newRow.current_order === "") {
        //         newRow.current_order = prevData.current_order
        //     } else if (newRow.status === "") {
        //         newRow.status = prevData.status
        //     } else if (newRow.translates === "") {
        //         newRow.translates = prevData.translates
        //     } else if (newRow.date === "") {
        //         newRow.date = prevData.date
        //     }
        // }
        props.setNewItem(newRow)
        setNewRowData(structureRow);
        setShowEdit(false)
    }

    // Handle the add form submit
    const handleEditSubmit = () => {
        console.log(newRowData)

        var valied = true;

        tableHead.forEach(element => {
            // console.log(element.getAttribute("value"))
            if(newRowData[element.getAttribute("value")] === "") {
                valied = false
            }
        });

        if(!valied) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
                props.setDataWillChange(null);
                SudmitData();
            }, 2000)
            console.log("not valied")
        } else {
            console.log("valied")
            SudmitData();
        }

        // if (newRowData.current_order === '' || newRowData.prev_order === '' || newRowData.status === '' || newRowData.translates === '' || newRowData.date === '') {
        //     setShowAlert(true)
        //     setTimeout(() => {
        //         setShowAlert(false)
        //         props.setDataWillChange(null);
        //         // SudmitData();
        //     }, 2000)
        // } 
        // else {
        //     // SudmitData();
        // }
    };
    // Handle the change in the add form inputs
    const handleAddFormChange = (e, field) => {
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

    // const handleFormClose = () => {
    //     props.setDataWillChange(null);
    //     setNewRowData({ prev_order: '', current_order: '', status: '', translates: '', date: '' });
    // }


    return (
        <>
            {showAlrt ? <div className="alert alert-danger order-alrt" role="alert">
                الحقول الفارغه لن يتم تعديل بياناتها
            </div> : null}
            {showEdit ?
                <div className='add-item-form order-manage'>
                    {/* <div className='table-edit'>
                        <table>
                            <thead>
                                {tableHead != undefined ? tableHead.map((ele, index) => (
                                    <th key={index}>
                                        <tr>{ele.getAttribute("text")}</tr>
                                    </th>
                                )) : null}
                            </thead>
                            <tbody>
                                <tr>
                                    {dataWillChange ? dataWillChange.map((item, index) =>
                                        tableHead.map((ele, index) => (
                                            <td key={index}>{item[ele.getAttribute("value")]}</td>
                                        ))
                                    ) : null}
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    <div className="box-item">
                        <div className="close-from" onClick={() => handleFormClose() & setShowEdit(false)}>
                            <p>
                                <i class="fa-solid fa-xmark"></i>
                            </p>
                        </div>
                    </div>
                    <div className='form-add'>
                        <form>
                            {dataWillChange ? dataWillChange.map((item, index) =>
                                tableHead.map((ele, index) => (
                                    <div className='form-floating mb-3' key={index}>
                                        <input
                                            type="text"
                                            class="form-control" id="floatingInput" placeholder={ele.getAttribute("text")}
                                            onChange={(e) => { handleAddFormChange(e, ele.getAttribute("value")) }}
                                        />
                                        <label for="floatingInput">{ele.getAttribute("text")}</label>
                                    </div>
                                ))
                            ) : null}
                        </form>
                    </div>
                            <button className='btn' type="button" onClick={handleEditSubmit}>
                                تعديل
                            </button>
                </div>
                : null}
        </>
    )
}


{/* <table>
                <thead>
                    {tableHead != undefined ? tableHead.map((ele, index) => (
                        <th key={index}>
                            <tr>{ele.getAttribute("text")}</tr>
                        </th>
                    )) : null}
                </thead>
                <tbody>
                    <tr>
                        {dataWillChange ? dataWillChange.map((item, index) =>
                            tableHead.map((ele, index) => (
                                <>
                                    <td key={index}>{item[ele.getAttribute("value")]}</td>
                                </>
                            ))
                        ) : null}
                    </tr>
                </tbody>
            </table> */}


// <div className='add-item-form order-manage' key={ele.id}>
//     <div className="box-item">
//         <div className="close-from" onClick={() => handleFormClose()}>
//             <p>
//                 <i class="fa-solid fa-xmark"></i>
//             </p>
//         </div>
//     </div>
//     <div className='form-add'>
//         <form>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {/* {" "}{item.prev_order} */}
//             </p>
//             <div className='form-floating mb-3'>
//                 <input
//                     type="text"
//                     class="form-control" id="floatingInput" placeholder="الطلبيه السابقة"
//                     onChange={(e) => { handleAddFormChange(e, 'prev_order') }}
//                 />
//                 <label for="floatingInput"> {ele.getAttribute("value")}</label>
//             </div>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {/* {" "}{item.current_order} */}
//             </p>
//             <div className='form-floating mb-3'>
//                 <input
//                     type="text"
//                     class="form-control" id="floatingInput" placeholder={`${ele}`}
//                     onChange={(e) => handleAddFormChange(e, 'current_order')}
//                 />
//                 <label for="floatingInput"> {ele.getAttribute("value")}</label>
//             </div>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {/* {" "}{item.status} */}
//             </p>
//             <div className='form-floating mb-3'>
//                 <input
//                     type="text"
//                     class="form-control" id="floatingInput" placeholder="الحالة"
//                     onChange={(e) => handleAddFormChange(e, 'status')}
//                 />
//                 <label for="floatingInput">الحالة</label>
//             </div>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {/* {" "}{item.translates} */}
//             </p>
//             <div className='form-floating mb-3'>
//                 <input
//                     type="text"
//                     class="form-control" id="floatingInput" placeholder="الموردين"
//                     onChange={(e) => handleAddFormChange(e, 'translates')}
//                 />
//                 <label for="floatingInput">الموردين</label>
//             </div>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {/* {" "}{item.date} */}
//             </p>
//             <div className='form-floating mb-3'>
//                 <input
//                     type="date"
//                     class="form-control" id="floatingInput" placeholder="التاريخ"
//                     onChange={(e) => handleAddFormChange(e, 'date')}
//                 />
//                 <label for="floatingInput">الصنف</label>
//             </div>
//             <button className='btn' type="button" onClick={handleAddFormSubmit}>
//                 تعديل
//             </button>
//         </form>
//     </div>
// </div>
// (
//     <div className='add-item-form order-manage'  key={item.id}>
//         <div className="box-item">
//             <div className="close-from" onClick={() => handleFormClose()}>
//                 <p>
//                     <i class="fa-solid fa-xmark"></i>
//                 </p>
//             </div>
//         </div>
// <div className='form-add'>
//     <form>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {" "}{item.prev_order}
//             </p>
//         <div className='form-floating mb-3'>
//             <input
//                 type="text"
//                 class="form-control" id="floatingInput" placeholder="الطلبيه السابقة"
//                 onChange={(e) => { handleAddFormChange(e, 'prev_order') }}
//             />
//             <label for="floatingInput">الطلبيه السابقة</label>
//         </div>
//         <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {" "}{item.current_order}
//             </p>
//         <div className='form-floating mb-3'>
//             <input
//                 type="text"
//                 class="form-control" id="floatingInput" placeholder="الطلبية الحالية"
//                 onChange={(e) => handleAddFormChange(e, 'current_order')}
//             />
//             <label for="floatingInput">الطلبية الحالية</label>
//         </div>
//             <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {" "}{item.status}
//             </p>
//         <div className='form-floating mb-3'>
//             <input
//                 type="text"
//                 class="form-control" id="floatingInput" placeholder="الحالة"
//                 onChange={(e) => handleAddFormChange(e, 'status')}
//             />
//             <label for="floatingInput">الحالة</label>
//         </div>
//         <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {" "}{item.translates}
//             </p>
//         <div className='form-floating mb-3'>
//             <input
//                 type="text"
//                 class="form-control" id="floatingInput" placeholder="الموردين"
//                 onChange={(e) => handleAddFormChange(e, 'translates')}
//             />
//             <label for="floatingInput">الموردين</label>
//         </div>
//         <p className='old-data-show alert alert-secondary'>
//                 سابقاً :
//                 {" "}{item.date}
//             </p>
//         <div className='form-floating mb-3'>
//             <input
//                 type="date"
//                 class="form-control" id="floatingInput" placeholder="التاريخ"
//                 onChange={(e) => handleAddFormChange(e, 'date')}
//             />
//             <label for="floatingInput">الصنف</label>
//         </div>
//         <button className='btn' type="button" onClick={handleAddFormSubmit}>
//             تعديل
//         </button>
//     </form>
// </div>
//     </div>
// )) 