import "./styles.css";

export default function App() {
  function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }

  return (
    <div>
      <Greeting name="Feline" />
    </div>
  );
}
