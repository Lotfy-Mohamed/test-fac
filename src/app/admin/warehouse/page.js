//Import Link From Next/Link (Used For Routing)
import Link from "next/link"
//Import Image From Next/Image (Used For Image)
import Image from "next/image"
// Import Factory Logo
import FactoryLogo from "@/image/factory-logo.svg"
// Start WarahouseManag Function
export default function WarahouseManag() {
    // Return WarahouseManag Component
    // ? Container -> Wrap Box (To Wrap All Element In One Div)-> Item Head + Item Bottom
    // ? Item Head -> Wrap Logo Item + Phone Item
    // ? Item Bottom -> Wrap Box Items -> Item  (Link To Change Route And Show Table) (Every Item Container Different Link)-> Item Icon + Item Text
    return (
        <>
            <div className="ware-house">
                <div className="container">
                    <div className="wrap-box">
                        <div className="item-head">
                            <div className="item-back">
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
                        <div className="item-bottom">
                            <div className="box-items">
                                <Link href={"/"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الصرف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/suppliers"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>المجهزون</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                                <Link href={"/admin/warehouse/category"} className="item">
                                    <div className="item-icon">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="item-text">
                                        <p>الاصناف</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}