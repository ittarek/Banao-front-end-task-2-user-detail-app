import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div style={{height : "70vh"}}
      className="
      
     d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
    "
    >
      <MoonLoader size={100} color="red" />
    </div>
  );
};

export default Spinner;
