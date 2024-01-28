"use client";
import React, { useState, useEffect, useCallback } from "react";

//Import Component Of Print Table
import PrintComponent from "@/components/Dashboard/TableComponents/Printtable";

// Import Component Of Add Item
import AddItem from "@/components/Dashboard/TableComponents/AddItem";

// Import Component Of Edit Row Table
import Editrowtable from "@/components/Dashboard/TableComponents/FormEdite";

export default function Table() {
    // Sample data for the Items table
    const [data, setData] = useState([
        {
            id: 25435354,
            text: "نص شكلى",
            price: "20235",
            balance: "15320",
            quantity: "1500",
            total: "330",
            notes: "ملاحظات"
        },
        {
            id: 3253545,
            text: "نص شكلى",
            price: "7014",
            balance: "15450",
            quantity: "1150",
            total: "33210",
            notes: "ملاحظات"
        },
        {
            id: 25242,
            text: "نص شكلى",
            price: "4522",
            balance: "1650",
            quantity: "11250",
            total: "3350",
            notes: "ملاحظات"
        },
        {
            id: 54245245,
            text: "نص شكلى",
            price: "45452",
            balance: "125",
            quantity: "9852",
            total: "35330",
            notes: "ملاحظات"
        },
        // Add more rows as needed
    ]);

    // Sample data for the Acount Data
    const [acountData, setAcountData] = useState([
        {
            employee: "محمد عبد الرحمن",
            date: "2021/5/20",
            acountName: "محمد جمال احمد",
            id: 58,
            registerNum: "874",
            orderNum: "72690",
        }
    ]);

    //!-------Function For Search In Table--------

    // Search query state
    const [searchQuery, setSearchQuery] = useState("");

    // Handle the search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    //!--------Function For Print --------

    // Set State For Show Print Component
    const [showPrint, setShowPrint] = useState(false);

    // Set State For Data Select Print
    const [data_select_print, set_data_select_print] = useState([]);

    // Set State For Table Print
    const [table_print, set_table_print] = useState([]);


    // Handle Function For Print Item (Select Item To Print)
    const handlePrintItem = (e) => {
        let arr = [...data_select_print];
        if (data_select_print.length == data.length) {
            arr = []
        }
        var headInput = document.getElementById('selectAll-input')
        if (headInput.checked) {
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

    // Handle Function For Print All Item (Select All Item To Print)
    const handlePrintAll = (e) => {
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
                set_data_select_print([])
            }
        })
        var headInput = document.getElementById('selectAll-input')
        if (headInput.checked) {
            const trElement = document.getElementById('head-Of-table');
            const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));
            set_table_print(thElements)
            set_data_select_print(data);
        } else {
            set_data_select_print([])
        }
    }

    // This Function For Any Change In Data Array (Add , Edit , Delete) => Reset Print Data by => (Un Check All Check Box)
    useEffect(() => {
        var headInput = document.getElementById('selectAll-input')
        if(headInput.checked) {
            headInput.checked = false
        }
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
            }
        })
    },[data])

    //!--------Function For Add Item--------

    // Set State For Show Add Form
    const [showAddForm, setShowAddForm] = useState(false);
    // State For New Row Data
    const [formData_Add, setFormData_Add] = useState({});
    
    // State For Table Head
    const [tableHead, setTableHead] = useState()

    // Function For Send Data To Add Item Form
    const handleAddRow = () => {
        setShowAddForm(true);
        const trElement = document.getElementById('head-Of-table');
        const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"]):not([type="id"])'));
        setTableHead(thElements)
    };

    // Run This Function When Add Item Form Data Change
    useEffect(() => {
        if (formData_Add.text !== undefined
            || formData_Add.id !== undefined
            || formData_Add.price !== undefined
            || formData_Add.balance !== undefined
            || formData_Add.quantity !== undefined
            || formData_Add.total !== undefined
            || formData_Add.notes !== undefined) {
            setData([...data, formData_Add])
        }
    }, [formData_Add])

    //!--------Function For Edit Item--------


    // State For Data Will Change (New Update Of Row)
    const [itemNewEdite, setitemEdit] = useState(null);

    // Data Will Change 
    const [dataWillChange, setDataWillChange] = useState(null);

    // The Structure Of Row Data
    const [structureRow, setstructureRow] = useState({ id: '', text: '', price: '', balance: '', quantity: '', total: '', notes: '' });

    // New State For Head Add
    const [headtableEdit, setTableHeadEdit] = useState([])
    //State To Show Edit Form
    const [showEdit, setShowEdit] = useState(false);

    // Function For Send Data To Edit Row Table
    const handleEditItem = (id) => {
        const trElement = document.getElementById('head-Of-table');

        const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));

        setTableHeadEdit(thElements)

        // Set the editingRow state to the id of the Item being edited
        const getData = data.filter((row) => row.id == id);
        // setEditingRow(id);
        setDataWillChange(getData);
    };

    // Run This Function When New Object Came From Edit Form
    useEffect(() => {
        if (itemNewEdite) {
            const updateData = data.map((item) => item.id === itemNewEdite.id ? itemNewEdite : item);
            setData(updateData);
        }
    }, [itemNewEdite])


    //!--------Function For Delete Item--------
    //Delete Item Fuction
    const handleDelteItem = (id) => {
        //Delete Item From Data Array
        const updatedData = data.filter((row) => row.id !== id);

        //Get Deleted Row Data
        const deletedRow = data.find((item) => item.id === id);

        //Update Data Array
        setData(updatedData);
    };



    // Function For Send Data To Add Item Form
    // const handleAddRow = () => {
    //     setShowAddForm(true);
    //     const trElement = document.getElementById('head-Of-table');
    //     const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"]):not([type="id"])'));
    //     setTableHead(thElements)
    // };

    // If Add Item From (Add Item Component)  Data Change
    // Caheck If Any In Data Undefined Or Not (If Undefined Not Add To Data Array)
    // // Run This Function When Add Item Form Data Change
    // useEffect(() => {
    //     console.log(formData_Add)
    //     if (formData_Add.text !== undefined
    //         || formData_Add.id !== undefined
    //         || formData_Add.price !== undefined
    //         || formData_Add.balance !== undefined
    //         || formData_Add.quantity !== undefined
    //         || formData_Add.total !== undefined
    //         || formData_Add.notes !== undefined) {
    //         setData([...data, formData_Add])
    //     }
    // }, [formData_Add])



    // Function For Send Data To Edit Row Table
    // const handleEditItem = (id) => {
    //     const trElement = document.getElementById('head-Of-table');

    //     const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));

    //     console.log(thElements)
    //     setTableHeadEdit(thElements)

    //     // Set the editingRow state to the id of the Item being edited
    //     const getData = data.filter((row) => row.id == id);
    //     // setEditingRow(id);
    //     setDataWillChange(getData);
    //     // console.log(dataWillChange)
    // };


    // useEffect(() => {
    //     if (itemNewEdite) {
    //         const updateData = data.map((item) => item.id === itemNewEdite.id ? itemNewEdite : item);
    //         setData(updateData);
    //     }
    //     console.log(data, "data")
    // }, [itemNewEdite])



    // const handleSaveItem = (id) => {
    //     // Save the edited data and reset the editingRow state
    //     setEditingRow(null);
    // };


    //Delete Item Fuction
    // const handleDelteItem = (id) => {
    //     //Delete Item From Data Array
    //     const updatedData = data.filter((row) => row.id !== id);

    //     //Get Deleted Row Data
    //     const deletedRow = data.find((item) => item.id === id);
    //     console.log("Deleted Row Data:", deletedRow);

    //     //Update Data Array
    //     setData(updatedData);
    // };


    // // Handle Function For Print Item (Select Item To Print)
    // const handlePrintItem = (e) => {
    //     let arr = [...data_select_print];
    //     if (data_select_print.length == data.length) {
    //         arr = []
    //     }

    //     var headInput = document.getElementById('selectAll-input')

    //     if (headInput.checked) {
    //         arr = []
    //         headInput.checked = false
    //     }

    //     if (e.target.checked) {
    //         arr.push(data.find((item) => item.id === Number(e.target.value)));
    //     } else {
    //         const index = arr.findIndex((item) => item.id === Number(e.target.value));
    //         if (index !== -1) {
    //             arr.splice(index, 1);
    //         }
    //     }
    //     const trElement = document.getElementById('head-Of-table');

    //     const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));

    //     set_table_print(thElements)

    //     set_data_select_print(arr);

    // };

    // // Handle Function For Print All Item (Select All Item To Print)
    // const handlePrintAll = (e) => {
    //     var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
    //     allItemsCheckbox.forEach((item) => {
    //         if (item.checked) {
    //             item.checked = false
    //             set_data_select_print([])
    //         }
    //     })
    //     var headInput = document.getElementById('selectAll-input')
    //     if (headInput.checked) {
    //         const trElement = document.getElementById('head-Of-table');
    //         const thElements = Array.from(trElement.querySelectorAll('th:not([type="hide"])'));
    //         set_table_print(thElements)
    //         set_data_select_print(data);
    //     } else {
    //         set_data_select_print([])
    //     }
    // }

    // const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        var headInput = document.getElementById('selectAll-input')
        if(headInput.checked) {
            headInput.checked = false
        }
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
            }
        })
    },[data])

    return (

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
                            <p onClick={handleAddRow} className="add-item">
                                إضافة مادة جديدة
                            </p>
                        </div>
                        <div className="add-head-print" onClick={() => setShowPrint(true)}>
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
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="ابحث هنا"
                                onChange={handleSearch}
                                value={searchQuery}
                            />
                            <label for="floatingInput">ابحث هنا</label>
                        </div>
                    </div>
                </div>

                {/* 
                    Create Acount Data
                */}

                <div className="acount-data">
                    {
                        acountData.map((item, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-6">
                                        <p className="item">
                                            <span className="item-head">
                                                اسم المجهز
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.employee}
                                            </span>
                                        </p>
                                        <p className="item">
                                            <span className="item-head">
                                                التاريخ
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.date}
                                            </span>
                                        </p>
                                        <p className="item">
                                            <span className="item-head">
                                                اسم الحساب
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.acountName}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <p className="item">
                                            <span className="item-head">
                                                رقم الحساب
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.id}
                                            </span>
                                        </p>
                                        <p className="item">
                                            <span className="item-head">
                                                رقم القيد
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.registerNum}
                                            </span>
                                        </p>
                                        <p className="item">
                                            <span className="item-head">
                                                رقم الطلب
                                            </span>
                                            <i class="fa-solid fa-arrow-left"></i>
                                            <span className="item-data">
                                                {item.orderNum}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
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
                            <tr id="head-Of-table">
                                <th type={"hide"}>
                                    {/* <input type="checkbox" onClick={(e) => handlePrintAll(e)}/> */}
                                    <input type="checkbox" onClick={(e) => handlePrintAll(e)} id='selectAll-input' />
                                </th>
                                <th scope="col" type={"id"} text={"ID"} value={"id"}>
                                    ID
                                </th>
                                <th scope="col" type={"text"} value={"text"} text={"اسم المادة"}>اسم المادة </th>
                                <th scope="col" type={"number"} value={"price"} text={"السعر"}>السعر</th>
                                <th scope="col" type={"number"} value={"balance"} text={"الرصيد"}>الرصيد</th>
                                <th scope="col" type={"number"} value={"quantity"} text={"الكمية"}>الكمية</th>
                                <th scope="col" type={"number"} value={"total"} text={"العدد الاجمالى"}>العدد الاجمالى</th>
                                <th scope="col" type={"text"} value={"notes"} text={"الملاحظات"}>الملاحظات</th>
                                <th scope="col" type={"hide"}>تعديل</th>
                                <th scope="col" type={"hide"}>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 
                                    Data Row
                                    ? Contain
                                    1- check box
                                    2- table data (Text , Price , balance , quantity , total , notes) with (px-2 , px-3) class from Bootstrap
                                    6- Icon Edit With Class Pen Import From Font Awesome
                                    7- Icon Trash With Class Trash Import From Font Awesome
                                */}
                            {data.map((item) => {
                                return (
                                    <tr key={item.id} style={{
                                        // Row Display None If Not Include Search Query
                                        // Check If Search Query Include In Any Data In Row Or Not If Include Display Row Only If Not Display None
                                        display: ((
                                            item.text.toLowerCase().includes(searchQuery.toLowerCase()))
                                            ||
                                            (item.id.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.quantity.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.total.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.price.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.balance.toString().includes(searchQuery.toString())))
                                            ? 'table-row' : 'none'
                                    }}>
                                        <th scope="row">
                                            {/* Check Box For Select Item To Print */}
                                            <div className="check-box">
                                                <input type='checkbox' id='checkbox-item' value={item.id} onClick={(e) => handlePrintItem(e)} />
                                            </div>
                                        </th>
                                        {/* Sort Data In Data Array in Table */}
                                        <th scope="row">
                                            <div className="check-box">
                                                <p className="item-id">{item.id}</p>
                                            </div>
                                        </th>
                                        <td className="px-2">
                                            {item.text}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td className="px-2">
                                            {item.balance}
                                        </td>
                                        <td className="px-2">
                                            {item.quantity}
                                        </td>
                                        <td className="px-3">
                                            {item.total}
                                        </td>
                                        <td className="px-3">
                                            {item.notes}
                                        </td>
                                        <td className="pen icon">
                                            {/*  !Create Edit Button And Callm Function Edit send The ID Of Row Click*/}
                                            <i
                                                className="fa-regular fa-pen-to-square"
                                                onClick={() => handleEditItem(item.id) & setShowEdit(true)}
                                                ></i>
                                        </td>
                                            {/*  !Create Delete Button And Call Function Delete*/}
                                        <td className="trash icon">
                                            <i
                                                className="fa-regular fa-trash-can"
                                                onClick={() => handleDelteItem(item.id)}
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Invoke Add Item Component*/}
            {showAddForm ? <AddItem
                setShowAddForm={setShowAddForm}
                tableHead={tableHead}
                setFormData_Add={setFormData_Add}
                newId={data.length + 1}
                /> : null}
            {/* Invoke Print Component*/}
            {data_select_print.length == 0 ? null : showPrint ? <PrintComponent
                data_select_print={data_select_print}
                table_print={table_print}
                setShowPrint={setShowPrint}
            /> : null}
            {/* Invoke Edite Component */}
            {showEdit ?
                <Editrowtable dataWillChange={dataWillChange}
                    setDataWillChange={setDataWillChange}
                    setNewItem={setitemEdit}
                    setShowEdit={setShowEdit}
                    showEdit={showEdit}
                    structureRow={structureRow}
                    tableHead={headtableEdit}
                />
                : null}
        </div>
    );
}
