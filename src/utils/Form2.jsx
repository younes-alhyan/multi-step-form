import PlanCard from "./PlanCard";

function Form2({ Plans, setPlans, durations, duration, setDuration }) {
  function handleToggle() {
    const index = duration === durations[0] ? 1 : 0;
    setDuration(durations[index]);
  }
  const setActivePlan = (title) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.title === title
          ? { ...plan, checked: true }
          : { ...plan, checked: false }
      )
    );
  };
  return (
    <div className="plans">
      <div className="cards">
        {Plans.map((plan, index) => (
          <PlanCard
            key={plan.title}
            index={index}
            title={plan.title}
            price={plan.price}
            checked={plan.checked}
            setActive={() => setActivePlan(plan.title)}
            duration={duration}
          />
        ))}
      </div>
      <div className="toggle-div">
        <p className={`duration ${duration === durations[0] ? "active" : ""}`}>
          {durations[0]}
        </p>
        <div
          className={`toggle-container ${
            duration === durations[1] ? "active" : ""
          }`}
          onClick={handleToggle}
        >
          <span className="thumbnail"></span>
        </div>
        <p className={`duration ${duration === durations[1] ? "active" : ""}`}>
          {durations[1]}
        </p>
      </div>
    </div>
  );
}

export default Form2;
