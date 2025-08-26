import thankYouSvg from "../assets/icon-thank-you.svg";
import "./ThankYou.css";
function ThankYou() {
  return (
    <div className="ThankYou">
      <img src={thankYouSvg} alt="thank-you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have <br />
        fun using our platform. If you ever need support. please feel <br />
        free to emai us at support@loremgaming.com.
      </p>
    </div>
  );
}
export default ThankYou;
