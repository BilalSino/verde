interface InputType {
  title: string;
  value?: string;
  name: string;
  placeholder: string;
}

function Input({ title, value = '', name, placeholder }: InputType) {
  return (
    <label>
      <h5>{title}</h5>
      <input
        className="w-full border p-2 rounded outline-none"
        type="text"
        defaultValue={value}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export { Input };
