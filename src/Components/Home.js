import Calendar from "./Calendar";

export default function Home() {
  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      <div className="text-[8vh] text-slate-600 mb-2">WELCOME BACK, ANNA!</div>
      <span className="grid grid-cols-2 gap-8">
        <span className="flex flex-col gap-2">
          <span className="flex gap-2 items-center">
            <div className="text-xl text-slate-600">
              Your Current Medication
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-600 opacity-50 hover:opacity-100 cursor-pointer"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </span>

          <span className="bg-white p-4 rounded-md flex border-2 border-r-8 border-b-8 border-slate-700 flex-col gap-2">
            <span className="flex justify-between gap-24 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hover:text-slate-600 cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Orerufher [woidhweoij]</span>
            </span>
            <hr border borde-slate-300 />
            <span className="flex justify-between gap-24 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hover:text-slate-600 cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Bwdihwed [unvoiw]</span>
            </span>
            <hr border border-slate-300 />
            <span className="flex justify-between gap-24 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hover:text-slate-600 cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Orerufher [woidhweoij]</span>
            </span>
          </span>
        </span>
        <span className="flex flex-col gap-2">
          <span className="flex gap-2 items-center">
            <div className="text-xl text-slate-600">Your Vitals</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-slate-600 opacity-50 hover:opacity-100 cursor-pointer"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </span>
          <span className="flex gap-4">
            <span className="bg-white p-4 rounded-md flex flex-col gap-2 px-8 border-2 border-r-8 border-b-8 border-slate-700 ">
              <span className="flex flex-col gap-2 text-slate-400 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 text-slate-600 opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="text-xl">67 BPM</span>
                <span className="text-sm text-slate-600">Pulse</span>
              </span>
            </span>
            <span className="bg-white p-4 rounded-md flex flex-col gap-2 px-8 border-2 border-r-8 border-b-8 border-slate-700 ">
              <span className="flex flex-col gap-2 text-slate-400 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 hover:text-slate-600 cursor-pointer mx-auto"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>

                <span className="text-xl">175/60</span>
                <span className="text-sm text-slate-600">Blood Pressure</span>
              </span>
            </span>
          </span>
        </span>

        {/* Diet Plan */}
        <span className="flex flex-col gap-4">
          <div className="text-xl text-slate-600">Diet Plan</div>
          <div className="flex flex-col gap-1">
            <span className="bg-slate-600 px-2 py-1 text-white font-bold">
              SUNDAY
            </span>
            <span className="bg-slate-600 px-2 py-1 text-white font-bold">
              MONDAY    
            </span>
            <span className="bg-slate-600 px-2 py-1 text-white font-bold">
              TUESDAY
            </span>
            <span className="bg-slate-600 px-2 py-1 text-white font-bold">
              WEDNESDAY
            </span>
            <span className="bg-slate-600 px-2 py-1 text-white font-bold">
              THURSDAY
            </span>
          </div>
        </span>

        {/* <Calendar /> */}
        <span className="flex flex-col gap-4">
          <div className="text-xl text-slate-600">Calendar</div>
          <Calendar />
        </span>
      </span>
    </div>
  );
}
