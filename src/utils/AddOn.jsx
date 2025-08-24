import checkmark from "../assets/icon-checkmark.svg";
function AddOn({ index, addOn, setAddOns, duration }) {
  const check = (i) => {
    setAddOns((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, checked: !item.checked } : item
      )
    );
  };
  return (
    <div
      className={`add-on ${addOn.checked ? "active" : ""}`}
      onClick={() => {
        check(index);
      }}
    >
      <div className="left">
        <div className={`checkbox ${addOn.checked ? "active" : ""}`}>
          {addOn.checked && <img src={checkmark}></img>}
        </div>
        <div className="content">
          <p className="title">{addOn.title}</p>
          <p className="description">{addOn.description}</p>
        </div>
      </div>
      <p className="price">
        {duration === "Monthly"
          ? `+$${addOn.price}/mo`
          : `+$${addOn.price * 10}/yr`}
      </p>
    </div>
  );
}
export default AddOn;
