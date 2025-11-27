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
        if (!isNaN(Number(value))) {
            if (display === "0" || shouldReset) {
                setDisplay(value);
                setShouldReset(false);
            } else {
                setDisplay(display + value);
            }
            return;
        }

        if (["+", "-", "×", "÷"].includes(value)) {
            setOperand1(parseFloat(display));
            setOperator(value);
            setShouldReset(true);
            return;
        }

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