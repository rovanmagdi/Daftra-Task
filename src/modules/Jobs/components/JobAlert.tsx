import Arrow from "../../../assets/Arrow";
import Menu from "../../../assets/Menu";

const JobAlert = ({ setOpen }: { setOpen: any }) => {
  return (
    <>
      <div className=" bg-[#e3e3e3ff] p-3  max-[800px]:grid grid-cols-2 justify-items-stretch items-center min-[800px]:hidden my-3">
        <p className="justify-self-end">Comapnies</p>
        <div
          className="justify-self-end"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Menu />
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mb-3 min-[800px]:flex max-[800px]:hidden">
        <div></div>
        <div className="flex items-center ">
          Sorting by: <span className="text-primary px-2">Top match</span>{" "}
          <span>
            <Arrow color="#7BB485" height="7px" />
          </span>{" "}
        </div>
      </div>
      <div className="flex items-center justify-between bg-primary p-6 mb-5">
        <div>
          <p className="text-white text-xl">UI Designer in Egypt</p>
          <span className="text-white text-sm">70 job positions</span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-white">Set alert</p>

          <label
            htmlFor="AcceptConditions"
            className="relative inline-block h-7 w-14 cursor-pointer rounded-full bg-[#7ea881ff] transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-300"
          >
            <input
              type="checkbox"
              id="AcceptConditions"
              className="peer sr-only"
            />

            <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-white transition-all peer-checked:start-6"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default JobAlert;
