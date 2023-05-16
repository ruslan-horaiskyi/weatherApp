import "./Button.css";

const Button = () => {
  return <button className="custom-button" onClick={() => {
    console.log('Button clicked');
  }}>Click me!</button>;
};

export default Button;
