import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "../css/Dashboard.css";
import { auth, db, logout } from "../firebase";


function Dashboard(props) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      props.onChange(user.uid)
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">

        <div>Ready to leave, {name}? <br/> See you next time!</div>

        <button className="btn-red" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
