import { Delete } from "lucide-react";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import "./ActionButtons.css"

type ActionButtonsProps = {
    onPress: Function;
}
export function ActionButtons({ onPress }: ActionButtonsProps) {
    return (
        <div className="action-buttons-wrapper">
            <div className="action-buttons-row">
                <div className="action-button action-button-darker" onClick={() => onPress("%")}>%</div>
                <div className="action-button action-button-darker" onClick={() => onPress("CE")}>CE</div>
                <div className="action-button action-button-darker" onClick={() => onPress("C")}>C</div>
                <div className="action-button action-button-darker" onClick={() => onPress("Delete")}><Delete size={18} /></div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-darker" onClick={() => onPress("frac{1}{x}")}>
                    <InlineMath>{String.raw`\frac{1}{x}`}</InlineMath>
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("x^2")}>
                    <InlineMath>{String.raw`x^2`}</InlineMath>
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("sqrt{x}")}>
                    <InlineMath>{String.raw`\sqrt{x}`}</InlineMath>
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("÷")}>
                    <InlineMath>{String.raw`\div`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter" onClick={() => onPress("7")}>
                    7
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("8")}>
                    8
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("9")}>
                    9
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("×")}>
                    <InlineMath>{String.raw`\times`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter" onClick={() => onPress("4")}>
                    4
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("5")}>
                    5
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("6")}>
                    6
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("-")}>
                    <InlineMath>{String.raw`-`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter" onClick={() => onPress("1")}>
                    1
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("2")}>
                    2
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("3")}>
                    3
                </div>
                <div className="action-button action-button-darker" onClick={() => onPress("+")}>
                    <InlineMath>{String.raw`+`}</InlineMath>
                </div>
            </div>

            <div className="action-buttons-row">
                <div className="action-button action-button-lighter" onClick={() => onPress("+/-")}>
                    +/-
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress("0")}>
                    0
                </div>
                <div className="action-button action-button-lighter" onClick={() => onPress(",")}>
                    ,
                </div>
                <div className="action-button action-button-pink" onClick={() => onPress("=")}>
                    <InlineMath>{String.raw`\boldsymbol{=}`}</InlineMath>
                </div>
            </div>
        </div>
    );
}