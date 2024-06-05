export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  }
  const totalNumber = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalNumber / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${items.length} items on your list, and you already packed
        ${totalNumber} (${percentage}%)`}
      </em>
    </footer>
  );
}
