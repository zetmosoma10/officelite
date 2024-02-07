import classnames from "classnames";

function Button({ children, className, size, color }) {
  const sizeClass = size && `btn-${size}`;
  const colorClass = color && `btn-${color}`;
  const allClasses = classnames(sizeClass, colorClass, className);

  return <button className={allClasses}>{children}</button>;
}

export default Button;
