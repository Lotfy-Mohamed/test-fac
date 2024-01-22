//Import Image From Next
import Image from 'next/image'
// Import Userb Image From Image Folder
import UserImage from '../../image/user.svg'
// Start Function AdminAcount
export default function AdminAcount() {
    return (
        <>

        <div className='admin-acount'>
            {/* Import Container From Bootstrap */}
            <div className="container">
                {/* Create Head Page */}
                <div className="head-page">
                    {/* 
                        Right Content:
                            containe: notification Ball, search-bar
                        Acount Data:
                            containe: Nmae Of Admin, Image Of Admin
                    */}
                    <div className='right-content'>
                        <div className="notification">
                            <span className="count">3</span>
                            <span className="icon"><i class="fa-regular fa-bell"></i></span>
                        </div>
                        <div className="search-bar">
                        <div class="form-floating search-box">
                            <input type="text" class="form-control" id="floatingInput" placeholder="ابحث هنا" />
                            <label for="floatingInput">ابحث هنا</label>
                        </div>
                        </div>
                    </div>
                    <div className="acount-data">
                        <div className="name-text">
                            <p className="name">محمد احمد عبدالفتاح</p>
                            <p className="text">ادمن</p>
                        </div>
                        <div className="user-image">
                            <Image src={UserImage} alt={"Imgae Admin"}/>
                        </div>
                    </div>
                </div>
                {/* Create Items Box */}
                {/* 
                    ? Items Box:
                        Item Reapet 4 Times (Different Data) , (Arrow Icon) , (Icon Left)
                        item:
                            containe: item-head, item-bottom
                                iteam-head: containe: right, left
                                    right -> containe: p, p (العملاء, 5,256) other
                                    left -> containe: icon (fa-solid fa-users) From Fontawesome
                        item-bottom:
                            containe: arrow-icon, text 
                            arrow-icon:
                                containe: increment, decrement
                            Text: (منذ الأسبوع الماضي)
                */}
                <div className='items-box'>
                    <div className='item'>
                        <div className='item-head'>
                            <div className='right'>
                                <p>العملاء</p>
                                <p>5,256</p>
                            </div>
                            <div className='left'>
                                <i class="fa-solid fa-users"></i>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>
                                <span className='arrow-icon increment'>
                                    <i class="fa-solid fa-arrow-up"></i>
                                    <span className='num'>6,5%+</span>
                                </span>
                                <span className='text'>منذ الأسبوع الماضي</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-head'>
                            <div className='right'>
                                <p>العائد</p>
                                <p>$5.0551</p>
                            </div>
                            <div className='left'>
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>
                                <span className='arrow-icon decrement'>
                                    <i class="fa-solid fa-arrow-down"></i>
                                    <span className='num'>6,5%-</span>
                                </span>
                                <span className='text'>منذ الأسبوع الماضي</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-head'>
                            <div className='right'>
                                <p>الارباح</p>
                                <p>%50</p>
                            </div>
                            <div className='left'>
                                <i class="fa-solid fa-arrow-trend-up"></i>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>
                                <span className='arrow-icon decrement'>
                                    <i class="fa-solid fa-arrow-down"></i>
                                    <span className='num'>6,5%-</span>
                                </span>
                                <span className='text'>منذ الأسبوع الماضي</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-head'>
                            <div className='right'>
                                <p>الفواتير</p>
                                <p>5,256</p>
                            </div>
                            <div className='left'>
                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                        </div>
                        <div className='item-bottom'>
                            <p>
                                <span className='arrow-icon increment'>
                                    <i class="fa-solid fa-arrow-up"></i>
                                    <span className='num'>6,5%+</span>
                                </span>
                                <span className='text'>منذ الأسبوع الماضي</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}