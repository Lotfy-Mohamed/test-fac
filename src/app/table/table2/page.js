"use client";
// Import React And UseState (Hook) From React
import React, { useState } from "react";

export default function Table() {
    // Sample data for the Items table
    const [data, setData] = useState([
        {
            id: 1,
            text: "نص شكلى",
            typeProduct: "قطن",
            unit: "الغاية هي الشكل",
            quantity: 200,
            date: "2001/3/10",
            notes: "يُستخدم في صناعات",
            amount: "150",
        },
        {
            id: 2,
            text: "الغاية هي الشكل",
            typeProduct: "لحم",
            unit: "نص شكلى",
            quantity: 400,
            date: "2005/7/18",
            notes: "يُستخدم في",
            amount: "500",
        },
        {
            id: 3,
            text: "الغاية هي الشكل",
            typeProduct: "سمنة",
            unit: "نص شكلى",
            quantity: 400,
            date: "2005/7/18",
            notes: "يُستخدم في",
            amount: "500",
        },
        // Add more rows as needed
    ]);

    // State to keep track of the Item being edited
    const [editingRow, setEditingRow] = useState(null);

    // Search query state
    const [searchQuery, setSearchQuery] = useState("");

    // State to show/hide the add form
    const [showAddForm, setShowAddForm] = useState(false);

    // State to keep track of the new Item data
    const [newRowData, setNewRowData] = useState({
        text: "",
        typeProduct: "",
        unit: "",
        quantity: null,
        date: "",
        notes: "",
        amount: "",
    });

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

    //Delete Item Fuction
    const handleDelteItem = (id) => {
        //Delete Item From Data Array
        const updatedData = data.filter((row) => row.id !== id);

        //Get Deleted Row Data
        const deletedRow = data.find((item) => item.id === id);
        console.log("Deleted Row Data:", deletedRow);

        //Update Data Array
        setData(updatedData);
    };

    // const handleAddRow = () => {
    //     const newId = data.length + 1;
    //     const newRow = { id: newId, text: 'cxc', date: '2005/5/20', amount: '800' };
    //     setData([...data, newRow]);
    // }

    const handleAddRow = () => {
        setShowAddForm(true);
    };

    const handleAddFormChange = (e, field) => {
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

    const handleAddFormSubmit = () => {
        const newId = data.length + 1;
        const newRow = { id: newId, ...newRowData };
        setData((prevData) => [...prevData, newRow]);
        setShowAddForm(false);
        setNewRowData({
            text: "",
            typeProduct: "",
            unit: "",
            quantity: null,
            date: "",
            notes: "",
            amount: "",
        });
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
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                placeholder="ابحث هنا"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
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
                                        <p className="item-id-head">ID</p>
                                    </div>
                                </th>
                                {/* The Head Of Table Row */}
                                <th scope="col">اسم الصنف </th>
                                <th scope="col">نوع الصنف </th>
                                <th scope="col">الوحدة</th>
                                <th scope="col">الكمية</th>
                                <th scope="col">تاريخ الاضافة</th>
                                <th scope="col">الملاحطات</th>
                                <th scope="col">السعر</th>
                                <th scope="col">تعديل</th>
                                <th scope="col">حفظ</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 
                                    Data Row
                                    ? Contain
                                    data to -> (اسم الصنف -> Data Get From Data Array
                                        , نوع الصنف -> Data Get From Data Array
                                        , الوحدة-> Data Get From Data Array
                                        , الكمية -> Data Get From Data Array
                                        , تاريخ الاضافة -> Data Get From Data Array
                                        , الملاحظات -> Data Get From Data Array
                                        , السعر -> Data Get From Data Array
                                        , تعديل Icon Edit With Class Pen Import From Font Awesome
                                        , حفظ Icon Save With Class Save Import From Font Awesome
                                        , حذف Icon Trash With Class Trash Import From Font Awesome
                                    ! Every Element In Row Contain Containe can Show One Element From Two(Editing Input Filed Or Text)
                                    ? Set The Value Of Input Field To The Value Of Data Array And onChange Run handleEditChange Function
                                        ! Because If You Change The Value Of Input Field The Value Of Data Array Will Change 
                                        ! And if You Need Change Will Shoe Input Field With Row Data
                                    ? Set The Value Of Text To The Value Of Data Array
                                */}
                                
                            {data.map((item) => {
                                // Map Data Array To Create Table Row
                                        // If any Change In Search Query Show Only Row With (Text , Id  ,TypeProduct) Contain Search Query
                                        // Every td contain Two Element
                                            //? First: input field with value from data array and onChange run handleEditChange Function
                                            //? Second: Text from data array
                                return (
                                    <tr key={item.id} style={{ 
                                        display: (
                                            (item.text.toLowerCase().includes(searchQuery.toLowerCase())) 
                                            || 
                                            (item.id.toString().includes(searchQuery.toString()))
                                            || 
                                            (item.typeProduct.toLowerCase().includes(searchQuery.toLowerCase()))
                                        )
                                        ? 'table-row' : 'none' }}>
                                        <th scope="row">
                                            <div className="check-box">
                                                <p className="item-id">{item.id}</p>
                                            </div>
                                        </th>
                                        <td className="px-2">
                                            {editingRow === item.id ? (
                                                <input
                                                    type="text"
                                                    required
                                                    value={item.text}
                                                    onChange={(e) => handleEditChange(e, item.id, "text")}
                                                />
                                            ) : (
                                                item.text
                                            )}
                                        </td>
                                        <td>
                                            {editingRow === item.id ? (
                                                <input
                                                    type="tetx"
                                                    required
                                                    value={item.typeProduct}
                                                    onChange={(e) => handleEditChange(e, item.id, "typeProduct")}
                                                />
                                            ) : (
                                                item.typeProduct
                                            )}
                                        </td>
                                        <td>
                                            {editingRow === item.id ? (
                                                <input
                                                    type="text"
                                                    required
                                                    value={item.unit}
                                                    onChange={(e) => handleEditChange(e, item.id, "unit")}
                                                />
                                            ) : (
                                                item.unit
                                            )}
                                        </td>
                                        <td>
                                            {editingRow === item.id ? (
                                                <input
                                                    type="number"
                                                    required
                                                    value={item.quantity}
                                                    onChange={(e) => handleEditChange(e, item.id, "quantity")}
                                                />
                                            ) : (
                                                item.quantity
                                            )}
                                        </td>
                                        <td>
                                            {editingRow === item.id ? (
                                                <input
                                                    type="date"
                                                    required
                                                    value={item.date}
                                                    onChange={(e) => handleEditChange(e, item.id, "date")}
                                                />
                                            ) : (
                                                item.date
                                            )}
                                        </td>
                                        <td className="px-2">
                                            {editingRow === item.id ? (
                                                <input
                                                    type="text"
                                                    required
                                                    value={item.notes}
                                                    onChange={(e) => handleEditChange(e, item.id, "notes")}
                                                />
                                            ) : (
                                                item.notes
                                            )}
                                        </td>
                                        <td className="px-3">
                                            {editingRow === item.id ? (
                                                <input
                                                    type="number"
                                                    required
                                                    value={item.amount}
                                                    onChange={(e) =>
                                                        handleEditChange(e, item.id, "amount")
                                                    }
                                                />
                                            ) : (
                                                "$" + item.amount
                                            )}
                                        </td>
                                        <td className="pen icon">
                                            <i
                                                class="fa-regular fa-pen-to-square"
                                                onClick={() => handleEditItem(item.id)}
                                            ></i>
                                        </td>
                                        <td className="save icon">
                                            <i
                                                class="fa-regular fa-floppy-disk"
                                                onClick={() => handleSaveItem(item.id)}
                                            ></i>
                                        </td>
                                        <td className="trash icon">
                                            <i
                                                class="fa-regular fa-trash-can"
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
            {/* Conditionally render overlay if showAddForm is true */}
            {showAddForm && <div className="overlay"></div>}
                {/* Conditionally render the form-add container if showAddForm is true */}

                {showAddForm && (
                    // Form Add Container
                    // ? Contain
                    // 1- Box Item -> Contain Title Head And Close Button
                    // 2- Form Add -> Contain Form With Seven Input Field To Get Data From User And Submit Button 
                    // Seven Input For (اسم الصنف , نوع الصنف , الوحدة , الكمية , التاريخ , الملاحظات , التكلفة)
                    // Then Run handleAddFormSubmit Function To Add New Row To Data Array

                    <>
                        <div className="add-item-form">
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
                            <div className="form-add">
                                <form>
                                    {/* Form input for 'اسم الصنف' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="اسم الصنف"
                                            value={newRowData.text}
                                            onChange={(e) => handleAddFormChange(e, "text")}
                                        />
                                        <label for="floatingInput">اسم الصنف</label>
                                    </div>
                                    {/* Form input for 'نوع الصنف' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="نوع الصنف"
                                            value={newRowData.typeProduct}
                                            onChange={(e) => handleAddFormChange(e, "typeProduct")}
                                        />
                                        <label for="floatingInput">نوع الصنف</label>
                                    </div>
                                    {/* Form input for 'الوحدة' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="الوحدة"
                                            value={newRowData.unit}
                                            onChange={(e) => handleAddFormChange(e, "unit")}
                                        />
                                        <label for="floatingInput">الوحدة</label>
                                    </div>
                                    {/* Form input for 'placeholder="الكمية' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="الكمية"
                                            value={newRowData.quantity}
                                            onChange={(e) => handleAddFormChange(e, "quantity")}
                                        />
                                        <label for="floatingInput">الكمية</label>
                                    </div>
                                    {/* Form input for 'التاريخ' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="date"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="التاريخ"
                                            value={newRowData.date}
                                            onChange={(e) => handleAddFormChange(e, "date")}
                                        />
                                    </div>
                                    {/* Form input for 'الملاحظات' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="الملاحظات"
                                            value={newRowData.notes}
                                            onChange={(e) => handleAddFormChange(e, "notes")}
                                        />
                                        <label for="floatingInput">الملاحظات</label>
                                    </div>
                                    {/* Form input for 'التكلفة' */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="التكلفة"
                                            value={newRowData.amount}
                                            onChange={(e) => handleAddFormChange(e, "amount")}
                                        />
                                        <label for="floatingInput">التكلفة</label>
                                    </div>
                                    {/* Form submit button */}
                                    <button
                                        className="btn"
                                        type="button"
                                        onClick={handleAddFormSubmit}
                                    >
                                        حفظ
                                    </button>
                                </form>
                            </div>
                    </div>
                </>)}
        </div>
    );
}
