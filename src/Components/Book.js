import { useState, useContext, useEffect } from "react";
import Card from "./Card";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function Book() {
  const { u_email } = useContext(userDataContext);
  const [searchDoc, setSearchDoc] = useState("");
  const [doctordata, setDoctordata] = useState("");
  function handleSearchDoc() {
    console.log("search text: ", searchDoc);
  }

  useEffect(() => {
    async function getDoctors() {
      let { data: docData, error } = await supabase.from("doctor").select("*");
      if (error) {
        console.log("error: ", error);
      } else {
        // console.log("Doctor data: ", docData);
        setDoctordata(docData);
      }
    }

    getDoctors();
  }, []);

  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <>
          <div className="text-xl text-slate-600">
            Make an appointment that will help you! Choose a doctor.
          </div>
          <form className="flex w-3/4 gap-2 my-4 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 bg-slate-200 p-2 rounded-md"
              onClick={handleSearchDoc}
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for your doctor"
              className="outline-none p-2 flex-1 bg-transparent sm:inline-block border-b-2 border-slate-500"
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
            />
          </form>
          <div className="flex overflow-x-scroll max-w-[60vw] gap-4 my-4 py-4 scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl scrollbar-track-slate-100 scrollbar-thin">
            {doctordata && doctordata.map((each) => <Card data={each} />)}
          </div>
          <div></div>
        </>
      )}
    </div>
  );
}
