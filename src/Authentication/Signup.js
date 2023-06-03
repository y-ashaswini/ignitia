import { createClient } from "@supabase/supabase-js";
import { userDataContext } from "../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function Signup() {
  const {
    set_u_email,
    set_u_fname,
    set_u_lname,
    set_u_ph,
    set_u_id,
    set_u_uuid,
    set_u_birth,
    set_u_adhar,
    set_u_npi,
    set_u_role,
  } = useContext(userDataContext);
  let navigate = useNavigate();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [dob, setdob] = useState("");
  const [adhar, setAdhar] = useState("");
  const [npi, setNpi] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [ph, setph] = useState("");

  const toast_param = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  async function addDatabase(param_u_uuid) {
    if (role === "Doctor") {
      const insertdata = [
        {
          lname: lname,
          fname: fname,
          user_uuid: param_u_uuid,
          email: email,
          npi: npi,
          phone: ph,
          birth: dob,
          role: role,
        },
      ];
      console.log("inserting data: ", insertdata);
      let { data: adddata, err } = await supabase
        .from("doctor")
        .insert(insertdata)
        .select();
      if (err) {
        toast.error("Error: " + err, toast_param);
        return "";
      } else {
        set_u_id(adddata[0].id);
        set_u_fname(adddata[0].fname);
        set_u_lname(adddata[0].lname);
        set_u_birth(adddata[0].birth);
        set_u_npi(adddata[0].npi);
        set_u_adhar(adddata[0].adhar);
        set_u_birth(adddata[0].birth);
        set_u_role(adddata[0].role);
        toast.info("Account created successfully", toast_param);
        return adddata;
      }
    } else {
      const insertdata = [
        {
          lname: lname,
          fname: fname,
          user_uuid: param_u_uuid,
          email: email,
          adhar: adhar,
          phone: ph,
          birth: dob,
          role: role,
        },
      ];
      console.log("inserting data: ", insertdata);
      let { data: adddata, err } = await supabase
        .from("patient")
        .insert(insertdata)
        .select();
      if (err) {
        toast.error("Error: " + err, toast_param);
        return "";
      } else {
        set_u_id(adddata[0].id);
        set_u_fname(adddata[0].fname);
        set_u_lname(adddata[0].lname);
        set_u_birth(adddata[0].birth);
        set_u_npi(adddata[0].npi);
        set_u_adhar(adddata[0].adhar);
        set_u_birth(adddata[0].birth);
        set_u_role(adddata[0].role);
        toast.info("Account created successfully", toast_param);
        return adddata;
      }
    }
  }

  async function addUser() {
    let { data: adduserdata, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      toast.error("Error: " + error, toast_param);
      return "";
    }
    set_u_email(adduserdata.user.email);
    set_u_ph(adduserdata.user.phone);
    set_u_uuid(adduserdata.user.id);
    // console.log("userdata: ",adduserdata);
    return adduserdata.user.id;
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (
      fname.trim() == "" ||
      lname.trim() == "" ||
      email.trim() == "" ||
      password.trim() == ""
    ) {
      toast.error("Please fill up all the fields", toast_param);
    } else if (confirmpass != password) {
      toast.error("Your passwords don't match", toast_param);
    } else {
      const returned_uuid = await addUser();
      addDatabase(returned_uuid);
    }
  }

  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="font-bold text-slate-600 rounded-lg"
      />
      <span className="flex gap-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-7 h-7 cursor-pointer text-slate-600 hover:bg-slate-300 p-1 mb-2 rounded-md"
          onClick={() => navigate(-1)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        <div className="md:text-3xl text-lg font-bold text-slate-600">
          SIGN UP
        </div>
      </span>
      <div className="rounded-md max-h-[100vh] flex flex-col p-6 m-4 text-slate-600">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="flex gap-x-4">
            <span className="flex flex-col space-y-2 flex-1">
              <span className="font-bold">Date of Birth</span>
              <input
                type="date"
                className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
            </span>

            <span className="flex flex-col space-y-2 flex-1">
              <span className="flex gap-2 items-center">
                <span className="font-bold">Role</span>
                <span
                  className="px-1 py-[0.5] border-2 border-slate-600 rounded-full cursor-pointer"
                  onClick={function () {
                    setRole("Doctor");
                  }}
                >
                  Doctor
                </span>
                <span
                  className="px-1 py-[0.5] border-2 border-slate-600 rounded-full cursor-pointer"
                  onClick={function () {
                    setRole("Patient");
                  }}
                >
                  Patient
                </span>
              </span>
              <input
                type="text"
                className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
                value={role}
              />
            </span>
          </span>

          {role === "" ? (
            <span className="PLEASE SELECT YOUR ROLE TO VIEW THIS FIELD."></span>
          ) : role === "Doctor" ? (
            <input
              type="text"
              placeholder="Lisence Number"
              className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
              value={npi}
              onChange={(e) => setNpi(e.target.value)}
            />
          ) : (
            <input
              type="text"
              placeholder="Adhar Card Number"
              className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
              value={adhar}
              onChange={(e) => setAdhar(e.target.value)}
            />
          )}

          <span className="flex gap-x-4">
            <input
              type="password"
              placeholder="Set a strong password"
              className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}
            />
          </span>

          <span className="flex flex-col space-y-2 flex-1">
            <span className="font-bold">Contact Number</span>
            <span className="flex items-center">
              <span className="bg-slate-300 p-1 border-2 border-b-4 border-r-4 border-slate-500 rounded-l-md">
                +91
              </span>
              <input
                type="number"
                className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-r-md px-2 py-1"
                value={ph}
                onChange={(e) => setph(e.target.value)}
              />
            </span>
          </span>

          <button
            className="text-slate-600 bg-bbglue font-bold text-center px-3 py-1 rounded-sm cursor-pointer border-2 border-r-8 border-b-8 border-slate-800 outline-none w-fit"
            onClick={(e) => handleSignup(e)}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <span className="text-slate-600">
        Have an account already?{" "}
        <Link
          to="/signin"
          className="font-bold hover:underline hover:underline-offset-2"
        >
          Sign in instead
        </Link>
        .
      </span>
    </div>
  );
}
