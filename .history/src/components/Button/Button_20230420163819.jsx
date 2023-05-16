import "./Button.css";

const Button = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <button
        className="custom-button"
        onClick={() => {
          console.log("Button clicked!");
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
