export default function Appointments() {
  return (
    <div className="h-full bg-bbglue rounded-3xl p-5 flex gap-4 flex-col text-slate-600 border-r-8 border-b-8 border-2 border-slate-800">
      <span className="text-2xl">Scheduled Appointments</span>
      <span className="flex gap-2 text-sm text-slate-600 items-center">
        <span>12th June 2023</span>
        <hr className="border-slate-400 rounded-md w-1/2" />
      </span>
      <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
        <span className="bg-slate-400 rounded-full p-5"></span>
        <span className="flex flex-col"></span>
      </div>
      <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
        <span className="bg-slate-400 rounded-full p-5"></span>
        <span className="flex flex-col"></span>
      </div>
      <span className="flex gap-2 text-sm text-slate-600 items-center">
        <span>10th June 2023</span>
        <hr className="border-slate-400 rounded-md w-1/2" />
      </span>
      <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
        <span className="bg-slate-400 rounded-full p-5"></span>
        <span className="flex flex-col"></span>
      </div>
      <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
        <span className="bg-slate-400 rounded-full p-5"></span>
        <span className="flex flex-col"></span>
      </div>
      <div className="bg-white p-4 rounded-md flex items-center border-r-8 border-b-8 border-2 border-slate-800">
        <span className="bg-slate-400 rounded-full p-5"></span>
        <span className="flex flex-col"></span>
      </div>
    </div>
  );
}
