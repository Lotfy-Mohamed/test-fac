//Import Tag Image From Image Next
import Image from "next/image"
//Import 
// ?(Fcatory Logo , Decore Image , Code Background and Man Image)
//!From image folder
import Factory from "../../image/factory-logo.svg"
import Decore from "../../image/Decore.svg"
import Code from "../../image/code-back.svg"
import ManImage from "../../image/anyrgb.svg"

//Start Header Function
export default function Header() {

    return (
        <>
        {/* StarT Header */}
            <div className='header'>
                {/*  */}
                <div className="header-top-back">
                    <Image src={Decore} alt="Decore" />
                </div>
                <div className="header-top-bottom">
                    <Image src={Code} alt="Code Background" />
                </div>
                {/* 
                    Import Nav Bar From Bootstrap
                    ? Contain: 
                    1 - Logo (Factory) in -> navbar-logo
                */}
                <nav className="navbar navbar-expand-lg rtl" dir="rtl">
                    <div className="container-fluid">
                        <a className="navbar-logo" href="#">
                            <div className="logo-fectory">
                                <Image
                                    src={Factory}
                                    alt="Factory Logo"
                                    />
                            </div>
                        </a>
                        {/* 2- button to open menu in -> navbar-toggler 
                            !Show in mobile only */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* !3- menu in -> navbar-collapse */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">الصفحة الرئيسية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">من نحن</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">خدمتنا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">تواصل معنا</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">السعر</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                            {/* !4- Search in -> input-box */}
                            <form className="d-flex" role="search">
                                <div class=" input-box">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="email" class="form-control" placeholder="ابحث هنا" />
                                </div>
                                <span className="phone-box">
                                    <span className="text">0100 000 0000</span>
                                    <i class="fa-solid fa-phone-volume"></i>                                </span>
                            </form>
                            <div className="phone-box">
                            </div>
                        </div>
                    </div>
                </nav>
                {/* 
                    5 - Header Content in -> header-content
                    !Contain:
                    1 - Title in -> content
                        ? 1- h1
                        ? 2- p
                        ? 3- button
                    2 - Image in -> Image man 
                */}
                <section className="header-content">
                    <div className="content">
                        <h1>code click</h1>
                        <p>
                            تواصل معنا لبدء رحلة التحول الرقمي الخاصة بك.
                        </p>
                        <button className="btn">تواصل معنا</button>
                    </div>
                    <div className="image-man">
                        <Image src={ManImage} alt="Decore" />
                    </div>
                </section>
            </div>
        </>
    )

}