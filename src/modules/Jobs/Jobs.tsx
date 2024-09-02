import { useState } from "react";
import JobAlert from "./components/JobAlert";
import JobPosition from "./components/JobPosition";
import Nav from "./components/Nav/Nav";

const Jobs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-5 mx-5">
      <div
        className={`${
          open == true
            ? "absolute backdrop-opacity-25 backdrop-invert bg-white/30 w-fill-available z-50"
            : "flex-none min-[800px]:block max-[800px]:hidden"
        }`}
      >
        {open && (
          <div
            className="cursor-pointer absolute right-0  m-5 p-2 border border-gray-700 rounded-full  min-[800px]:hidden max-[800px]:block"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </div>
        )}

        <Nav />
      </div>

      <div className="flex-1 mx-5">
        <JobAlert setOpen={setOpen} />
        <JobPosition />
      </div>
    </div>
  );
};

export default Jobs;
