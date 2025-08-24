import { useState } from "react";
import Input from "../utils/Input";
import PlanCard from "../utils/PlanCard";
import AddOn from "../utils/AddOn";
import "./Form.css";

function Form1({
  name,
  setName,
  nameError,
  setNameError,
  email,
  setEmail,
  emailError,
  setEmailError,
  phone,
  setPhone,
  phoneError,
  setPhoneError,
}) {
  const inputs = [
    {
      id: "name",
      label: "Name",
      placeholder: "e.g. Stephen King",
      value: name,
      setValue: setName,
      error: nameError,
      setError: setNameError,
      validator: (val) => val.trim() !== "",
      errorMessage: "Name is required",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      value: email,
      setValue: setEmail,
      error: emailError,
      setError: setEmailError,
      validator: (val) => /^\S+@\S+\.\S+$/.test(val),
      errorMessage: "Invalid email",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      value: phone,
      setValue: setPhone,
      error: phoneError,
      setError: setPhoneError,
      validator: (val) => val.trim() !== "",
      errorMessage: "Phone is required",
    },
  ];

  return (
    <div className="inputs">
      {inputs.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          value={input.value}
          setValue={input.setValue}
          error={input.error}
        />
      ))}
    </div>
  );
}
function Form2({ activePlan, setActivePlan, duration, setDuration, Plans }) {
  const durations = ["Monthly", "Yearly"];
  function handleToggle() {
    const index = duration === durations[0] ? 1 : 0;
    setDuration(durations[index]);
  }
  return (
    <div className="plans">
      <div className="cards">
        {Plans.map((plan, index) => (
          <PlanCard
            key={plan.title}
            index={index}
            title={plan.title}
            price={plan.price}
            active={activePlan}
            setActive={setActivePlan}
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
function Form({ step, setStep }) {
  // Form 1
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateForm1 = () => {
    let valid = true;

    if (!name || name.trim() === "") {
      setNameError("Name is required");
      valid = false;
    } else setNameError("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email");
      valid = false;
    } else setEmailError("");

    if (!phone || phone.trim() === "") {
      setPhoneError("Phone is required");
      valid = false;
    } else setPhoneError("");

    return valid;
  };
  //Form 2
  const [activePlan, setActivePlan] = useState("Arcade");
  const [duration, setDuration] = useState("Monthly");
  const Plans = [
    { title: "Arcade", price: 9 },
    { title: "Advanced", price: 12 },
    { title: "Pro", price: 15 },
  ];
  //Form 3
  const [addOns, setAddOns] = useState([
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: 1,
      checked: false,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      checked: false,
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
      checked: false,
    },
  ]);

  const Forms = [
    {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
      component: (
        <Form1
          name={name}
          setName={setName}
          nameError={nameError}
          setNameError={setNameError}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          phone={phone}
          setPhone={setPhone}
          phoneError={phoneError}
          setPhoneError={setPhoneError}
        />
      ),
      validator: validateForm1,
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
      component: (
        <Form2
          activePlan={activePlan}
          setActivePlan={setActivePlan}
          duration={duration}
          setDuration={setDuration}
          Plans={Plans}
        />
      ),
      validator: () => true,
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance yout gaming experience.",
      component: (
        <Form3 addOns={addOns} setAddOns={setAddOns} duration={duration} />
      ),
      validator: () => true,
    },
  ];

  const handleNext = () => {
    const isValid = Forms[step - 1].validator();
    if (isValid) setStep(step + 1);
  };

  return (
    <div className="Form">
      <h1 className="title">{Forms[step - 1].title}</h1>
      <p className="description">{Forms[step - 1].description}</p>

      {Forms[step - 1].component}

      <div className="buttons">
        <button className="nextButton" onClick={handleNext}>
          Next Step
        </button>

        {step > 1 && (
          <button className="backButton" onClick={() => setStep(step - 1)}>
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
