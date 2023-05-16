import "./Button.css";

const Button = ({ title }) => {
  return <button className="custom-button" onClick={() => {
    console.log('Button clicked!');
  }}>{title}</button>;
};

export default Button;
