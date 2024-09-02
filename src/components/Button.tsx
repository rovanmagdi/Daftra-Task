import "./style.css";
type IButton = {
  children: string;
};
const Button = ({ children }: IButton) => {
  return <div className="button"> {children}</div>;
};

export default Button;
