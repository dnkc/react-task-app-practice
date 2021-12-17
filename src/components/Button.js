const Button = ({ color, text, onClick }) => {
  // const handleClick = (e) => {
  //   console.log("clicked");
  // };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
