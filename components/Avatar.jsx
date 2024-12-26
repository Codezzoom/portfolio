import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end z-20">
      <Image
        src="/Home/bob.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-100 lg:w-4/5 pointer-events-none text-right"
      />
    </div>
  );
};

export default Avatar;
