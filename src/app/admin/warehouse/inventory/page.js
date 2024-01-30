import Home from "@/components/Dashboard/Inventory-Manag/Home";
import OrderProduct from "@/components/Dashboard/Inventory-Manag/Order-Product";
import BarGraph from "@/components/Dashboard/Inventory-Manag/BarGraph";

import Image from "next/image";

import Box from "@/image/box.svg";


export default function Inventory() {
    return (
        <div className="inventory-page">
            <OrderProduct />
            <div className="home-container-main">
                <Home />
                <BarGraph />
                <div className="bottom-box">
                    <div className="box-items">
                        <div className="box-item-right">
                            <div className="title">
                                <p>المنتجات التي اوشكت علي الانتهاء</p>
                            </div>
                            <div className="item">
                                <div className="right">
                                    <div className="image">
                                        <Image src={Box} alt="Image Box" />
                                    </div>
                                    <div className="text">
                                        <p>اسم المنتج</p>
                                    </div>
                                </div>
                                <div className="left">
                                    <div className="content">
                                    <p>
                                    <span>المتبقي</span>
                                    <span>50 كيلو</span>
                                </p>
                                <p>
                                    <span>الاجمالي</span>
                                    <span>200 كيلو</span>
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-item-left">
                            <div className="title">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}