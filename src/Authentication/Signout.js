import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userDataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useContext } from "react";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function Signout() {
  let navigate = useNavigate();
  const {
    u_email,
    set_u_email,
    set_u_birth,
    set_u_fname,
    set_u_lname,
    set_u_ph,
    set_u_id,
    set_u_uuid,
  } = useContext(userDataContext);
  async function handleSignout() {
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
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Sign out unsuccessful", toast_param);
    } else {
      toast.info("Signed out successfuly", toast_param);
    }
    localStorage.clear();
    set_u_email("");
    set_u_ph("");
    set_u_fname("");
    set_u_lname("");
    set_u_birth("");
    set_u_uuid("");
    set_u_id("");
    navigate("/");
  }

  return u_email && u_email.trim() === "" ? (
    <></>
  ) : (
    <div
    className="text-slate-600 bg-bbglue font-bold text-center px-3 py-1 rounded-sm cursor-pointer border-2 border-r-8 border-b-8 border-slate-800 outline-none w-fit my-2"
      onClick={handleSignout}
    >
      SIGN OUT
    </div>
  );
}
