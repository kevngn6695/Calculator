import "../assets/css/buttonbox.css";

function ButtonBox({ children, className }) {
  return <div className={className}>{children}</div>;
}
export default ButtonBox;
