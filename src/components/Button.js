import "./Button.css";

const Button = ({symbol,color, white, handleClick})  =>{
    return<div 
        onClick={()=> handleClick(symbol)} 
        className="button-wrapper" 
        style={{backgroundColor:color,color:white}}>
        {symbol}
        </div>
}

export default Button;