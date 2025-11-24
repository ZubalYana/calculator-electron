import React from "react";
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
                <ArrowUpRight />
            </div>
            <div className="right-side">
                <ClockFading />
            </div>
        </div>
    );
}
