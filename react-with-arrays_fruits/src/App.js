import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1339,
      name: "🍑 Peach",
      color: "orange",
    },
    {
      id: 1340,
      name: "🫐 Blueberry",
      color: "blue",
    },
    {
      id: 1337,
      name: "🥑 Avocado",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruits.name} />
      ))}
    </div>
  );
}
