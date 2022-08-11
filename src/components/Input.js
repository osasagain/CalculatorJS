import "./Input.css"

const Input = ({text, result})=>{
    return<div className="input-wrapper">
        <div className="result">
            <h1>{text}</h1>
        </div>
        <div className="text">
            <h3>{result}</h3>
        </div>
    </div>
}

export default Input;