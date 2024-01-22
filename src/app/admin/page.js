// Import Style
import "@/components/Dashboard/style.css"
// Import Items From Components Folder -> Dashboard Folder 
//?-> Navbar.js File + Home.js File + Supplygraph.js File + Piechart.js File
//? -> Addorder.js File +
import Navbar from "@/components/Dashboard/Navbar"
import Home from "@/components/Dashboard/Home"
import Supplygraph from "@/components/Dashboard/Supplygraph"
import Piechart from "@/components/Dashboard/Piechart"
import Addorder from "@/components/Dashboard/Addorder"

// Start HomeAdmin Function
export default function HomeAdmin() {
    return (
        <>
        {/* Create Dive To Wrap Home Admin */}
        <div className='home-page-admin' dir="rtl">
            {/* Add Navbar Component */}
            <Navbar />
            <div className="admin-view-page">
                {/* Add (Home , Supplygraph) Component */}
                <Home />
                <Supplygraph />
                {/* Create Div To Wrap Pie Graph And Add Order */}
                <div className="box-item-chart-option">
                    <Piechart /> 
                    <Addorder /> 
                </div>
            </div>
        </div>
        </>
    )

}