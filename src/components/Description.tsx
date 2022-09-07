import List from "./List";
import { useLocation } from "react-router-dom";
const DescriptionOrders = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="container">
      <div className="wraper">
        <div>
          <List data={location.state} />
        </div>
      </div>
    </div>
  );
};

export default DescriptionOrders;
