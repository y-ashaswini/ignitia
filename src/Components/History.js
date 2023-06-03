import { useContext } from "react";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";

export default function History() {
  const { u_email } = useContext(userDataContext);
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <>Hello from history</>
      )}
    </div>
  );
}
