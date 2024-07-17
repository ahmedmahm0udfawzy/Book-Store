import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  function logOut() {
    setAuthData(null);
    navigate("/login");
  }
  return (
    <div>
      <button
        onClick={logOut}
        className="border p-1 bg-light border-primary rounded"
      >
        Log Out
      </button>
    </div>
  );
}
