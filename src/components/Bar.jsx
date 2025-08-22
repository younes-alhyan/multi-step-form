import ResponsiveImage from "../utils/ResponsiveImage";
import Steps from "../utils/Steps";
import "./Bar.css";
function Bar({ step }) {
  return (
    <div className="Bar">
      <ResponsiveImage
        sources={["bg-sidebar-mobile.svg", "bg-sidebar-desktop.svg"]}
      ></ResponsiveImage>
      <div className="steps">
        <Steps step={step}></Steps>
      </div>
    </div>
  );
}

export default Bar;
