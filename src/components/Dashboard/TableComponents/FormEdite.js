//? -----Edit Function-----
// Function : this is the form that will be shown when the user click on the edit button in the table
//? -------Take-------
// structureRow : the structure of the row that will be edited
// tableHead : the head of the table
// dataWillChange : the data that will be changed (the data of the row that will be edited)
// showEdit : the state that will be changed to show the form
// setShowEdit : the function that will change the state of showEdit (To Close The Edit Component)
//? -------Give-------
// setShowEdit : Set To False To Close The Edit Component
// setDataWillChange : Set To Null To Close The Edit Component
// setNewItem : Set The New Item To The Table (With The New Data If Any Field UN Changed It Will Be The Same As The Old Data)
import React, { useEffect, useState } from 'react'
export default function Editrowtable(props) {

    const { structureRow, tableHead, dataWillChange, showEdit, setShowEdit } = props

    const [newRowData, setNewRowData] = useState(structureRow || null)

    const [currentId, setCurrentId] = useState(null)

    const [showAlrt, setShowAlert] = useState(false)


    const SudmitData = () => {
        dataWillChange.map((item) => setCurrentId(item.id))
        const id = dataWillChange.map((item) => item.id);
        const newRow = { ...newRowData, id: id[0] };
        props.setDataWillChange(null);

        let prevData = dataWillChange[0];
        for(let i = 0; i < Object.keys(dataWillChange[0]).length; i++) {
            tableHead.forEach(element => {
                if(newRow[element.getAttribute("value")] == "") {
                    newRow[element.getAttribute("value")] = prevData[element.getAttribute("value")]
                }
            });
        }
        props.setNewItem(newRow)
        setNewRowData(structureRow);
        setShowEdit(false)
    }

    const handleEditSubmit = () => {

        var valied = true;
        tableHead.forEach(element => {
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
        } else {
            SudmitData();
        }
    };

    const handleAddFormChange = (e, field) => {
        setNewRowData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

    const handleFormClose = () => {
        props.setDataWillChange(null);
    }


    return (
        <>
            {showAlrt ? <div className="alert alert-danger order-alrt" role="alert">
                الحقول الفارغه لن يتم تعديل بياناتها
            </div> : null}
            {showEdit ?
                <div className='add-item-form order-manage'>
                    <div className='table-edit' dir='rtl'>
                        <table className='table table-striped table-hover table-edit-page-only'>
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
                    </div>
                    <div className="box-item">
                        <div className="close-from" onClick={() => handleFormClose() & setShowEdit(false)}>
                            <p>
                                <i className="fa-solid fa-xmark"></i>
                            </p>
                        </div>
                    </div>
                    <div className='form-add'>
                        <form>
                            {dataWillChange ? dataWillChange.map((item, index) =>
                                tableHead.map((ele, index) => (
                                    <>
                                        <p className='text-show-old-data alert alert-primary text-end'>سابقا :<span>{item[ele.getAttribute("value")]}</span></p>
                                        <div className='form-floating' key={index}>
                                            
                                            <input
                                                value={ele.getAttribute("value") == "id" ? item[ele.getAttribute("value")] : undefined}
                                                type={ele.getAttribute("type")}
                                                disabled={ele.getAttribute("value") == "id" ? true : false}
                                                class="form-control" id="floatingInput" placeholder={ele.getAttribute("text")}
                                                onChange={(e) => { handleAddFormChange(e, ele.getAttribute("value")) }}
                                            />
                                            <label for="floatingInput">{ele.getAttribute("text")}</label>
                                        </div>
                                    </>
                                ))
                            ) : null}
                            <button className='btn' type="button" onClick={handleEditSubmit}>
                                تعديل
                            </button>
                        </form>
                    </div>
                </div>
                : null}
        </>
    )
}

