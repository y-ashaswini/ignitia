import { userDataContext } from "../App";
import { createClient } from "@supabase/supabase-js";
import { useContext, useEffect, useRef, useState } from "react";
import NotSignedin from "./NotSignedin";
import Signout from "./Signout";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_ANON_KEY
);

export default function Account() {
  const {
    u_email,
    u_fname,
    u_lname,
    u_ph,
    u_id,
    u_uuid,
    u_birth,
    u_adhar,
    u_role,
    u_db,
    set_u_db,
  } = useContext(userDataContext);

  const form = useRef();
  const [attachment, setAttachment] = useState([]);
  const [currattach, setCurrattach] = useState("");

  useEffect(() => {
    console.log("u_db: ", u_db);
    u_db && setCurrattach(JSON.parse(u_db));
  }, [currattach]);

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

  function handleAttachimg(e) {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => {
      setAttachment([...attachment, reader.result]);
    });
  }

  function handleQuery(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_ID,
        process.env.REACT_APP_EMAILJS_HELP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          toast.error(error.text, toast_param);
        }
      );
    toast.info(
      "We heard you! We'll get back to you within 2 business days",
      toast_param
    );
  }

  async function handleUpload() {
    let f;
    if (currattach === "") {
      f = attachment;
    } else if (attachment === "") {
      f = currattach;
    } else {
      f = {
        ...currattach,
        ...attachment,
      };
    }

    set_u_db(JSON.stringify(f));

    const { data, error } = await supabase
      .from("patient")
      .update({ documents: JSON.stringify(f) })
      .eq("id", u_id);
    if (error) console.log("error: ", error);
    else toast.info("Uploaded", toast_param);
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
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <span className="flex flex-col gap-2 text-slate-600">
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  FIRST NAME
                </span>
                <span className="font-bold">{u_fname.toUpperCase()}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  LAST NAME
                </span>
                <span className="font-bold">{u_lname.toUpperCase()}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  CONTACT NO.
                </span>
                <span className="font-bold">{u_ph}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  BIRTH DATE
                </span>
                <span className="font-bold">{u_birth.toUpperCase()}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  ADHAR
                </span>
                <span className="font-bold">{u_adhar.toUpperCase()}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-sm bg-bbglue border-2 border-r-4 border-b-4 border-slate-600 text-xs">
                  ROLE
                </span>
                <span className="font-bold">{u_role.toUpperCase()}</span>
              </span>

              <Signout />
            </span>
            <span className="border-l-2 pl-2">
              <div className="md:text-2xl text-lg font-bold text-slate-600">
                MESSAGE THE DOCTOR
              </div>
              <form
                ref={form}
                onSubmit={(e) => handleQuery(e)}
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="user_firstname"
                  value={u_fname}
                  className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
                />

                <input
                  type="email"
                  name="user_email"
                  className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1"
                  value={u_email}
                />

                <textarea
                  name="user_message"
                  className="flex-1 outline-none border-2 border-b-4 border-r-4 border-slate-500 rounded-md px-2 py-1 min-h-[20vh]"
                  placeholder="Message"
                />
                <input
                  type="submit"
                  value="SEND"
                  className="text-slate-600 bg-bbglue font-bold text-center px-3 py-1 rounded-sm cursor-pointer border-2 border-r-8 border-b-8 border-slate-800 outline-none w-fit my-2"
                />
              </form>
            </span>
          </div>
          <span>
            <div className="md:text-2xl w-full text-lg mt-4 font-bold text-slate-600">
              SAVE YOUR MEDICAL DOCUMENTS HERE:
            </div>
            <span className="flex gap-2 align-center">
              <label for="input-file">
                <input
                  type="file"
                  id="input-file"
                  className="hidden"
                  onChange={(e) => handleAttachimg(e)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 cursor-pointer text-slate-600 hover:bg-slate-200 p-2 rounded-md"
                  for="input-file"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
              </label>
              <button
                className="text-slate-600 bg-bbglue font-bold text-center px-3 py-1 rounded-sm cursor-pointer border-2 border-r-8 border-b-8 border-slate-800 outline-none w-fit"
                onClick={(e) => handleUpload(e)}
              >
                UPLOAD
              </button>
            </span>
          </span>
          <span className="flex gap-2 my-2 flex-wrap">
            {attachment &&
              attachment.map((each) => {
                // console.log(each.split(";")[0]);
                return each.split(";")[0] === "data:text/plain" ||
                  each.split(";")[0] === "data:application/pdf" ||
                  each.split(";")[0] ===
                    "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                  <a
                    href={each}
                    download
                    className="bg-slate-400 px-2 py-1 rounded-sm text-white h-fit font-bold"
                  >
                    Document
                  </a>
                ) : (
                  <img src={each} className="rounded-lg h-[20vh] w-fit m-1" />
                );
              })}
          </span>
          <div className="md:text-2xl w-full text-lg mt-4 font-bold text-slate-600">
            SAVED DOCS:
          </div>
          <span className="flex gap-2 my-2 flex-wrap">
            {currattach &&
              currattach.map((each) => {
                // console.log(each.split(";")[0]);
                return each.split(";")[0] === "data:text/plain" ||
                  each.split(";")[0] === "data:application/pdf" ||
                  each.split(";")[0] ===
                    "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                  <a
                    href={each}
                    download
                    className="bg-slate-400 px-2 py-1 rounded-sm text-white h-fit font-bold"
                  >
                    Document
                  </a>
                ) : (
                  <img src={each} className="rounded-lg h-[20vh] w-fit m-1" />
                );
              })}
          </span>
        </>
      )}
    </div>
  );
}
