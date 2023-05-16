import "./Button.css";

const Button = ({ title = "Default Title", children = "123", handleClick }) => {
  return (
    <>
      <button
        className="custom-button"
        onClick={() => {
          handleClick()
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
