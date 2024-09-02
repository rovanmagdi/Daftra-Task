import Home from "../../assets/Home";
import Jobs from "../../assets/Jobs";
import Message from "../../assets/Message";
import Notification from "../../assets/Notification";
import People from "../../assets/People";
import Search from "../../assets/Search";
import logo from "../../assets/company .png";
const Navbar = () => {
  const items = [
    { icon: <Home />, title: "Home" },
    { icon: <Jobs />, title: "Jobs" },
    { icon: <People />, title: "Employees" },
    { icon: <Notification />, title: "Notifications" },
    {
      icon: (
        <Message className="relative after:absolute after:left-4 after:bottom-3 after:content-['1'] after:text-center after:pb-3 after:text-sm after:bg-red-500 after:h-4 after:w-4 after:rounded-full" />
      ),
      title: "Messaging",
    },
  ];
  return (
    <nav className="grid grid-cols-2 justify-items-stretch items-center  bg-black text-white px-6 py-2">
      <div className=" max-[800px]:block min-[800px]:hidden">
        <img src={logo} width={30} className="rounded-full" />
      </div>
      <div className="flex gap-5">
        <p className="font-bold text-2xl">
          {" "}
          I<span className="text-primary">Z</span>AM
        </p>
        <div className="relative">
          <div className="absolute mx-2 mt-0.5 bg-primary w-9 h-9 rounded-full flex items-center justify-center">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search by name, job title..."
            className="h-10 w-64 rounded-full px-12 text-black text-sm outline-none placeholder-gray-300 min-[800px]:block max-[800px]:hidden"
          />
        </div>
      </div>

      <div className="max-[800px]:hidden items-center flex gap-10 text-sm justify-self-end">
        {items?.map((item) => (
          <div className="flex flex-col items-center justify-center">
            {item?.icon}
            <p className="pt-2">{item?.title}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
