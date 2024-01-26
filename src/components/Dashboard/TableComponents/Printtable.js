import { useState } from 'react';

export default function PrintComponent(props) {
    const { data_select_print, table_print , setShowPrint } = props;

    const [tableKeys, setTableKeys] = useState([]);

    const [run , setrun] = useState(true)

    if(run){
        data_select_print.forEach((item) => {
            setTableKeys(Object.keys(item));
        });
        setrun(false)
    }

    

    return (
        <>
            <div className="overlay"></div>
            <div className="print-component" dir='rtl'>
                <div className='print-table-section'>
                    <div className="col-12" >
                        <div className="card card-body">
                            <div className='close-box' onClick={() => setShowPrint(false)}>
                                <i className="fa-regular fa-rectangle-xmark"></i>
                            </div>
                            <div className="box-section">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    {table_print.map((item, index) => (
                                                        <th key={index}>{item.getAttribute('text')}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {getAttributes()} */}
                                                {data_select_print.map((row, rowIndex) => (
                                                    <tr key={rowIndex}>
                                                        {tableKeys.map((key, keyIndex) => (
                                                            row[key] != "id" ? <td key={keyIndex}>{row[key]}</td> : null
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="col-12">
                                    <button className="btn btn-primary print-button-table" onClick={() => window.print()}>
                                        Print
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
