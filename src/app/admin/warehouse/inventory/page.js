import Home from "@/components/Dashboard/Inventory-Manag/Home";
import OrderProduct from "@/components/Dashboard/Inventory-Manag/Order-Product";

export default function Inventory() {
    return (
        <div className="inventory-page">
            <OrderProduct />
            <Home />
        </div>
    )
}