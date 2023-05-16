const Input = ({ id, type = "number", labelText }) => {
  return (
    <>
      <label for={id}>{labelText}</label>
      <input id={id} type={type} />
    </>
  );
};

export default Input;
