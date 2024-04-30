import React from "react";
import UseMemoExample from "./components/useMemo/UseMemoExample";
// import CustomHook2 from "./components/customHook-2/CustomHook2";
// import UseCallbackExample from "./components/useCallback/UseCallbackExample";
// import CustomComponents from "./components/customHook-1/CustomComponents";

const App = () => {
  return (
    <div className="container">
      <div className="mt-5">
        {/* <CustomComponents /> */}
        {/* <CustomHook2 /> */}
        {/* <UseCallbackExample/> */}
        <UseMemoExample />
      </div>
    </div>
  );
};

export default App;
