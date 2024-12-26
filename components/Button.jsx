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
                      ? "bg-gradient-to-r from-[#1E4776] to-[#252C60] text-white hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none border-none"
                      : "bg-gradient-to-r from-[#1E4776] to-[#252C60] text-white hover:bg-pink hover:text-blue hover:border-pink focus:outline-none border-none"
                  }`}
      >
        {text}
      </button>
    </>
  );
}
