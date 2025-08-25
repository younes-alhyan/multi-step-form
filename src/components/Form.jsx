import { useState } from "react";
import Form1 from "../utils/Form1";
import Form2 from "../utils/Form2";
import Form3 from "../utils/Form3";
import Form4 from "../utils/Form4";
import "./Form.css";

function Form({ step, setStep }) {
  // Form 1
  const [inputs, setInputs] = useState([
    {
      id: "name",
      label: "Name",
      placeholder: "e.g. Stephen King",
      value: "",
      error: "",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      value: "",
      error: "",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      value: "",
      error: "",
    },
  ]);
  const validateForm1 = () => {
    let valid = true;

    setInputs((prev) =>
      prev.map((input) => {
        let error = "";

        if (input.id === "name") {
          if (!input.value || input.value.trim() === "") {
            error = "Name is required";
            valid = false;
          }
        }

        if (input.id === "email") {
          if (!input.value || !/^\S+@\S+\.\S+$/.test(input.value)) {
            error = "Invalid email";
            valid = false;
          }
        }

        if (input.id === "phone") {
          if (!input.value || input.value.trim() === "") {
            error = "Phone is required";
            valid = false;
          }
        }

        return { ...input, error };
      })
    );

    return valid;
  };

  //Form 2
  const durations = ["Monthly", "Yearly"];
  const [Plans, setPlans] = useState([
    { title: "Arcade", price: 9, checked: true },
    { title: "Advanced", price: 12, checked: false },
    { title: "Pro", price: 15, checked: false },
  ]);
  const [duration, setDuration] = useState(durations[0]);

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
      component: <Form1 inputs={inputs} setInputs={setInputs} />,
      validator: validateForm1,
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
      component: (
        <Form2
          Plans={Plans}
          setPlans={setPlans}
          durations={durations}
          duration={duration}
          setDuration={setDuration}
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
    {
      title: "Finiching up",
      description: "Double-check everything looks OK before confirming.",
      component: {
        component: <Form4 activePlan={activePlan} duration={duration}></Form4>,
        validator: () => true,
      },
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
