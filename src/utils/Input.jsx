function Input({ id, label, placeholder, setValue, error }) {
  return (
    <div className="input-container">
      <div className="top">
        <label htmlFor={id}>{label}</label>
        <p className="input-error">{error}</p>
      </div>
      <input
        type="text"
        className="input"
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
