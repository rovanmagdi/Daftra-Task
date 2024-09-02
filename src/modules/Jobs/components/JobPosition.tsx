import Arrow from "../../../assets/Arrow";
import Calendar from "../../../assets/Calendar";
import logo from "../../../assets/company .png";
import Heart from "../../../assets/Heart";
import Location from "../../../assets/Location";
const JobPosition = () => {
  return (
    <>
      <div className="bg-[#f2fcf2ff] p-5 border-primary border">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Company Logo" height={70} />
            <div>
              <p className="text-lg">Gaming UI designer</p>
              <p className="text-primary font-bold text-sm pt-2">
                Rockstar Games
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-full p-3  bg-white">
            <Heart />
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#919191ff]">
          <div className="flex gap-3 items-center text-sm">
            <div className="flex items-center gap-2 ">
              {" "}
              <Location />
              <p>ElMansoura, Egypt</p>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <Calendar />
              <p>10 days ago</p>
            </div>
          </div>
          <div className="flex gap-3 m-3">
            <span className="bg-white p-2 text-sm">0 - 3y of exp</span>
            <span className="bg-white p-2 text-sm">Full time</span>
            <span className="bg-white p-2 text-sm">Remote</span>
          </div>
          <div className="flex gap-3  border-t border-gray-200 pt-3 px-3 text-sm ">
            <p>Creative / Design</p> -<p>IT / Software development</p> -
            <p>Gaming</p>
          </div>
        </div>
      </div>
      <div className=" items-center justify-center gap-3   min-[800px]:hidden max-[800px]:flex mt-5">
        <span className="border border-gray-500 py-4 px-3">
          <Arrow />
        </span>
        <span className="border border-gray-500 py-2 px-3">1</span>
        <span className="border border-gray-500 py-2 px-3 bg-primary text-white">
          2
        </span>
        <span className="border border-gray-500 py-2 px-3">3</span>
        <span className="border border-gray-500 py-4 px-3">
          <Arrow />
        </span>
      </div>
    </>
  );
};

export default JobPosition;
