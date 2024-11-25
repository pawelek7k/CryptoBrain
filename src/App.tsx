import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { RouterIndex } from "./routes/RouterIndex";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <RouterIndex />
    </>
  );
}

export default App;
