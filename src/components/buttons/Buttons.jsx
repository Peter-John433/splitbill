export default function Buttons({ children, buttonStyle, onClick }) {
  return (
    <>
      <button onClick={onClick} className={buttonStyle}>
        {children}
      </button>
    </>
  );
}
