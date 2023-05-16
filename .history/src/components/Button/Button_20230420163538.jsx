import "./Button.css";

const Button = () => {
  return <button className="custom-button" onClick={() => {
    console.log(123);
  }}>Click me!</button>;
};

export default Button;
