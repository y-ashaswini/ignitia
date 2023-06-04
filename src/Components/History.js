import { useContext } from "react";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";
import stock from "../Assets/stock-graph.png";

export default function History() {
  const { u_email } = useContext(userDataContext);
 
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <>
          <span className="text-2xl font-bold mb-4">Reports and History</span>
          <span className="flex items-center gap-2">
            <span className="grid grid-cols-2 gap-2 w-1/2 text-sm font-bold">
              <span className="rounded-md bg-slate-400 hover:bg-slate-500 cursor-pointer items-center align-middle p-8">
                FULL BODY
              </span>
              <span className="rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer items-center align-middle p-8">
                CT SCAN
              </span>
              <span className="rounded-md bg-slate-300 hover:bg-slate-400 cursor-pointer tems-center align-middle p-8">
                X-RAY SCAN
              </span>
              <span className="rounded-md bg-slate-400 hover:bg-slate-500 cursor-pointer items-center align-middle p-8">
                BLOOD TEST
              </span>
            </span>
            <span className="border-2 border-b-4 border-r-4 w-1/2 h-fit border-slate-600 rounded-md">
              <img src={stock}/>
            </span>
          </span>
          <span className="text-2xl font-bold my-4">Recent Visits</span>
          <span className="flex flex-col items-left gap-2">
            <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800 w-1/4">
              <span className="bg-slate-400 rounded-full p-5"></span>
              <span className="flex flex-col"></span>
            </div>
            <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800 w-1/4">
              <span className="bg-slate-400 rounded-full p-5"></span>
              <span className="flex flex-col"></span>
            </div>
            <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800 w-1/4">
              <span className="bg-slate-400 rounded-full p-5"></span>
              <span className="flex flex-col"></span>
            </div>
            <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800 w-1/4">
              <span className="bg-slate-400 rounded-full p-5"></span>
              <span className="flex flex-col"></span>
            </div>
          </span>
        </>
      )}
    </div>
  );
}
