import Input from "./Input";

function Form1({ inputs, setInputs }) {
  // helper to update one input by id
  const setInputValue = (id, value) => {
    setInputs((prev) =>
      prev.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  return (
    <div className="inputs">
      {inputs.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          value={input.value}
          error={input.error}
          setValue={(val) => setInputValue(input.id, val)}
        />
      ))}
    </div>
  );
}

export default Form1;
