import React from "react";

function Button({ children, action, disabled }) {
  // <Button action={() => ()} disabled={false}></Button>
  // console.log("action", action, disabled);
  return (
    <button onClick={action} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
