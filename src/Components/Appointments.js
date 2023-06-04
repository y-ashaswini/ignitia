import { useContext, useEffect, useState } from "react";
import { userDataContext } from "../App";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function Appointments() {
  const [appData, setAppData] = useState("");
  const currPath = window.location.pathname.split("/").slice(-1)[0];
  const { u_id, u_role } = useContext(userDataContext);
  useEffect(() => {
    async function f() {
      console.log("u_id: ", u_id);
      console.log("role: ", u_role);
      // if (u_role === "Patient") {
      //   let { data: data, err } = await supabase
      //     .from("appointments")
      //     .select("*")
      //     .eq("patient_id", u_id);
      //   if (err || data == null) console.log("user db error: ", err);
      //   else {
      //     setAppData(data[0]);
      //   }
      // } else {
      //   let { data: data, err } = await supabase
      //     .from("appointments")
      //     .select("*")
      //     .eq("doctor_id", u_id);
      //   if (err || data == null) console.log("user db error: ", err);
      //   else {
      //     setAppData(data[0]);
      //   }
      // }
    }

    f();
  }, []);

  return (
    <div className="h-full bg-bbglue rounded-3xl p-5 flex gap-4 flex-col text-slate-600 border-r-8 border-b-8 border-2 border-slate-800">
      {currPath === "account" ? (
        <>
          <span className="text-2xl">Messages from your Doctor</span>
          <span className="flex gap-2 text-sm text-slate-600 items-center">
            <span>22th June 2023</span>
            <hr className="border-slate-400 rounded-md w-1/2" />
          </span>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <span className="flex gap-2 text-sm text-slate-600 items-center">
            <span>21th June 2023</span>
            <hr className="border-slate-400 rounded-md w-1/2" />
          </span>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <span className="flex gap-2 text-sm text-slate-600 items-center">
            <span>18th June 2023</span>
            <hr className="border-slate-400 rounded-md w-1/2" />
          </span>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
        </>
      ) : (
        <>
          <span className="text-2xl">Scheduled Appointments</span>
          <span className="flex gap-2 text-sm text-slate-600 items-center">
            <span>12th June 2023</span>
            <hr className="border-slate-400 rounded-md w-1/2" />
          </span>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <span className="flex gap-2 text-sm text-slate-600 items-center">
            <span>10th June 2023</span>
            <hr className="border-slate-400 rounded-md w-1/2" />
          </span>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
          <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
            <span className="bg-slate-400 rounded-full p-5"></span>
            <span className="flex flex-col"></span>
          </div>
        </>
      )}
    </div>
  );
}
