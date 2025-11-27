import "./ResultField.css"

type ResultFieldProps = {
    value: string;
}
export function ResultField({ value }: ResultFieldProps) {
    return (
        <div className="resultField-wrapper">
            <h2 className="result">{value}</h2>
        </div>
    );
}
