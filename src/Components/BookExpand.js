import { useContext, useEffect, useState } from "react";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function BookExpand() {
  const currentdoc = window.location.pathname.split("/").slice(-1)[0];
  const [data, setData] = useState("");
  const [app_date, set_app_date] = useState("");
  const [app_time, set_app_time] = useState("");

  useEffect(() => {
    async function f() {
      let { data: userDet, userdberror } = await supabase
        .from("doctor")
        .select("*")
        .eq("id", currentdoc);
      if (userdberror || userDet == null)
        console.log("user db error: ", userdberror);
      else {
        setData(userDet[0]);
      }
    }

    f();
  }, []);

  const { u_email } = useContext(userDataContext);
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <div className="flex flex-col gap-4 text-slate-600">
          <span className="font-bold text-3xl">APPOINTMENT BOOKING</span>
          <span className="flex flex-wrap gap-2 items-center">
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.fname + " " + data.lname}
            </span>
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.dept}
            </span>
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.email}
            </span>
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.phone}
            </span>
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.hospital}
            </span>
            <span className="outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 w-fit">
              {data.hospital_add}
            </span>
            <form className="flex flex-col space-y-4 w-full">
              <textarea
                placeholder="(Optional) Message"
                className=" outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 min-h-[10vh] my-2"
              />
              <label>Choose Date</label>
              <input
                className=" outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 my-2"
                type="date"
                value={app_date}
                onChange={(e) => set_app_date(e.target.value)}
              />
              <label>Choose Time Slots</label>
              <input
                className=" outline-none border-2 border-b-4 border-r-4 border-slate-600 rounded-md px-2 py-1 my-2"
                type="time"
                value={app_time}
                onChange={(e) => set_app_time(e.target.value)}
              />
            </form>
          </span>
        </div>
      )}
    </div>
  );
}
