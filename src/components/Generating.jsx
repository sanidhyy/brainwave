import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        src={loading}
        alt="Loading"
        className="w-5 h-5 mr-4 animate-spin pointer-events-none select-none"
      />
      <span className="animate-pulse">AI is generating...</span>
    </div>
  );
};

export default Generating;
