import AddOn from "./AddOn";

function Form3({ addOns, setAddOns, duration }) {
  return (
    <div className="add-ons">
      {addOns.map((addOn, index) => (
        <AddOn
          key={index}
          index={index}
          addOn={addOn}
          setAddOns={setAddOns}
          duration={duration}
        />
      ))}
    </div>
  );
}

export default Form3;
