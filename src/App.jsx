import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiLightbulbLine,
  RiPieChart2Line,
  RiCloseLine,
  RiSearchLine,
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

        <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
          <div className="lg:col-span-6">
            {/* header  */}
            <header className="p-4">
              {/* title */}
              <div className="flex flex-col gap-4 mb-6">
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
              <nav className="text-gray-100 flex items-center border-b">
                <a
                  href=""
                  className="py-2 pr-4 border-b border-[#ec7c6a] text-[#ec7c6a]"
                >
                  Hot dishes
                </a>
                <a href="" className=" py-2 pr-4">
                  Cold diches
                </a>
                <a href="" className=" py-2 pr-4">
                  Soup
                </a>
                <a href="" className=" py-2">
                  Gril
                </a>
              </nav>
            </header>
          </div>
          <div className="lg:col-span-2 fixed lg:static right-0">carrito</div>
        </main>
      </div>
    </>
  );
}

export default App;
