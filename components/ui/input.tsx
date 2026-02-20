interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="sm:col-span-4 p-2">
      <label className="block text-sm/6 font-medium text-white">{label}</label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <input
            id={label}
            type="text"
            name="username"
            placeholder={placeholder}
            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
