"use client";
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
            typeProduct: "قطن",
            unit: "نص شكلى",
            quantity: 400,
            date: "2005/7/18",
            notes: "يُستخدم في",
            amount: "500",
        },
        {
            id: 3,
            text: "الغاية هي الشكل",
            typeProduct: "قطن",
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

    const [showAddForm, setShowAddForm] = useState(false);

    const [newRowData, setNewRowData] = useState({
        text: "",
        date: "",
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

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

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
        if (
            newRowData.text === "" ||
            newRowData.date === "" ||
            newRowData.amount === ""
        ) {
            alert("Please Fill All Data");
        } else {
            const newId = data.length + 1;
            const newRow = { id: newId, ...newRowData };
            setData((prevData) => [...prevData, newRow]);
            setShowAddForm(false);
            setNewRowData({ text: "", date: "", amount: "" });
        }
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
                                    1- check box
                                    2- table data (Text) with px-2 class from Bootstrap
                                    3- table data (Date)
                                    4- table data (Text) with px-2 class from Bootstrap
                                    5- table data (Price) with px-3 class from Bootstrap
                                    6- Icon Edit With Class Pen Import From Font Awesome
                                    6- Icon Save With Class Save Import From Font Awesome
                                    6- Icon Trash With Class Trash Import From Font Awesome
                                    ! Every Element In Row Contain Containe can Show One Element From Two(Editing Input Filed Or Text)
                                */}
                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
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
                                        <label for="floatingInput">التاريخ</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            required
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="الملاحظات"
                                            value={newRowData.notes}
                                            onChange={(e) => handleAddFormChange(e, "date")}
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