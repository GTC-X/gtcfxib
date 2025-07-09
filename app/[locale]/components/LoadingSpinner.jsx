const FallbackLoader = () => {
  return (
    <div
      className=" text-center absolute z-[99] bg-[#00000030] w-full h-full flex justify-center"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default FallbackLoader;
