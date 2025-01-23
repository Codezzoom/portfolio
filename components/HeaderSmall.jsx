export default function HeaderSmall({ text }) {
  return (
    <>
      <div className="flex items-center">
        <hr className="w-16 sm:w-24 mr-1 border-secondary" />
        <h4 className="font-light text-sm md:text-7xl bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">
          {text}
        </h4>{" "}
      </div>
    </>
  );
}
