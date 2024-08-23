const SizeBox = ({ size,onClick }) => {
    return (
      <span className="me-1 text-uppercase border py-1 px-2" role="button" onClick={onClick}>
        {size}
      </span>
    );
  };
  
  export default SizeBox;