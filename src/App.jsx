import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";

function App() {
  return (
    <main className=" flex space-x-32">
      <Sidebar />
      <Resume />
    </main>
  );
}

export default App;
