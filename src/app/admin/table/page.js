'use client';
import React, { useState } from 'react';

export default function Table() {

    // Sample data for the Items table
    const [data, setData] = useState([
        { id: 1, text: 'نص شكلى', date: '2001/3/10', amount: '150' },
        { id: 2, text: 'الغاية هي الشكل', date: '2000/5/19', amount: '240' },
        // Add more rows as needed
    ]);

    // State to keep track of the Item being edited
    const [editingRow, setEditingRow] = useState(null);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    // State to show/hide the add form
    const [showAddForm, setShowAddForm] = useState(false);
    // State to keep track of the new row data
    const [newRowData, setNewRowData] = useState({ text: '', date: '', amount: '' });



    const handleEditItem = (id) => {
        // Set the editingRow state to the id of the Item being edited
        setEditingRow(id);
    };

    const handleSaveItem = (id) => {
        // Save the edited data and reset the editingRow state
        setEditingRow(null);
    };

    const handleEditChange = (e, id, field) => {
        // Update the edited data in the state
        //!Search The Data Array For The Item With The Matching Id
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, [field]: e.target.value } : item
        );
        // Update the state with the updated data
        setData(updatedData);
    };

    // const filteredData = data.filter((item) =>
    //     Object.values(item).some((value) =>
    //         value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    //     )
    // );

    //Delete Item Fuction
    const handleDelteItem = (id) => {

        //Delete Item From Data Array
        const updatedData = data.filter((row) => row.id !== id);

        //Get Deleted Row Data
        const deletedRow = data.find((item) => item.id === id);
        console.log('Deleted Row Data:', deletedRow);

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

    // Handle the add form submit
    const handleAddFormSubmit = () => {
        // Add the new row to the data array
        // Check if any of the fields are empty show alert to user to fill all fields 
        if(newRowData.text === '' || newRowData.date === '' || newRowData.amount === '') {
            alert('Please Fill All Data');
        } else{
            // Add the new row to the data array 
            // Create New Id For New Row By Get Lenght Of Data Array And Add 1
            const newId = data.length + 1;
            // Get Data Of New Row From newRowData State
            const newRow = { id: newId, ...newRowData };
            // Update Data Array By Add New Row To Data Array And Prev Data
            setData((prevData) => [...prevData, newRow]);
            setShowAddForm(false);
            // Reset The State Of New Row Data If User Want To Add New Row Other Time
            setNewRowData({ text: '', date: '', amount: '' });

        }
    };

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
                                <th scope="col">اسم الخط </th>
                                <th scope="col">التاريخ</th>
                                <th scope="col">اسم الخط </th>
                                <th scope="col">التكلفة</th>
                                <th scope="col">تعديل</th>
                                <th scope="col">حفظ</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
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
                            {
                                data.map((item) => {
                                    return (
                                        // Map Data Array To Create Table Row
                                        // If any Change In Search Query Show Only Row With (Text , Id) Contain Search Query
                                        // Every td contain Two Element
                                            //? First: input field with value from data array and onChange run handleEditChange Function
                                            //? Second: Text from data array
                                        <tr key={item.id} style={{ display: ((item.text.toLowerCase().includes(searchQuery.toLowerCase())) || (item.id.toString().includes(searchQuery.toString())))? 'table-row' : 'none' }}>
                                            <th scope="row">
                                                <div className="check-box">
                                                    <p className='item-id'>{item.id}</p>
                                                </div>
                                            </th>
                                            <td className="px-2">
                                                {editingRow === item.id ? (
                                                    <input type="text" required value={item.text} onChange={(e) => handleEditChange(e, item.id, 'text')} />
                                                ) : (
                                                    item.text
                                                )}
                                            </td>
                                            <td>
                                                {editingRow === item.id ? (
                                                    <input type="date" required value={item.date} onChange={(e) => handleEditChange(e, item.id, 'date')} />
                                                ) : (
                                                    item.date
                                                )}
                                            </td>
                                            <td className="px-2">
                                                {editingRow === item.id ? (
                                                    <input type="text" required value={item.text} onChange={(e) => handleEditChange(e, item.id, 'text')} />
                                                ) : (
                                                    item.text
                                                )}
                                            </td>
                                            <td className="px-3">
                                                {editingRow === item.id ? (
                                                    <input type="number" required value={item.amount} onChange={(e) => handleEditChange(e, item.id, 'amount')} />
                                                ) : (
                                                    '$' + item.amount
                                                )}
                                            </td>
                                            <td className="pen icon">
                                                <i class="fa-regular fa-pen-to-square" onClick={() => handleEditItem(item.id)}></i>
                                            </td>
                                            <td className="save icon">
                                                <i class="fa-regular fa-floppy-disk" onClick={() => handleSaveItem(item.id)}></i>
                                            </td>
                                            <td className="trash icon">
                                                <i class="fa-regular fa-trash-can" onClick={() => handleDelteItem(item.id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Conditionally render overlay if showAddForm is true */}
                {showAddForm && <div className='overlay'></div>}
                        {/* Conditionally render the form-add container if showAddForm is true */}
                {showAddForm && (
                    // Form Add Container
                    // ? Contain
                    // 1- Box Item -> Contain Title Head And Close Button
                    // 2- Form Add -> Contain Form With Three Input Field To Get Data From User And Submit Button
                    <div className='add-item-form'>
                        <div className="box-item">
                            <div className="close-from" onClick={() => setShowAddForm(false)}>
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
                                {/* Form input for 'اسم الخط' */}
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text" required 
                                        class="form-control" id="floatingInput" placeholder="اسم الخط"
                                        value={newRowData.text}
                                        onChange={(e) => handleAddFormChange(e, 'text')}
                                    />
                                    <label for="floatingInput">اسم الخط</label>
                                </div>
                                {/* Form input for 'التاريخ' */}
                                <div className='form-floating mb-3'>
                                    <input
                                        type="date" required
                                        class="form-control" id="floatingInput" placeholder="التاريخ"
                                        value={newRowData.date}
                                        onChange={(e) => handleAddFormChange(e, 'date')}
                                    />
                                </div>
                                {/* Form input for 'التكلفة' */}
                                <div className='form-floating mb-3'>
                                    <input
                                        type="number" required
                                        class="form-control" id="floatingInput" placeholder="التكلفة"
                                        value={newRowData.amount}
                                        onChange={(e) => handleAddFormChange(e, 'amount')}
                                    />
                                    <label for="floatingInput">التكلفة</label>
                                </div>
                                {/* Form submit button */}
                                <button className='btn' type="button" onClick={handleAddFormSubmit}>
                                    حفظ
                                </button>
                            </form>
                        </div>
                    </div>
                )}
        </div>
    );
}