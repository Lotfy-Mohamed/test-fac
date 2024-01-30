"use client";
import React, { useState, useEffect } from "react";

//Import Component Of Print Table
import PrintComponent from "@/components/Dashboard/TableComponents/Printtable";

// Import Component Of Add Item
import AddItem from "@/components/Dashboard/TableComponents/AddItem";

// Import Component Of Edit Row Table
import Editrowtable from "@/components/Dashboard/TableComponents/FormEdite";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Import Chart JS
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart JS (Pie) (ChartJS => Libarary)
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Table() {
    // Add Data To Array (Random Data For Test)
    //? Contain 
    // 1- id : Number
    // 2- type : String
    // 3- unit : String
    // 4- quantity : Number
    // 5- startDate : String
    // 6- endDate : String
    // 7- statusOne : Number
    // 8- statusTwo : Number
    // 9- notes : String
    // Data Array For Table (Random Data For Test)
    // Create State For Data Array
    // The Data Array Is The Main Array That Will Be Used To Render The Items
    // Render The Items By Mapping The Data Array
    const [data, setData] = useState([
        {
            id: 253612,
            name: "لبن",
            type: "البان",
            unit: "قطن",
            quantity: "150",
            startDate: "15-5-2023",
            endDate: "15-11-2023",
            statusOne: 55,
            statusTwo: 45,
            notes: "نص شكلى",
        },
        {
            id: 256123,
            name: "بيض",
            type: "دواجن",
            unit: "قطن",
            quantity: "251",
            startDate: "20-3-2023",
            endDate: "5-5-2023",
            statusOne: 30,
            statusTwo: 70,
            notes: "الغاية منها توضيح نص الشكل",
        },
        {
            id: 458963,
            name: "جبنة",
            type: "جبن",
            unit: "قطن",
            quantity: "300",
            startDate: "15-2-2024",
            endDate: "30-10-2024",
            statusOne: 55,
            statusTwo: 45,
            notes: "يستخدم في صناعة الكثير من الأشياء",
        },
        {
            id: 152634,
            name: "مايونيز",
            type: "البان",
            unit: "قطن",
            quantity: "512",
            startDate: "15-2-2024",
            endDate: "30-10-2024",
            statusOne: 55,
            statusTwo: 45,
            notes: "نص شكلى",
        },
        // Add more rows as needed
    ]);


    //!-------Function For Search In Table--------

    // Any Change In Input Search => Change The State Of Search Query
    // If Search Query Include In Any Data In Row => Display Row Only If Not Display None

    // Search query state
    const [searchQuery, setSearchQuery] = useState("");

    // Handle the search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    //!--------Function For Print --------

    // Print Component Take Data Array And Table Head
    // Data Array (Selected Item To Print) or (All Item To Print)

    // Set State For Show Print Component
    const [showPrint, setShowPrint] = useState(false);

    // Set State For Data Select Print
    const [data_select_print, set_data_select_print] = useState([]);

    // Set State For Table Print
    const [table_print, set_table_print] = useState([]);


    // Handle Function For Print Item (Select Item To Print) or (Select Multiple Items To Print)
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

    // Handle Function For Print All Item (Select All Items To Print)
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
        if (headInput.checked) {
            headInput.checked = false
        }
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
            }
        })
    }, [data])

    //!--------Function For Add Item--------

    // Add Item Fuction Take Data Array And Table Head
    // Data Array (New Item Only)
    // Make Input Field For Every Field In Table Head
    // INput Field Take The Value Of Table Head And The Type Of Input Field (Text , Number , Date , Etc..)

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

    // Edit Item Fuction Take Data Array And Table Head
    // Data Array (Edite Item Only)
    // Make Input Field For Every Field In Table Head
    // INput Field Take The Value Of Table Head And The Type Of Input Field (Text , Number , Date , Etc..)
    // Set The Value Of Input Field To The Value Of Data Array
    // And Show The Old Data In Input Field

    // State For Data Will Change (New Update Of Row)
    const [itemNewEdite, setitemEdit] = useState(null);

    // Data Will Change 
    const [dataWillChange, setDataWillChange] = useState(null);

    // The Structure Of Row Data
    const [structureRow, setstructureRow] = useState({ 
        id: '', name: '', type: '', unit: '',
        quantity: '', startDate: '',endDate: '' ,
        statusOne: '' , statusTwo: '' ,notes: '' 
    });

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

    // When Click Delete Icon => Get The ID Of Row And Delete It From Data Array

    //Delete Item Fuction
    const handleDelteItem = (id) => {
        //Delete Item From Data Array
        const updatedData = data.filter((row) => row.id !== id);

        //Get Deleted Row Data
        const deletedRow = data.find((item) => item.id === id);

        //Update Data Array
        setData(updatedData);
    };

    //!--------Function For Show Full Address When Click--------
    // Function To Show Full Address If Address Length More Than 10 Char
    //Create State For Show Full Address
    const [showAddress, setShowAddress] = useState(false);
    const [addressTitle, setAddressTitle] = useState('');

    function showFullAddress(e) {
        setShowAddress(true);
        setAddressTitle(e)
    }



    // This Function For Any Change In Data Array (Add , Edit , Delete) => Reset Print Data by => (Un Check All Check Box)
    // For Print Beacuse If Select Element To Print And (Edit , ...) It => The Element Still In Print Data (With Old Data , Old Style , ...)
    useEffect(() => {
        var headInput = document.getElementById('selectAll-input')
        if (headInput.checked) {
            headInput.checked = false
        }
        var allItemsCheckbox = document.querySelectorAll('#checkbox-item')
        allItemsCheckbox.forEach((item) => {
            if (item.checked) {
                item.checked = false
            }
        })
    }, [data])


    // The Render Of Table Component
    return (

        <div className="table">
            {/* IUmport Container From Bootstrap */}
            <div className="container-fluid">
                {/* Create Header */}
                <div className="header">
                    {/* 
                        Header Contain
                        1- Add Item Button (To Add New Item)
                        2- Print Button (To Print Selected Item)
                    */}
                    <div className="head-box">
                        <div className="add-head">
                            <p onClick={handleAddRow} className="add-item">
                                إضافة صنف جديدة
                            </p>
                        </div>
                        <div className="add-head-print" onClick={() => setShowPrint(true)}>
                            <p className="print-icon">
                                <i class="fa-solid fa-print"></i>
                            </p>
                        </div>
                    </div>
                    {/* 
                        Search Contain
                        1- Search Input
                        2- Search Icon
                    */}
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
                                // Handle Search Input Change (If Change Set The State Of Search Query)
                                onChange={handleSearch}
                                value={searchQuery}
                            />
                            <label for="floatingInput">ابحث هنا</label>
                        </div>
                    </div>
                </div>
                {/* Table  */}
                <div className="table-contant">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr id="head-Of-table">
                                <th type={"hide"}>
                                    {/* Check Box For Select All Item To Print */}
                                    <input type="checkbox" onClick={(e) => handlePrintAll(e)} id='selectAll-input' />
                                </th>
                                <th scope="col" type={"id"} text={"ID"} value={"id"}>
                                    ID
                                </th>
                                {/* 
                                        Table Head
                                        ? Contain
                                        1- Text Attribute (Text Of Head)
                                        2- Value Attribute (Value Of Head To Get The Value Of Data Array)
                                        3- Type attribute (Type Of Input Field) Used To Create Input Field For Every Head (Edit , Add) => Component
                                */}
                                <th scope="col" type={"text"} value={"name"} text={"اسم الصنف"}>اسم الصنف </th>
                                <th scope="col" type={"text"} value={"type"} text={"نوع الصنف"}>نوع الصنف</th>
                                <th scope="col" type={"text"} value={"unit"} text={"الوحدة"}>الوحدة</th>
                                <th scope="col" type={"number"} value={"quantity"} text={"الكمية"}>الكمية</th>
                                <th scope="col" type={"date"} value={"startDate"} text={"تاريخ الاضافة"}>تاريخ الاضافة</th>
                                <th scope="col" type={"date"} value={"endDate"} text={"تاريخ الانتهاء"}>تاريخ الانتهاء</th>
                                <th scope="col" type={"number"} value={"statusOne"} text={"الاجمالى"} className="status-chart">الحالة</th>
                                <th scope="col" type={"number"} value={"statusTwo"} text={"الحالى"}></th>
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
                                    2- table data (Data Array) with (px-2 , px-3) class from Bootstrap
                                    6- Icon Edit With Class Pen Import From Font Awesome
                                    7- Icon Trash With Class Trash Import From Font Awesome
                                */}

                                {/* data => Data Array */}
                            {data.map((item) => {
                                return (
                                    <tr key={item.id} style={{
                                        // Row Display None If Not Include Search Query
                                        // Check If Search Query Include In Any Data In Row Or Not If Include Display Row Only If Not Display None
                                        display: ((
                                            item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                            ||
                                            (item.id.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.unit.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.type.toString().includes(searchQuery.toString()))
                                            ||
                                            (item.notes.toString().includes(searchQuery.toString())))
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
                                            {/* Get The (Name) Of Item From Data Array */}
                                            {item.name}
                                        </td>
                                        <td>
                                            {/* Get The (type) Of Item From Data Array */}
                                            {item.type}
                                        </td>
                                        <td>
                                            {/* Get The (unit) Of Item From Data Array */}
                                            {item.unit}
                                        </td>
                                        <td>
                                            {/* Get The (quantity) Of Item From Data Array */}
                                            {item.quantity}
                                        </td>
                                        <td>
                                            {/* Get The (startDate) Of Item From Data Array */}
                                            {item.startDate}
                                        </td>
                                        <td>
                                            {/* Get The (endDate) Of Item From Data Array */}
                                            {item.endDate}
                                        </td>
                                            {/* Import Chart JS 
                                                ? Contain
                                                1- Chart Type (Pie)
                                                2- Data Of Chart => Data Array (statusOne , statusTwo)
                                            */}
                                        <td className="chart-type" colSpan={2}>
                                            <div className="chart-type-section-table">
                                                <Pie data={{
                                                    datasets: [
                                                        {
                                                            label: '',
                                                            data: [item.statusOne, item.statusTwo,],
                                                            // Set Background Color For Chart
                                                            backgroundColor: [
                                                                'rgba(69, 143, 154, 1)',
                                                                'rgba(255, 177, 183, 1)',
                                                            ],
                                                            // Set Border Color For Chart
                                                            borderColor: [
                                                                'rgba(255, 99, 132, 1)',
                                                                'rgba(54, 162, 235, 1)',
                                                            ],
                                                            // Set Border Width For Chart
                                                            borderWidth: 1,
                                                        },
                                                    ],
                                                }} />
                                            </div>
                                        </td>
                                        {/* 
                                            Show Slice Of Address If Address Length More Than 10 Char
                                            Show Full Address When Click On Address
                                        */}
                                        <td className="px-2">
                                            <p onClick={(e) => showFullAddress(item.notes)} value={item.notes}>{item.notes.length > 10 ? item.notes.slice(0, 10) + '...' : item.notes}</p>                                        
                                        </td>
                                        {/*  !Create Edit Button And Callm Function Edit send The ID Of Row Click*/}
                                        <td className="pen icon">
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
            {/* Declare Chart Used To Declare The Color Of Chart (What This Color Mean) */}
            <div className="declare-chart-bottom">
                <div className="first">
                    <span className="text">الاجمالى</span>
                    <span className="color">
                        <i className="fa-solid fa-circle"></i>
                    </span>
                </div>
                <div className="second">
                    <span className="text">الحالى</span>
                    <span className="color">
                        <i className="fa-solid fa-circle"></i>
                    </span>
                </div>
            </div>
            {/* Show Full Address When Click In Item
                Get The Item ID And Get The Address From Data Array
                And Add Class (Show) To Show Full Address
                And Add The Address To The State (addressTitle) To Show It In Alert
            */}
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
