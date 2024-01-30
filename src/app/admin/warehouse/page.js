'use client'
//Import Link From Next/Link (Used For Routing)
import Link from "next/link"
//Import Image From Next/Image (Used For Image)
import Image from "next/image"
// Import Factory Logo
import FactoryLogo from "@/image/factory-logo.svg"
// Import UseState Hook (Used For State)
import { useState } from "react"
// Start WarahouseManag Function

export default function WarahouseManag() {
    // Return WarahouseManag Component
    //? Container -> Wrap Box (To Wrap All Element In One Div)-> Item Head + Item Bottom
    //? Item Head -> Wrap Logo Item + Phone Item
    //? Add Box Item Warehouse (To Add New Item) -> Wrap Box Items -> Item
    //? Item Bottom -> Wrap Box Items -> Item  (Link To Change Route And Show Table) 
    //? (Every Item Container Different Link)-> Item Icon + Item Text + Edit Section (Edit + Delete)

    // Add Data To Array (Random Data For Test)
    //? Data -> Array Of Object (Every Object Contain Id + Text + Path)
    // The Data Array Is The Main Array That Will Be Used To Render The Items
    // Render The Items By Mapping The Data Array
    const [data, setData] = useState([
        { id: 1, text: "الالبان", path: "admin" },
        { id: 2, text: "البقوليات1", path: "admin" },
        { id: 3, text: "البقوليات3", path: "admin" },
        { id: 4, text: "البقوليات4", path: "admin" },
        { id: 5, text: "البقوليات5", path: "admin" },
        { id: 6, text: "البقوليات6", path: "admin" },
        { id: 7, text: "البقوليات7", path: "admin" },
        { id: 8, text: "البقوليات8", path: "admin" },
        { id: 9, text: "البقوليات9", path: "admin" },
        { id: 10, text: "البقوليات10", path: "admin" },
    ])

    // The editedItem state will be used to store the item that is being edited
    const [editedItem, setEditedItem] = useState({
        id: null,
        text: "",
        path: "",
    });

    // The addItem state will be used to store the new item that is being added
    const [addItem, setAddItem] = useState({
        id: null,
        text: "",
        path: "",
    });

    // Function To Go Back (Previous Page In History)
    const handlefunction_Go_Back = () => {
        window.history.back();
    }

    // Function To Delete Item (Filter The Data Array When Click On Delete Button Take Id And Filter The Data Array) 
    // And Get The Spacific Item And Delete It
    const handleDleteItem = (id) => {
        console.log(id);
        const newData = data.filter((ele) => ele.id !== id)
        setData(newData)
    }

    const handleEdit = (id) => {
        // Find the item to be edited
        const itemToEdit = data.find((item) => item.id === id);
        // Set the edited item in the state
        setEditedItem(itemToEdit);
    };

    // Function To Save Edit (Find The Index Of The Edited Item And Update The Data Array With The Edited Item)
    const handleSaveEdit = () => {
        // Find the index of the edited item
        const index = data.findIndex((item) => item.id === editedItem.id);

        // Update the data array with the edited item
        setData((prevData) => {
            const newData = [...prevData];
            newData[index] = editedItem;
            return newData;
        });

        // Reset the edited item state
        setEditedItem({
            id: null,
            text: "",
            path: "",
        });
    };

    // Function To Cancel Edit (Reset The Edited Item State)
    const handleCancelEdit = () => {
        // Reset the edited item state
        setEditedItem({
            id: null,
            text: "",
        });
    };

    // Function To Add New Item (Set The New Item In The State)
    const handleAddItem = () => {
        const newItem = {
            id: data.length + 1,
            text: "", // Initialize text with an empty string
            path: "",
        };

        // Set the new item in the state
        setAddItem(newItem);
    };

    // Function To Save New Item (Add The New Item To The Data Array And Reset The AddItem State)
    const handleSaveNewItem = () => {
        // Add the new item to the data array
        setData((prevData) => [...prevData, addItem]);

        console.log(addItem)

        // Reset the addItem state
        setAddItem({
            id: null,
            text: "",
            path: "",
        });
    };

    // Return The Component (WarahouseManag)
    return (
        <>
            <div className="ware-house" dir="rtl">
                <div className="container">
                    <div className="wrap-box">
                        <div className="item-head">
                            <div className="item-back" onClick={() => handlefunction_Go_Back()}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="logo-item">
                                <Image src={FactoryLogo} alt="Factory Logo" />
                            </div>
                            <div className="phone-item">
                                <Link href="tel:0123456789" className="link-phone">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <span>1285128664546</span>
                                </Link>
                            </div>
                        </div>
                        <div className="add-box-item-warehouse" onClick={() => handleAddItem()}>
                            <p>إضافة قسم جديد</p>
                        </div>
                        <div className="item-bottom">
                            <div className="box-items">
                                {data.map((ele) => 
                                // Map The Data Array And Return The Items
                                // Every Item Contain Link (To Change Route And Show Table)
                                // Every Item Contain Icon (Show Top-Left) + Text + Edit Section (Edit + Delete)
                                (
                                    <div className="item" key={ele.id}>
                                        <Link href={`/${ele.path}`} className="item-link-path">
                                            <div className="item-icon">
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </div>
                                            <div className="item-text">
                                                <p>{ele.text}</p>
                                            </div>
                                        </Link>
                                        <div className="edite-section">
                                            <p className="edite" onClick={() => handleEdit(ele.id)}>
                                                <i className="fa-solid fa-edit"></i>
                                            </p>
                                            <p className="delete" onClick={(e) => handleDleteItem(ele.id)}>
                                                <i className="fa-regular fa-trash-can"></i>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Display the edit form if an item is being edited 
                    The Edit From Contain Two Input (Text + Path) And Two Button (Save + Cancel)
                    First Input (Text) To Edit The Text Of The Old Item
                    Second Input (Path) To Edit The Path Of The Old Item
                    First Button (Save) To Save The Change Item
                    Second Button (Cancel) To Cancel The Change Item 
                */}
                {editedItem.id !== null && (
                    <>
                        <div className="overlay"></div>
                        <div className="edit-form-warehouse">
                            <div className="box-item">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput"
                                        // value={editedItem.text}
                                        onChange={(e) =>
                                            setEditedItem({ ...editedItem, text: e.target.value })
                                        }
                                    />
                                    <label for="floatingInput">العنوان</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput"
                                        // value={editedItem.text}
                                        onChange={(e) =>
                                            setEditedItem({ ...editedItem, path: `${e.target.value}` })
                                        }
                                    />
                                    <label for="floatingInput">الرابط</label>
                                </div>
                                <div className="btn-groub">
                                    <button className="btn btn-outline-primary" onClick={handleSaveEdit}>Save</button>
                                    <button className="btn btn-outline-danger" onClick={handleCancelEdit}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/* Display the add form if a new item is being added 
                    The Add From Contain Two Input (Text + Path) And Two Button (Save + Cancel)
                    First Input (Text) To Add The Text Of The New Item
                    Second Input (Path) To Add The Path Of The New Item
                    First Button (Save) To Save The New Item
                    Second Button (Cancel) To Cancel The New Item
                */}
                {addItem.id !== null && (
                    <>
                        <div className="overlay"></div>
                        <div className="edit-form-warehouse">
                            <div className="box-item">
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={addItem.text}
                                        placeholder="Add new item"
                                        onChange={(e) =>
                                            setAddItem({ ...addItem, text: e.target.value })
                                        }
                                    />
                                    <label for="floatingInput">العنوان</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={addItem.path}
                                        placeholder="Add new item"
                                        onChange={(e) =>
                                            setAddItem({ ...addItem, path: `${e.target.value}` })
                                        }
                                    />
                                    <label for="floatingInput">الرابط</label>
                                </div>
                                <div className="btn-groub">
                                    <button className="btn btn-outline-primary" onClick={handleSaveNewItem}>Save</button>
                                    <button className="btn btn-outline-danger"
                                        onClick={() => setAddItem({ id: null, text: "" })}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}