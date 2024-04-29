import React, { useState } from "react";
import style from "./LessText.module.css";

const LessText = (props) => {
  let [showLess, setShowLess] = useState(true);
  const text = props.text;
  let max = props.max;
  if (max === undefined) {
    max = 78;
  }
  if (text.length <= max) {
    return <div>{text}</div>;
  }

  return (
    <>
      <div>
        {showLess ? `${text.substring(0, max)} ...` : text}

        <button
          className={style.btn}
          onClick={(e) => {
            setShowLess(!showLess);
          }}
        >
          {showLess ? "more" : "less"}
        </button>
      </div>
    </>
  );
};

export default LessText;
