import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Appointments from "./Components/Appointments";

import Book from "./Components/Book";
import baseline from "./Assets/baseline.svg";
import dashboard from "./Assets/dashboard.svg";
import emergency from "./Assets/emergency.svg";
import healthmale from "./Assets/healthmale.svg";
import image6 from "./Assets/image6.svg";
import image7 from "./Assets/image7.svg";

import { createClient } from "@supabase/supabase-js";
import { createContext, useState, useEffect } from "react";
import Signin from "./Authentication/Signin";
import Signup from "./Authentication/Signup";
import Account from "./Authentication/Account";
import History from "./Components/History";
import Emergency from "./Components/Emergency";
import Prescription from "./Components/Prescription";
import Pharmacy from "./Components/Pharmacy";
import BookExpand from "./Components/BookExpand";
export const userDataContext = createContext();

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function App() {
  const location = useLocation();
  const [u_fname, set_u_fname] = useState("");
  const [u_lname, set_u_lname] = useState("");
  const [u_email, set_u_email] = useState("");
  const [u_ph, set_u_ph] = useState("");
  const [u_id, set_u_id] = useState("");
  const [u_uuid, set_u_uuid] = useState("");
  const [u_role, set_u_role] = useState("");
  const [u_birth, set_u_birth] = useState("");
  const [u_adhar, set_u_adhar] = useState("");
  const [u_npi, set_u_npi] = useState("");
  const [u_db, set_u_db] = useState("");

  const [paneldata, setpaneldata] = useState("");
  
  useEffect(() => {
    // async function getAppointmentInfo() {
    //   let { data: userDet, userdberror } = await supabase
    //     .from("appointments")
    //     .select("*")
    //     .eq("patient_id", userdata.user.id);
    //   if (userdberror || userDet == null)
    //     console.log("user db error: ", userdberror);
    //   else {
    //     // console.log(userDet);
    //     return userDet[0];
    //   }
    // }

    async function getUserdbdata(userdata) {
      set_u_email(userdata.user.email);
      set_u_uuid(userdata.user.id);
      // console.log("id: ", userdata.user.id);
      let { data: userDet, userdberror } = await supabase
        .from("patient")
        .select("*")
        .eq("user_uuid", userdata.user.id);
      if (userdberror || userDet == null)
        console.log("user db error: ", userdberror);
      else {
        // console.log(userDet);
        return userDet[0];
      }
    }

    async function getUserinfo() {
      const { data: userdata } = await supabase.auth.getUser();
      if (userdata && userdata.user) {
        // console.log(userdata);
        const userdbdata = await getUserdbdata(userdata);
        // console.log("userdbdata: ", userdbdata);
        set_u_id(userdbdata.id);
        set_u_fname(userdbdata.fname);
        set_u_lname(userdbdata.lname);
        set_u_ph(userdbdata.phone);
        set_u_birth(userdbdata.birth);
        set_u_role(userdbdata.role);
        set_u_db(userdbdata.documents);
        userdbdata.role === 'Doctor' ? set_u_npi(userdbdata.npi) : set_u_adhar(userdbdata.adhar);
      } else {
        console.log("auth user error");
      }
    }

    getUserinfo();
    // getAppointmentInfo();
  }, [set_u_email]);

  return (
    <userDataContext.Provider
      value={{
        u_email,
        set_u_email,
        u_fname,
        set_u_fname,
        u_lname,
        set_u_lname,
        u_ph,
        set_u_ph,
        u_id,
        set_u_id,
        u_uuid,
        set_u_uuid,
        u_birth,
        set_u_birth,
        u_adhar,
        set_u_adhar,
        u_npi,
        set_u_npi,
        u_role,
        set_u_role,
        u_db,
        set_u_db
      }}
    >
      <div className="grid grid-cols-12 h-[100vh] h3">
        <div className=" col-span-1 col-start-1 flex flex-col justify-center space-y-12 w-3/4 mx-auto text-slate-800 border-2 border-r-8 border-b-8 border-slate-800 p-2 my-2 rounded-full items-center">
          <Link to="/" className="relative">
            <img src={dashboard} className="w-6 h-6" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Dashboard
            </span>
          </Link>
          <Link to="/history" className="relative">
            <img src={baseline} className="w-6 h-6 text-white" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              History
            </span>
          </Link>
          <Link to="/emergency" className="relative">
            <img src={emergency} className="w-6 h-6" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Emergency
            </span>
          </Link>
          <Link to="/book" className="relative">
            <img src={healthmale} className="w-6 h-6" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Doctor
            </span>
          </Link>
          <Link to="/prescription" className="relative">
            <img src={image6} className="w-6 h-6" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Prescription
            </span>
          </Link>
          <Link to="/pharmacy" className="relative">
            <img src={image7} className="w-6 h-6" />
            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Pharmacy
            </span>
          </Link>
          <Link to="/account" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="text-xs absolute bg-white rounded-full px-2 py-1 border-slate-600 border-2 ">
              Account
            </span>
          </Link>
        </div>

        {/* Appointments */}
        <div className="flex flex-col w-full col-start-2 col-span-3 p-2 mx-auto my-2">
          <Appointments />
        </div>

        {/* Home Screen */}
        <div className="grid col-start-5 col-span-8 w-full mx-auto p-2 my-2">
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Home />} />
            <Route path="/book" exact element={<Book />} />
            <Route path="/book/*" exact element={<BookExpand />} />
            <Route path="/signin" exact element={<Signin />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/history" exact element={<History />} />
            <Route path="/emergency" exact element={<Emergency />} />
            <Route path="/prescription" exact element={<Prescription />} />
            <Route path="/pharmacy" exact element={<Pharmacy />} />
            <Route path="/account" exact element={<Account />} />
          </Routes>
        </div>
      </div>
    </userDataContext.Provider>
  );
}
