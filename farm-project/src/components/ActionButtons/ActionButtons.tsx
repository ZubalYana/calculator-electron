import React, { useState } from "react";
import { Delete } from "lucide-react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import "./ActionButtons.css"

export function ActionButtons() {
    const [x, setX] = useState("0");
    return (
        <div className="action-buttons-wrapper">
            <div className="action-buttons-row">
                <div className="action-button action-button-darker">%</div>
                <div className="action-button action-button-darker">CE</div>
                <div className="action-button action-button-darker">C</div>
                <div className="action-button action-button-darker"><Delete size={18} /></div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`\frac{1}{x}`}</InlineMath>
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`x^2`}</InlineMath>
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`\sqrt{x}`}</InlineMath>
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`\div`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter">
                    7
                </div>
                <div className="action-button action-button-lighter">
                    8
                </div>
                <div className="action-button action-button-lighter">
                    9
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`\times`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter">
                    4
                </div>
                <div className="action-button action-button-lighter">
                    5
                </div>
                <div className="action-button action-button-lighter">
                    6
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`-`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter">
                    1
                </div>
                <div className="action-button action-button-lighter">
                    2
                </div>
                <div className="action-button action-button-lighter">
                    3
                </div>
                <div className="action-button action-button-darker">
                    <InlineMath>{String.raw`+`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter">
                    +/-
                </div>
                <div className="action-button action-button-lighter">
                    0
                </div>
                <div className="action-button action-button-lighter">
                    ,
                </div>
                <div className="action-button action-button-pink">
                    <InlineMath>{String.raw`\boldsymbol{=}`}</InlineMath>
                </div>
            </div>
        </div>
    );
}