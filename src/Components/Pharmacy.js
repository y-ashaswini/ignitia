import { useContext } from "react";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";

const data = [
  {
    category: "Skin Care",
    meds: [
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
      { name: "Medicine A", Price: "92", Capacity: "10ml", Company: "Kepla" },
    ],
  },
  {
    category: "Skin Care",
    meds: [
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
      { name: "Medicine B", Price: "52", Capacity: "8ml", Company: "Mepla" },
    ],
  },
];

export default function Pharmacy() {
  const { u_email } = useContext(userDataContext);
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <span className="text-slate-600">
          <div className="text-2xl mb-2 w-fit">ORDER MEDS ONLINE</div>
          {data.map((each) => (
            <>
              <div className="text-xl font-bold w-fit my-2">{each.category}</div>
              <span className="scrollbar-thumb-slate-600 scrollbar-thumb-rounded-2xl gap-4 scrollbar-track-slate-100 scrollbar-thin flex flex-wrap">
                {each.meds.map((e) => (
                  <span className="flex flex-col p-2 rounded-md border-2 border-b-4 border-r-4 border-slate-600 bg-bbglue min-w-[10vw]">
                    <span>{e.name}</span>
                    <span>{e.Price}</span>
                    <span>{e.Company}</span>
                    <span className="bg-slate-600 px-2 py-1 rounded-md text-white text-xs font-bold mt-2">ADD TO CART</span>
                  </span>
                ))}
              </span>
            </>
          ))}
        </span>
      )}
    </div>
  );
}
