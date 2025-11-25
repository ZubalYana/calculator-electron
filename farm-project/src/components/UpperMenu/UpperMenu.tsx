import "./UpperMenu.css"
import { ArrowUpRight, ClockFading } from "lucide-react"
export function UpperMenu() {

    return (
        <div className="upperMenu-wrapper">
            <div className="left-side">
                <div className="burger">
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
                <h3>Standart</h3>
                <ArrowUpRight className="icon" />
            </div>
            <div className="right-side">
                <ClockFading size={22} className="icon" />
            </div>
        </div>
    );
}
