import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";

function PlanCard({ index, title, price, active, setActive, duration }) {
  const icons = [ArcadeIcon, AdvancedIcon, ProIcon];

  return (
    <div
      className={`plan-card ${title === active ? "active" : ""}`}
      onClick={() => setActive({ title, price })}
    >
      <img src={icons[index]} alt={title} className="plan-icon" />
      <div className="content">
        <p className="plan-title">{title}</p>
        <p className="plan-price">
          {duration === "Monthly" ? `$${price}/mo` : `$${price * 10}/yr`}
        </p>
        <p className="discount">
          {duration !== "Monthly" ? "2 months free" : ""}
        </p>
      </div>
    </div>
  );
}

export default PlanCard;
