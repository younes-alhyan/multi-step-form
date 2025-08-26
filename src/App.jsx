import { useState } from "react";
import Bar from "./components/Bar";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <Bar step={step} />
      {step <= 4 ? <Form step={step} setStep={setStep} /> : <ThankYou />}
    </div>
  );
}

export default App;
