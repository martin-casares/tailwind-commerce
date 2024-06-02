import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar />
        {/* menu movil */}
        <div className="bg-[#1f1d2b] lg:hidden">hola!</div>
      </div>
    </>
  );
}

export default App;
