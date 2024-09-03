import UserContext from "../context/UserContext";
import { useContext } from "react";

function ChangeUser() {
  const { user, setUser } = useContext(UserContext);
  //
  function onDataChange(e) {
    setUser(e.target.value);
  }
  return (
    <>
      <input onChange={(e) => onDataChange(e)} placeholder="Enter name" />

      <button onClick={() => setUser(user)}>Change user</button>
    </>
  );
}

export default ChangeUser;
