const Input = ({ id, type = 'number', }) => {
  return (
    <>
      <label></label>
      <input id={id} type={type} />
    </>
  );
};

export default Input;
