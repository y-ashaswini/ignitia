import { Link } from "react-router-dom";
import BookExpand from "./BookExpand";


export default function Card({ data }) {
  const redirect = "./"+data.id;

  return (
    <div className="bg-white rounded-md py-4 p-4 border-r-8 border-b-8 border-2 border-slate-800 lg:min-w-[60vh] md:min-w-[45vh]">
      <span className="flex justify-between">
        <span className="flex flex-col text-left gap-4">
          <span className="flex gap-2 items-center">
            <span className="rounded-full bg-slate-400 p-5"></span>
            <span className="text-slate-600 text-xl font-bold">
              {data.fname + " " + data.lname}
            </span>
            <Link to={redirect} className="border-2 border-r-4 border-b-4 cursor-pointer rounded-md border-slate-600 px-2 text-slate-600 bg-bbglue py-1">BOOK</Link>
          </span>
          <span className="flex flex-col gap-2">
            <span className="flex gap-1 items-center">
              <span className="bg-slate-600 px-2 py-1 rounded-sm text-white font-bold text-xs">
                DEPT
              </span>
              <span className="text-slate-400 text-sm">{data.dept}</span>
            </span>
            <span className="flex gap-1 items-center">
              <span className="bg-slate-600 px-2 py-1 rounded-sm text-white font-bold text-xs">
                NPI
              </span>
              <span className="text-slate-400 text-sm">{data.npi}</span>
            </span>
            <span className="flex gap-1 items-center">
              <span className="bg-slate-600 px-2 py-1 rounded-sm text-white font-bold text-xs">
                PHONE
              </span>
              <span className="text-slate-400 text-sm">{data.phone}</span>
            </span>
            <span className="flex gap-1 items-center">
              <span className="bg-slate-600 px-2 py-1 rounded-sm text-white font-bold text-xs">
                EMAIL
              </span>
              <span className="text-slate-400 text-sm">{data.email}</span>
            </span>
          </span>
          <span className="flex flex-col text-slate-400">
            <span className="text-slate-600 text-lg">{data.hospital}</span>
            <span className="text-slate-400 text-sm">
              {data.hospital_add}
            </span>
          </span>
        </span>
        <span
          className={
            "p-5 rounded-md cursor-pointer " +
            (data.available ? "bg-[#EA0000]" : "bg-[#69F734]")
          }
        ></span>
      </span>
    </div>
  );
}
