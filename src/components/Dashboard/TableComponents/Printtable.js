

export default function PrintComponent(props) {
    console.log(props)

    const {data_select_print} = props

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Unit</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{data_select_print.name}</td>
                                                    <td>{data_select_print.price}</td>
                                                    <td>{data_select_print.quantity}</td>
                                                    <td>{data_select_print.unit}</td>
                                                    <td>{data_select_print.category}</td>
                                                    <td>{data_select_print.description}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn btn-primary" onClick={() => window.print()}>Print</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}