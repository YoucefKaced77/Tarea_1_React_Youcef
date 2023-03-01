import "./Button.css"

function Button(props) {
    const { id, activeButton, onClick, children } = props;
  
    return (
      <button
        onClick={() => onClick(id)}
        className={id === activeButton ? 'active' : ''}
      >
        {children}
      </button>  
    );
}  

export default Button