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
  const [u_birth, set_u_birth] = useState("");
  const [u_adhar, set_u_adhar] = useState("");

  useEffect(() => {
    async function getUserdbdata(userdata) {
      set_u_email(userdata.user.email);
      set_u_uuid(userdata.user.id);
      // console.log("id: ", userdata.user.id);
      let { data: userDet, userdberror } = await supabase
        .from("user")
        .select("*")
        .eq("user_uuid", userdata.user.id);
      if (userdberror) console.log("user db error: ", userdberror);
      else {
        // console.log(userDet);
        return userDet[0];
      }
    }

    async function getUserinfo() {
      const { data: userdata } = await supabase.auth.getUser();
      if (userdata && userdata.user) {
        console.log(userdata);
        const userdbdata = await getUserdbdata(userdata);
        console.log("userdbdata: ", userdbdata);
        set_u_id(userdbdata.id);
        set_u_fname(userdbdata.fname);
        set_u_lname(userdbdata.lname);
        set_u_ph(userdbdata.phone);
        set_u_birth(userdbdata.birth);
        set_u_adhar(userdbdata.adhar);
      } else {
        console.log("auth user error");
      }
    }

    getUserinfo();
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
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
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
