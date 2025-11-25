import { useState } from "react";
import "./ResultField.css"
export function ResultField() {
    const [result, setResult] = useState(0);
    return (
        <div className="resultField-wrapper">
            <h2 className="result">{result}</h2>
        </div>
    );
}
