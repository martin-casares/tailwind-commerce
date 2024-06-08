import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiLightbulbLine,
  RiPieChart2Line,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrderf] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        {/* menu movil */}
        <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiPieChart2Line />
          </button>
          <button className="p-2">
            <RiLightbulbLine />
          </button>
          <button className="text-white p-2" onClick={toggleMenu}>
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>

        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
          <div className="lg:col-span-6 md:p-8">
            {/* header  */}
            <header>
              {/* title and search */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-200">Resto</h1>
                  <p className="text-gray-500">02 de junio 2024</p>
                </div>
                <form>
                  <div className="w-full relative">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="text"
                      className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              {/* tabs */}
              <nav className="text-gray-100 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                <a
                  href=""
                  className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute  before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
                >
                  Hot dishes
                </a>
                <a href="" className=" py-2 pr-4">
                  Cold dishes
                </a>
                <a href="" className=" py-2 pr-4">
                  Soup
                </a>
                <a href="" className=" py-2">
                  Gril
                </a>
              </nav>
            </header>
            {/* Title content */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center text-gray-300 gap-2 bg-[#1f1d2b] py-2 px-4 rounded-lg">
                <RiArrowDownSLine /> Dine in
              </button>
            </div>

            {/* content */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
              {/* card */}
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img
                  src="plato1-2.png"
                  alt=""
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">Lorem, ipsum dolor.</p>
              </div>
              {/* card */}
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img
                  src="plato1-2.png"
                  alt=""
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">Lorem, ipsum dolor.</p>
              </div>
              {/* card */}
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img
                  src="plato1-2.png"
                  alt=""
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">Lorem, ipsum dolor.</p>
              </div>
              {/* card */}
              <div className="bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                <img
                  src="plato1-2.png"
                  alt=""
                  className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                />
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <span className="text-gray-400">$2.29</span>
                <p className="text-gray-600">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 fixed lg:static right-0">carrito</div>
        </main>
      </div>
    </>
  );
}

export default App;
