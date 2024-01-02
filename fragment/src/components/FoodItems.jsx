import Item from "./Item";

export default function FoodItems({ items }) {
  // let foodItems = ["Sprouts", "Chappati", "Milk", "Pulses"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
}
