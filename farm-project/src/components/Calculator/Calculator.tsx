import { useState } from "react";
import "./Calculator.css";
import { UpperMenu } from "../UpperMenu/UpperMenu";
import { ResultField } from "../ResultField/ResultField";
import { ActionButtons } from "../ActionButtons/ActionButtons";

export default function Calculator() {
    const [display, setDisplay] = useState<string>("0");
    const [operand1, setOperand1] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [shouldReset, setShouldReset] = useState<boolean>(false);

    const handlePress = (value: string) => {

        //inputing a number
        if (!isNaN(Number(value))) {
            if (display === "0" || shouldReset) {
                setDisplay(value);
                setShouldReset(false);
            } else {
                setDisplay(display + value);
            }
            return;
        }

        //decimal point 
        if (value === ",") {
            if (!display.includes(".")) {
                setDisplay(display + ".")
            }
            return;
        }

        //cleaning functions
        if (value === "C") {
            setDisplay("0");
            setOperand1(null);
            setOperator(null);
            setShouldReset(false);
            return;
        }
        if (value === "CE") {
            setDisplay("0");
            return;
        }
        if (value === "Delete") {
            setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
            return;
        }

        //unary operations 
        const current = parseFloat(display);

        if (value === "+/-") {
            setDisplay(String(-current));
            return;
        }
        if (value === "x^2") {
            setDisplay(String(current * current));
            return;
        }
        if (value === "sqrt{x}") {
            setDisplay(String(Math.sqrt(current)));
            return;
        }
        if (value === "frac{1}{x}") {
            if (current != 0) {
                setDisplay(String(1 / current));
                return;
            }
        }
        if (value === "%") {
            setDisplay(String(current / 100));
            return;
        }

        //binary operations
        if (["+", "-", "×", "÷"].includes(value)) {
            setOperand1(parseFloat(display));
            setOperator(value);
            setShouldReset(true);
            return;
        }

        //equal
        if (value === "=") {
            if (operator && operand1 !== null) {
                const num2 = parseFloat(display);
                let result = 0;

                switch (operator) {
                    case "+": result = operand1 + num2; break;
                    case "-": result = operand1 - num2; break;
                    case "×": result = operand1 * num2; break;
                    case "÷": result = operand1 / num2; break;
                }

                setDisplay(String(result));
                setOperand1(null);
                setOperator(null);
            }
        }
    }

    return (
        <div className="calculator">
            <UpperMenu />
            <ResultField value={display} />
            <ActionButtons onPress={handlePress} />
        </div>
    )
}