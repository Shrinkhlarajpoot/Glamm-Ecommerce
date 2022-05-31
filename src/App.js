import "./App.css";
import { Pageroutes } from "./frontend/routes/Pageroutes";
import { Footer, ToastWrapper } from "./frontend/components";

function App() {
  return (
    <div className="App">
       <ToastWrapper/>
      <div className="pageroutes" >
      <Pageroutes />
      </div>
      <Footer/>
    </div>
  );
}
export default App;
