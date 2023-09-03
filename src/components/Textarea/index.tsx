interface TextareaType {
  title: string;
  value?: string;
  name: string;
  placeholder: string;
}

function Textarea({ title, value = '', name, placeholder }: TextareaType) {
  return (
    <label>
      <h5>{title}</h5>
      <textarea
        className="w-full border p-2 rounded outline-none"
        rows={5}
        defaultValue={value}
        name={name}
        placeholder={placeholder}
      ></textarea>
    </label>
  );
}

export { Textarea };
