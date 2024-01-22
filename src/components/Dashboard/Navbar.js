//import style

export default function Navbar() {
    return(
        <>
            {/* 
                !Start Navbar
                ? Contain:
                    row -> Import From Bootstrap
                        nav-admin-content-title -> Contain Nav Title
                        nav-admin-content-menu -> Contain Nav Menu (Ul -> li -> a) (10 Items)
                        title-box (The Title Of Bottom Two Item) (المساعدة والدعم)
                        nav-admin-content-bottom ( Contain Nav Menu (Ul -> li -> a) (Two Items)
            */}
            <div className="nav-admin">
                <div className="row">
                    <div className="col-12">
                        <div className="nav-admin-content">
                            <div className="nav-admin-content-title">
                                <h3>Dashboard</h3>
                            </div>
                            <div className="nav-admin-content-menu">
                                <ul>
                                    <li><a href="#">السيطرة النوعية</a></li>
                                    <li><a href="#">الشئون القانونية</a></li>
                                    <li><a href="#">الحسابات</a></li>
                                    <li><a href="#">إدارة المخازن</a></li>
                                    <li><a href="#">الأمن الصناعي</a></li>
                                    <li><a href="#">التقارير</a></li>
                                    <li><a href="#">التخطيط والمتابعة</a></li>
                                    <li><a href="#">الإنتاج</a></li>
                                    <li><a href="#">التجارية</a></li>
                                    <li><a href="#">OLAP</a></li>
                                </ul>
                            </div>
                            <div className="title-box">
                                <p>
                                    <span>المساعدة والدعم</span>
                                </p>
                            </div>
                            <div className="nav-admin-content-bottom">
                                <ul>
                                    <li><a href="#">المساعدة</a></li>
                                    <li><a href="#">الاعدادات</a></li>
                                    <li className="log-out"><a href="#">تسجيل الخروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}