export const Counter = () => {
  const [counter, setcounter] = useState(initialState)
  return <div>{counter}</div>;
}