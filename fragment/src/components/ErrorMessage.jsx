export default function ErrorMessage({ items }) {
//   let foodItems = ["Sprouts", "Chappati", "Milk", "Pulses"];

  return <>{items.length === 0 && <h3>I am hungry </h3>}</>;
}
