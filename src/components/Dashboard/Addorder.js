// Start Add Order Component
export default function Addorder() {
    return(
        <>  
            {/* Start Add Order Section */}
            <div className="add-order">
                {/* Import Container From Bootstrap */}
                <div className="container">
                    {/* Add Box Head For Title  Of The Box*/}
                    <div className="box-head">
                         {/* p -> For The Title */}
                        <p className="title">المنتجات التى تحتاج الى إعادة طلب</p>
                        <span>متبقى 4 من 5</span>
                    </div>
                    <div className="box-center">
                        <p>
                            <input type="checkbox" className="form-check-input"/>
                            <span>لبن</span>
                        </p>
                        <p>
                            <input type="checkbox"  className="form-check-input"/>
                            <span>زبادى</span>
                        </p>
                        <p>
                            <input type="checkbox"  className="form-check-input"/>
                            <span>تونة</span>
                        </p>
                        <p>
                            <input type="checkbox"  className="form-check-input"/>
                            <span>مايونيز</span>
                        </p>
                        <p>
                            <input type="checkbox"  className="form-check-input"/>
                            <span>صلصة</span>
                        </p>
                    </div>
                    <div className="box-bottom">
                        <form>
                            <input type="text" required class="form-control" id="floatingInput" placeholder="إضافة طلب جديد"/>
                            <input type="submit" value="إضافة طلب" className="submit-btn"/>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}