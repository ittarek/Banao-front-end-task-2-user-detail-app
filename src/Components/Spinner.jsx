import { MoonLoader } from "react-spinners";
import "../Components/HomePage/UserData.css";

const Spinner = () => {
  return (
    <div
      style={{ height: "70vh" }}
      className="
     spinner-style
    
    "
    >
      <MoonLoader size={100} color="red" />
    </div>
  );
};

export default Spinner;
