import "./Button.css";

const Button = ({ title = "Default Title", children = "123" }) => {
  return (
    <>
      <button
        className="custom-button"
        // onClick={() => {
          // console.log("Button clicked!");
        // }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
