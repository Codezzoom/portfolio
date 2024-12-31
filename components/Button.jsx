export default function Button({ text, type, onClickHandler = () => {} }) {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className={`font-semibold px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 
                md:w-56 2xl:w-60 text-[15px] h-25 transition-all rounded
                overflow-hidden border-2 border-transparent hover:shadow-light-xl
                  ${
                    type === "solid"
                      ? "bg-violet text-blue hover:outline-none hover:bg-transparent hover:text-violet hover:border-violet focus:outline-none"
                      : "text-violet bg-transparent border-violet hover:outline-none hover:bg-violet hover:text-blue hover:border-violet focus:outline-none"
                  }
                   `}
      >
        {text}
      </button>
    </>
  );
}
