import { useNavigate } from "react-router-dom";
export default function NotSignedin() {
  let navigate = useNavigate();
  return (
    <>
      <div className="md:text-3xl text-lg font-bold text-slate-600">
        You're Signed Out!
      </div>
      <button
        type="button"
        onClick={() => navigate("/signin")}
        className="text-slate-600 bg-bbglue font-bold text-center px-3 py-1 rounded-sm cursor-pointer border-2 border-r-8 border-b-8 border-slate-800 outline-none w-fit my-2"
      >
        GO TO SIGN IN PAGE
      </button>
    </>
  );
}
