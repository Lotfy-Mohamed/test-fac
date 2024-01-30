'use client'
import { useState } from "react"


export default function OrderProduct() {

    const [orderProduct, setOrderProduct] = useState([
        {   
            id : 1,
            order_name: "طلبية زبادى",
            sataus : "جارى التجهيز",
            date : "12 فبراير",
            hour : "8:30 AM",
            progress : "preparing",
        },
        {   
            id : 2,
            order_name: "طلبية البان",
            sataus : "فى الطريق",
            date : "12/5/2021",
            hour : "1:10 PM",
            progress : "onroad",

        },
        {   
            id : 3,
            order_name: "طلبية البان",
            sataus : "على وصول",
            date : "12/5/2021",
            hour : "12:30 AM",
            progress : "onarrival",
        },
        {   
            id :4,
            order_name: "طلبية البان",
            sataus : "وصل",
            date : "12/5/2021",
            hour : "2:15 PM",
            progress : "delivered",
        },
    ])

    return(
        <>
            <div className="order-product-page">
                <div className="title-page-product">
                    <h3>طلبيات العملاء الحالية</h3>
                </div>
                <div className="box-items-orders">
                    <div className="item-order">
                        {orderProduct.map((item) => (
                            <>
                                <div className="item">
                                    <div className="order-name">
                                        <p>{item.order_name}</p>
                                    </div>
                                    <div className="order-road">
                                        <p className="item-map"> 
                                            <span className={`circle-item ${item.progress == "delivered" ? "delivered" : ""}`}></span>
                                            <span className="text">وصل</span>
                                        </p>
                                        <p className="item-map"> 
                                            <span className={`circle-item ${item.progress == "onarrival" ? "onarrival" : ""}`}></span>
                                            <span>على وصل</span>
                                        </p>
                                        <p className="item-map"> 
                                            <span className={`circle-item ${item.progress == "onroad" ? "onroad" : ""}`}></span>
                                            <span>فى الطريق</span>
                                        </p>
                                        <p className="item-map"> 
                                            <span className={`circle-item ${item.progress == "preparing" ? "preparing" : ""}`}></span>
                                            <span>جارى التجهيز</span>
                                        </p>
                                    </div>
                                    <div className="order-date">
                                        <div className="date-box">
                                            <p className="date">{item.date}</p>
                                            <p className="hour">{item.hour}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}