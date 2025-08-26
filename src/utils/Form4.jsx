function Form4({ plans, duration, durations, addOns, setStep }) {
  const activePlan = plans.find((plan) => plan.checked);
  const activeAddOns = addOns.filter((addOn) => addOn.checked);
  const multiplayer = duration === durations[0] ? 1 : 10;
  const sign = duration === durations[0] ? "mo" : "yr";
  const totalPer = duration === durations[0] ? "month" : "year";

  const total =
    activePlan.price +
    activeAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  const changePlan = () => {
    setStep(2);
  };

  return (
    <div className="summary">
      <div className="input-summary">
        <div className="plan-summary">
          <div className="text">
            <p>{`${activePlan.title} (${duration})`}</p>
            <button className="change-plan" onClick={changePlan}>
              Change
            </button>
          </div>
          <p className="price">{`$${
            activePlan.price * multiplayer
          }/${sign}`}</p>
        </div>
        <div className="add-ons-summary">
          {activeAddOns.map((addOn) => (
            <div key={addOn.title} className="add-on-summary">
              <p className="title">{addOn.title}</p>
              <p className="price">{`+$${
                addOn.price * multiplayer
              }/${sign}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total-summary">
        <p className="text">{`Total (per ${totalPer})`}</p>
        <p className="total">{`$${total * multiplayer}/${sign}`}</p>
      </div>
    </div>
  );
}

export default Form4;
