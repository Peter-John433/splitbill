export default function Buttons({ children, buttonStyle }) {
  return (
    <>
      <button className={buttonStyle}>{children}</button>
    </>
  );
}
