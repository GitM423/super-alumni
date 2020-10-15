const Button = () => {
    return (
      <div>
        <input className="btn" type="submit" value="Submit"></input>
        <style jsx>{`
         .btn {
            color: red;
          }
        `}</style>
      </div>
    );
  };
  
  export default Button;