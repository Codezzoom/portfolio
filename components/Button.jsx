export default function Button({
  text,
  type,
  onClickHandler = () => {},
  disabled = false,
}) {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        disabled={disabled} // Add disabled attribute
        className={`font-semibold px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 
                md:w-56 2xl:w-60 text-[15px] h-25 transition-all rounded
                overflow-hidden hover:shadow-light-xl
                ${
                  type === "solid"
                    ? `bg-secondary text-primary hover:border-2 hover:outline-none 
                       hover:bg-transparent hover:text-secondary hover:border-secondary 
                       focus:outline-none ${
                         disabled ? "opacity-50 cursor-not-allowed" : ""
                       }`
                    : `text-secondary bg-transparent border-2 border-[#B8C1EC] hover:outline-none 
                       hover:bg-secondary hover:text-primary focus:outline-none 
                       ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
                }
                `}
      >
        {text}
      </button>
    </>
  );
}
