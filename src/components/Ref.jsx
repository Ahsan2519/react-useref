import React, { useEffect, useRef } from "react";

const Ref = ({ clickHandler }) => {
  const inputRef = useRef(null);
  console.log("ref-components");

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
      </div>
    </>
  );
};

export default Ref;
