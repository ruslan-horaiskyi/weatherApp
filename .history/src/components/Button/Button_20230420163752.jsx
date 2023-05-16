import "./Button.css";

const Button = ({ title, children }) => {
  return <button className="custom-button" onClick={() => {
    console.log('Button clicked!');
  }}>{children}</button>;
};

export default Button;
