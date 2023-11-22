import "./App.css";
import HigherOrderFn from "./HigherOrderFn/HigherOrderFn";
import Closurse from "./Closurse/Closurse";
import UseCallbacksHooks from "./UsecallbacksHook/UseCallbacks";
import UseMemoHooks from "./UseMemoHooks/UseMemo";
import UseEffectsHooks from "./UseEffectsHooks/UseEffects";
// import Context from "./Context/Context";
// import ComponentA from "./Context/ComponentA";
import Custom from "./Custom/Custom";

function App() {
  return (
    <div className="App">
      <HigherOrderFn />
      <Closurse />
      <UseCallbacksHooks />
      <UseMemoHooks />
      <UseEffectsHooks />
      {/* <Context>
        <ComponentA />
      <Context/>  */}
      <Custom />
    </div>
  );
}

export default App;
