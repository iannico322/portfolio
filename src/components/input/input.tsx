
const Input = ({ label, type,value,onChange }: any) => {
  return (
    <div className=" flex flex-col ">
      <label className=" text-neutrals-300 peer-disabled:opacity-7 mb-2 block text-sm/none uppercase peer-disabled:cursor-not-allowed">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        required
        className=" w-full border border-border bg-[#161a2c] px-3 py-3  text-base text-accent-foreground outline-none focus:border-[blue]/30 active:border-[blue]/60"
      />
    </div>
  );
};

export default Input;
