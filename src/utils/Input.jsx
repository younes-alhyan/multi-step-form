function Input({ id, label, placeholder, value, setValue, error }) {
  return (
    <div className="input-container">
      <div className="top">
        <label htmlFor={id}>{label}</label>
        {error && <p className="input-error">{error}</p>}
      </div>
      <input
        type="text"
        className={`input ${error ? "error" : ""}`}
        id={id}
        placeholder={placeholder}
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
