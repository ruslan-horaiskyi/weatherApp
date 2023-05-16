import "./Button.css";

const Button = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h1>
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
