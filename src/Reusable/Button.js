import React from "react";

function Button({ children, action, disabled, className }) {
  // <Button action={() => ()} disabled={false}></Button>
  // console.log("action", action, disabled);
  return (
    <button onClick={action} disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
