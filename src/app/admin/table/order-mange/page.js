'use client';
import React, { useEffect, useState } from 'react';

import Editrowtable from "@/components/Dashboard/TableFormEdit/FormEdite"

export default function Table() {

    // Sample data for the Items table
    const [data, setData] = useState([
        { 
            id: 541,
            prev_order: 'نص شكلى', 
            current_order: 'قطن', 
            status: 'تم التسليم', 
            translates : 'لبن', 
            date: '2001/3/10', 
        },
        { 
            id: 923,
            prev_order: 'العاب', 
            current_order: 'فل', 
            status: 'جارى التجهيز', 
            translates : 'سمنة', 
            date: '2004/8/19', 
        },
        { 
            id: 2123,
            prev_order: 'سكر', 
            current_order: 'عيش', 
            status: 'ملغى', 
            translates : 'رز', 
            date: '2102/10/12', 
        },
        // Add more rows as needed
    ]);

    // State to keep track of the Item being edited
    const [editingRow, setEditingRow] = useState(null);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    // Data Will Change 
    const [dataWillChange, setDataWillChange] = useState(null);

    // State to show/hide the add form
    const [showAddForm, setShowAddForm] = useState(false);

        // State to keep track of the new row data
    // const [newRowData, setNewRowData] = useState( {prev_order: '', current_order: '', status: '', translates : '', date: '', },);

    const [itemNewEdite , setitemEdit] = useState(null)
    const [oldId , setOldId] = useState()

    // console.log("item" , itemNewEdite)

    const handleEditItem = (id) => {
        // Set the editingRow state to the id of the Item being edited
        const getData = data.filter((row) => row.id == id);
        // setEditingRow(id);
        setDataWillChange(getData);
        // console.log(dataWillChange)
    };

    const handleSaveItem = (id) => {
        // Save the edited data and reset the editingRow state
        setEditingRow(null);
    };


    //Delete Item Fuction
    const handleDelteItem = (id) => {

        //Delete Item From Data Array
        const updatedData = data.filter((row) => row.id !== id);

        //Get Deleted Row Data
        const deletedRow = data.find((item) => item.id === id);
        // console.log('Deleted Row Data:', deletedRow);

        //Update Data Array
        setData(updatedData);
    }

    // const handleAddRow = () => {
    //     const newId = data.length + 1;
    //     const newRow = { id: newId, text: 'cxc', date: '2005/5/20', amount: '800' };
    //     setData([...data, newRow]);
    // }

    // Set the showAddForm state to true to show the add form
    const handleAddRow = () => {
        setShowAddForm(true);
    };

    // Handle the change in the add form inputs
    const handleAddFormChange = (e, field) => {
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };




    if(itemNewEdite != null){
        // console.log("not null")
        // var new = data.filter((row) => row.id == id);
        // data.findfilter((row) => row.id == id);
        // const id = itemNewEdite.map((item) => item.id);
        const editItem = data.find((item) => item.id === itemNewEdite.id);
        // console.log(editItem)
        // Update the edited data in the state
        //!Search The Data Array For The Item With The Matching Id
        const updatedData = data.map((item) =>
            // item.id === id[0] ? { ...item, [field]: e.target.value } : item
            item.id === itemNewEdite.id?  itemNewEdite : item
        );
        setData(updatedData);
        // console.log('Updated Data:', updatedData);
        // Update the state with the updated data
        // setData(updatedData);
        setitemEdit(null)
    }


    // Handle the search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        //Create table
        <div className="table">
            {/* IUmport Container From Bootstrap */}
            <div className="container">
                {/* Create Header */}
                <div className="header">
                    {/* 
                        !Create Add Button
                        <p>إضافة وصف جديد</p>
                        !Create Search Box
                        ? Contain 
                        1 - option manu => Icon Import From Font Awesome
                        2- search input -> input field with label

                    */}
                    <div className="head-box">
                        <div className="add-head">
                            {/* onClick run handleAddRow Function -> Show Add Form*/}
                            <p onClick={handleAddRow} className="add-item">إضافة وصف جديد</p>
                        </div>
                        <div className="add-head-print">
                            <p className="print-icon">
                                <i class="fa-solid fa-print"></i>
                            </p>
                        </div>
                    </div>
                    <div className="search-box">
                        <div className="option-manu">
                            <p>
                                <i class="fa-solid fa-sliders"></i>
                            </p>
                        </div>
                        <div class="form-floating search-input">
                            {/* onChange run handleSearch Function -> Update Search Query State With Input Value */}
                            <input type="text" class="form-control" id="floatingInput" placeholder="ابحث هنا" onChange={handleSearch} value={searchQuery}/>
                            <label for="floatingInput">ابحث هنا</label>
                        </div>
                    </div>
                </div>
                {/* 
                    !Create Table Contant
                    ? Contain
                    1- table
                    2- table head
                    3- table body
                    4- table row
                    5- table data
                */}
                <div className="table-contant">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div>
                                        <p className='item-id-head'>ID</p>
                                    </div>
                                </th>
                                <th scope="col">الطلبيه السابقة</th>
                                <th scope="col">الطلبية الحالية</th>
                                <th scope="col">لحالة</th>
                                <th scope="col">الموردين</th>
                                <th scope="col">التاريخ</th>
                                <th scope="col">تعديل</th>
                                {/* <th scope="col" style={editingRow ? {display: "block"} : {display : "none"}}>حفظ</th> */}
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                // useEffect(() => {
                                    data.map((item) => {
                                        return (
                                            // Map Data Array To Create Table Row
                                            // If any Change In Search Query Show Only Row With (Text , Id) Contain Search Query
                                            // Every td contain Two Element
                                                //? First: input field with value from data array and onChange run handleEditChange Function
                                                //? Second: Text from data array
                                            <tr key={item.id}>
                                                <th scope="row">
                                                    <div className="check-box">
                                                        <p className='item-id'>{item.id}</p>
                                                    </div>
                                                </th>
                                                <td className="px-2">
                                                    {editingRow === item.id ? (
                                                        <input type="text" className='form-control' required value={item.prev_order} onChange={(e) => handleEditChange(e, item.id, 'prev_order')} />
                                                    ) : (
                                                        item.prev_order
                                                    )}
                                                </td>
                                                <td>
                                                    {editingRow === item.id ? (
                                                        <input type="text" required value={item.current_order} onChange={(e) => handleEditChange(e, item.id, 'current_order')} />
                                                    ) : (
                                                        item.current_order
                                                    )}
                                                </td>
                                                <td className="px-2">
                                                    {editingRow === item.id ? (
                                                        <input type="text" required value={item.status} onChange={(e) => handleEditChange(e, item.id, 'status')} />
                                                    ) : (
                                                        item.status
                                                    )}
                                                </td>
                                                <td className="px-3">
                                                    {editingRow === item.id ? (
                                                        <input type="text" required value={item.translates} onChange={(e) => handleEditChange(e, item.id, 'translates')} />
                                                    ) : (
                                                        item.translates
                                                    )}
                                                </td>
                                                <td className="px-3">
                                                    {editingRow === item.id ? (
                                                        <input type="date" required value={item.date} onChange={(e) => handleEditChange(e, item.id, 'date')} />
                                                    ) : (
                                                        item.date
                                                    )}
                                                </td>
                                                <td className="pen icon">
                                                    <i class="fa-regular fa-pen-to-square" onClick={() => handleEditItem(item.id)}></i>
                                                </td>
                                                {/* <td className="save icon" style={editingRow ? {display: "block"} : {display : "none"}}>
                                                    <i class="fa-regular fa-floppy-disk" onClick={() => handleSaveItem(item.id)}></i>
                                                </td> */}
                                                <td className="trash icon">
                                                    <i class="fa-regular fa-trash-can" onClick={() => handleDelteItem(item.id)}></i>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                                // },[itemNewEdite])
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Editrowtable dataWillChange={dataWillChange} 
                    setDataWillChange={setDataWillChange}
                    setNewItem={setitemEdit}
                    />
                </div>
            </div>
        </div>
    );
}

// {/* Conditionally render overlay if showAddForm is true */}
// {showAddForm && <div className='overlay'></div>}
// {/* Conditionally render the form-add container if showAddForm is true */}
// {showAddForm && (
// // Form Add Container
// // ? Contain
// // 1- Box Item -> Contain Title Head And Close Button
// // 2- Form Add -> Contain Form With Three Input Field To Get Data From User And Submit Button
// <div className='add-item-form'>
// <div className="box-item">
//     <div className="close-from" onClick={() => setShowAddForm(false)}>
//         <p>
//             <i class="fa-solid fa-xmark"></i>
//         </p>
//     </div>
//     <div className="title-head">
//         <p>صنف جديد</p>
//     </div>
// </div>
// <div className='form-add' >
//     <form>
//         {/* Form input for 'اسم الخط' */}
//         <div className='form-floating mb-3'>
//             <input
//                 type="text" required 
//                 class="form-control" id="floatingInput" placeholder="اسم الخط"
//                 value={newRowData.text}
//                 onChange={(e) => handleAddFormChange(e, 'text')}
//             />
//             <label for="floatingInput">اسم الخط</label>
//         </div>
//         {/* Form input for 'التاريخ' */}
//         <div className='form-floating mb-3'>
//             <input
//                 type="date" required
//                 class="form-control" id="floatingInput" placeholder="التاريخ"
//                 value={newRowData.date}
//                 onChange={(e) => handleAddFormChange(e, 'date')}
//             />
//         </div>
//         {/* Form input for 'التكلفة' */}
//         <div className='form-floating mb-3'>
//             <input
//                 type="number" required
//                 class="form-control" id="floatingInput" placeholder="التكلفة"
//                 value={newRowData.amount}
//                 onChange={(e) => handleAddFormChange(e, 'amount')}
//             />
//             <label for="floatingInput">التكلفة</label>
//         </div>
//         {/* Form submit button */}
//         <button className='btn' type="button" onClick={handleAddFormSubmit}>
//             حفظ
//         </button>
//     </form>
// </div>
// </div>
// )}


{/* 
                                    Data Row
                                    ? Contain
                                    1- check box
                                    2- table data (Text) with px-2 class from Bootstrap
                                    3- table data (Date)
                                    4- table data (Text) with px-2 class from Bootstrap
                                    5- table data (Price) with px-3 class from Bootstrap
                                    6- Icon Edit With Class Pen Import From Font Awesome
                                    6- Icon Save With Class Save Import From Font Awesome
                                    6- Icon Trash With Class Trash Import From Font Awesome
                                    ! Every Element In Row Contain Containe can Show One Element From Two(Editing Input Filed Or Text)
                                    ? Set The Value Of Input Field To The Value Of Data Array And onChange Run handleEditChange Function
                                        ! Because If You Change The Value Of Input Field The Value Of Data Array Will Change 
                                        ! And if You Need Change Will Shoe Input Field With Row Data
                                    ? Set The Value Of Text To The Value Of Data Array
                                */}