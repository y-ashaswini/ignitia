import { userDataContext } from "../App";
import { useContext } from "react";
import NotSignedin from "./NotSignedin";
import Signout from "./Signout";

export default function Account() {
  const { u_email, u_fname, u_lname, u_ph, u_id, u_uuid, u_birth, u_adhar } =
    useContext(userDataContext);
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <span>
            hello
            <span>{u_fname}</span>
            <span>{u_lname}</span>
            <span>{u_email}</span>
            <span>{u_ph}</span>
            <span>{u_birth}</span>
            <span>{u_adhar}</span>
            {/* need to add role */}
            <Signout />
          </span>
          <span>
            <div className="md:text-2xl text-lg font-bold text-slate-600">
              MESSAGE THE DOCTOR
            </div>
            <form></form>
          </span>
          <span>
            <div className="md:text-2xl text-lg font-bold text-slate-600">
              REPORT THE DOCTOR
            </div>
            <form></form>
          </span>
        </div>
      )}
    </div>
  );
}
