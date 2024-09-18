type PropsTypes = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: PropsTypes) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
