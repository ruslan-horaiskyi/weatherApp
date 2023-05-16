const Input = ({ id, type = "number", children, readOnly = false }) => {
  return (
      <div className="input_div">
        <label for={id}>{children}</label>
        <input id={id} type={type} readOnly={readOnly}/>
      </div>
  );
};

export default Input;
