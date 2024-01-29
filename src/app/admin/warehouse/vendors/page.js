'use client';
import React, { useState, useRef, useEffect } from 'react';

import AddItem from '@/components/Dashboard/TableComponents/AddItem';
import PrintComponent from '@/components/Dashboard/TableComponents/Printtable';

export default function Table() {

    // Sample data for the Items table
    const [data, setData] = useState([
        { id: 1, name: 'نص شكلى', phone: "نص13", email: '2001/3/10', address: '8971351المنصوره المنصوره المنصوره', commercial_register: "121567456456" },
        { id: 2, name: 'العاب ناريه', phone: "+21018530546", email: '2010/8/19', address: '52674المنصوره المنصوره المنصوره', commercial_register: "845123456" },
        { id: 3, name: 'العاب ناريه', phone: "+21018530546", email: '2010/8/19', address: '52674المنصوره المنصوره المنصوره', commercial_register: "845123456" },
        // Add more rows as needed
    ]);

    // State to keep track of the Item being edited
    const [editingRow, setEditingRow] = useState(null);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    // State to show/hide the add form
    const [showAddForm, setShowAddForm] = useState(false);
    // State to keep track of the new row data
    // const [newRowData, setNewRowData] = useState({ text: '', date: '', amount: '' });

    //Create State For Show Full Address
    const [showAddress, setShowAddress] = useState(false);
    const [addressTitle, setAddressTitle] = useState('');

    const [tableHead, setTableHead] = useState()

    //To Show Print Component
    const [showPrint, setShowPrint] = useState(false);

    const [formData_Add, setFormData_Add] = useState({});

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


    // Handle the change in the add form inputs
    // const handleAddFormChange = (e, field) => {
    //     setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    // };

    // Handle the add form submit
    // const handleAddFormSubmit = () => {
    //     // Add the new row to the data array
    //     // Check if any of the fields are empty show alert to user to fill all fields 
    //     if (newRowData.text === '' || newRowData.date === '' || newRowData.amount === '') {
    //         alert('Please Fill All Data');
    //     } else {
    //         // Add the new row to the data array 
    //         // Create New Id For New Row By Get Lenght Of Data Array And Add 1
    //         const newId = data.length + 1;
    //         // Get Data Of New Row From newRowData State
    //         const newRow = { id: newId, ...newRowData };
    //         // Update Data Array By Add New Row To Data Array And Prev Data
    //         setData((prevData) => [...prevData, newRow]);
    //         setShowAddForm(false);
    //         // Reset The State Of New Row Data If User Want To Add New Row Other Time
    //         setNewRowData({ text: '', date: '', amount: '' });

    //     }
    // };

    // Handle the search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    // useEffect(() => {
    //     const trElement = document.getElementById('head-Of-table');

    //     const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));
    //     setTableHead(thElements)
    //     console.log(tableHead);

    // },[]);



    // Set the showAddForm state to true to show the add form
    const handleAddRow = () => {
        setShowAddForm(true);
        const trElement = document.getElementById('head-Of-table');

        const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"]):not([type="id"])'));
        setTableHead(thElements)
        console.log(thElements.type);
    };

    const TableRef = useRef(null);


    // for(let i = 0; i < data.length; i++) {
    //     console.log('Data:', TableRef[i])
    // }
    // console.log('Data:', TableRef.current);

    useEffect(() => {
        if (formData_Add.name !== undefined
            || formData_Add.phone !== undefined
            || formData_Add.email !== undefined
            || formData_Add.address !== undefined
            || formData_Add.commercial_register !== undefined) {
            setData([...data, formData_Add])
        }
    }, [formData_Add])

    // Function To Show Full Address If Address Length More Than 10 Char
    function showFullAddress(e) {
        console.log(e)
        setShowAddress(true);
        setAddressTitle(e)
    }

    const [data_select_print, set_data_select_print] = useState([]);
    const [table_print, set_table_print] = useState([]);
    // const [printEle, setPrintEle] = useState(false);

    const handlePrintItem = (e) => {
        
        // setPrintEle(true)
        let arr = [...data_select_print];
        if(data_select_print.length == data.length){
            arr= []
        }

        var headInput = document.getElementById('selectAll-input')

        if(headInput.checked){
            arr = []
            headInput.checked = false
        }

        if (e.target.checked) {
            arr.push(data.find((item) => item.id === Number(e.target.value)));
        } else {
            const index = arr.findIndex((item) => item.id === Number(e.target.value));
            if (index !== -1) {
                arr.splice(index, 1);
            }
        }
        const trElement = document.getElementById('head-Of-table');

        const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));

        set_table_print(thElements)

        set_data_select_print(arr);

    };


    const handlePrintAll = (e) => {
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')

        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
                set_data_select_print([])
            }
        })

        var headInput = document.getElementById('selectAll-input')
        if(headInput.checked){
            const trElement = document.getElementById('head-Of-table');

            const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));
            set_table_print(thElements)
            set_data_select_print(data);
        } else{
            set_data_select_print([])
        }


    }

    console.log('Full', data_select_print)


   


    return (
        //Create table
        <div className="table">
            {/* IUmport Container From Bootstrap */}
            <div className="container-fluid">
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
                            <p onClick={handleAddRow} className="add-item">إضافة موردين جديد</p>
                        </div>
                        <div className="add-head-print">
                            {/* {!printEle ? <p onClick={handlePrintAll} className="add-item">طباعة الكل</p> : <p className="print-icon" onClick={() => setShowPrint(true)}>
                                <i class="fa-solid fa-print"></i>
                            </p>} */}
                            {/* <p className="print-icon" {onClick={() => setShowPrint(true)}}> */}
                            <p className="print-icon" onClick={data_select_print.length != 0 ?() => setShowPrint(true) : (() => (setShowPrint(true) & set_data_select_print(data)))}>
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
                            <input type="text" class="form-control" id="floatingInput" placeholder="ابحث هنا" onChange={handleSearch} value={searchQuery} />
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
                    <table class="table table-hover" id='table-all'>
                        <thead>
                            <tr id='head-Of-table' ref={TableRef}>
                                <th type={"hide"}>
                                    {/* <input type="checkbox" onClick={(e) => handlePrintAll(e)}/> */}
                                    <input type="checkbox" onClick={(e) => handlePrintAll(e)} id='selectAll-input'/>
                                </th>
                                <th className='item-id-head' type={"id"} text={"ID"} >
                                    ID
                                </th>
                                <th scope="col" type={"text"} value={"name"} text={"اسم المورد"}>اسم المورد</th>
                                <th scope="col" type={"number"} value={"phone"} text={"رقم التليفون"}>رقم التليفون</th>
                                <th scope="col" type={"email"} value={"email"} text={"البريد الالكترونى"}>البريد الالكترونى</th>
                                <th scope="col" type={"text"} value={"address"} text={"العنوان"}>العنوان</th>
                                <th scope="col" type={"number"} value={"commercial_register"} text={"السجل التجارى"}>السجل التجارى</th>
                                <th scope="col" type={"hide"}>تعديل</th>
                                <th scope="col" type={"hide"}>حفظ</th>
                                <th scope="col" type={"hide"}>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => {
                                    return (
                                        // Map Data Array To Create Table Row
                                        // If any Change In Search Query Show Only Row With (Text , Id) Contain Search Query
                                        // Every td contain Two Element
                                        //? First: input field with value from data array and onChange run handleEditChange Function
                                        //? Second: Text from data array
                                        <tr key={item.id} style={{ display: ((
                                            item.name.toLowerCase().includes(searchQuery.toLowerCase())) 
                                            || 
                                            (item.id.toString().includes(searchQuery.toString()))
                                            || 
                                            (item.address.toString().includes(searchQuery.toString()))
                                            || 
                                            (item.commercial_register.toString().includes(searchQuery.toString()))
                                            || 
                                            (item.phone.toString().includes(searchQuery.toString())))
                                            ? 'table-row' : 'none' }}>
                                            <th scope="row">
                                                <div className="check-box">
                                                    <input type='checkbox' id='checkbox-item' value={item.id} onClick={(e) => handlePrintItem(e)} />
                                                </div>
                                            </th>
                                            <td className="px-2">
                                                <p className='item-id'>{item.id}</p>
                                            </td>
                                            <td className="px-2">
                                                {editingRow === item.id ? (
                                                    <input type="text" required value={item.name} onChange={(e) => handleEditChange(e, item.id, 'name')} />
                                                ) : (
                                                    item.name
                                                )}
                                            </td>
                                            <td>
                                                {editingRow === item.id ? (
                                                    <input type="number" required value={item.phone} onChange={(e) => handleEditChange(e, item.id, 'phone')} />
                                                ) : (
                                                    item.phone
                                                )}
                                            </td>
                                            <td className="px-2">
                                                {editingRow === item.id ? (
                                                    <input type="email" required value={item.email} onChange={(e) => handleEditChange(e, item.id, 'email')} />
                                                ) : (
                                                    item.email
                                                )}
                                            </td>
                                            <td className="px-3">
                                                {editingRow === item.id ? (
                                                    <input type="text" required value={item.address} onChange={(e) => handleEditChange(e, item.id, 'address')} />
                                                ) : (
                                                    <p onClick={(e) => showFullAddress(item.address)} value={item.address}>{item.address.length > 10 ? item.address.slice(0, 10) + '...' : item.address}</p>
                                                )}
                                            </td>
                                            <td className="px-3">
                                                {editingRow === item.id ? (
                                                    <input type="text" required value={item.commercial_register} onChange={(e) => handleEditChange(e, item.id, 'commercial_register')} />
                                                ) : (
                                                    item.commercial_register
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
                {showAddress ?
                    <>
                        <div className='overlay'></div>
                        <div className="alert alert-success alert-address" role="alert">
                            <p className='close-alert-address' onClick={() => setShowAddress(false)}>
                                <i class="fa-regular fa-circle-xmark"></i>
                            </p>
                            <p className='text'>
                                {addressTitle}
                            </p>
                        </div>
                    </>
                    : null}
                {showAddForm ? <AddItem
                    setShowAddForm={setShowAddForm}
                    tableHead={tableHead}
                    setFormData_Add={setFormData_Add}
                    newId={data.length + 1}
                /> : null}

                {data_select_print.length == 0 ? null : showPrint ? <PrintComponent
                    data_select_print={data_select_print}
                    table_print={table_print}
                    setShowPrint={setShowPrint}
                /> : null}

            </div>
        </div>
    );
}

