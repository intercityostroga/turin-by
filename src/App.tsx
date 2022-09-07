import GlobalStyles from "./styles/stylesGlobal/global";
import ListOrders from "./components/ListOrder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/Login";
import DescriptionOrders from "./components/Description";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<LogIn />}></Route>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/listOrders" element={<ListOrders />}></Route>
        <Route path="/OrderInfo/:Id" element={<DescriptionOrders />}></Route>
      </Routes>
    </>
  );
}

export default App;
