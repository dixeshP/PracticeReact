import { Outlet } from "react-router";
import "./App.scss";
import { Footer, Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
