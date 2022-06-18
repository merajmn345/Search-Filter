import React, { useState } from "react";
import Data from "./Data";

function App() {
  const [text, setText] = useState("");

  const handler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={text} onInput={handler} />
      <div>
        {Data.filter((val) => {
          if (text == "") {
            return val;
          } else if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
            return val;
          }
        }).map((entry) => {
          return <h4>{entry.name}</h4>;
        })}
      </div>
    </>
  );
}
export default App;
