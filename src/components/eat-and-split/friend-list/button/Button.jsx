export default function Button({ children, bg, color, width }) {
  return (
    <button style={{ backgroundColor: bg, color: color, width: Number(width) }}>
      {children}
    </button>
  );
}
