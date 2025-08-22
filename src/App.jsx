import { useState } from "react";
import Bar from "./components/Bar";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <Bar step={step}></Bar>
      <Form step={step} setStep={setStep}></Form>
    </div>
  );
}

export default App;
