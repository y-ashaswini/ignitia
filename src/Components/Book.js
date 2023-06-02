import { useState } from "react";
import Card from "./Card";

export default function Book() {
  const [searchDoc, setSearchDoc] = useState("");
  function handleSearchDoc() {
    console.log("search text: ", searchDoc);
  }

  const doctordata = [
    {
      name: "Dr. M. Eager",
      picture: "@",
      department: "General Surgeon",
      npi: "098098",
      phone: "6546549877",
      hospital: "Madhya National Hospital",
      hospital_address: "007, Smith Street, Paradis",
      available: false,
    },
    {
      name: "Dr. F. Smith",
      picture: "@",
      department: "Pediatrician",
      npi: "098098",
      phone: "3248760982",
      hospital: "Gong National Hospital",
      hospital_address: "160, Texh Road, Kingstown",
      available: false,
    },
    {
      name: "Dr. M. Eager",
      picture: "@",
      department: "General Surgeon",
      npi: "098098",
      phone: "6546549877",
      hospital: "Madhya National Hospital",
      hospital_address: "007, Smith Street, Paradis",
      available: true,
    },
    {
      name: "Dr. F. Smith",
      picture: "@",
      department: "Pediatrician",
      npi: "098098",
      phone: "3248760982",
      hospital: "Gong National Hospital",
      hospital_address: "160, Texh Road, Kingstown",
      available: true,
    },
  ];
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
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
      <div className="flex flex-wrap gap-4 my-4">
        {doctordata.map((each) => (
          <Card data={each} />
        ))}
      </div>
    </div>
  );
}
