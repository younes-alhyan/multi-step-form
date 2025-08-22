function Step({ step }) {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <>
      {steps.map((element, index) => (
        <div key={index + 1} className="Step-container">
          <div className={`icon ${index + 1 === step ? "active" : ""}`}>
            {index + 1}
          </div>
          <div className="text">
            <p className="header">STEP {index + 1}</p>
            <p className="description">{element}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Step;
