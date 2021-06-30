import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import requestURL from "../../../config/requests";

const AdminDashboard = ({ token }) => {
  const [contactForms, setContactForm] = useState([]);

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const res = await axios.get(requestURL.fetchContactForms, {
      headers: { Authorization: "Beaerer " + token },
    });
    console.log(res);
    setContactForm(res.result);

    return res;
  };
  return (
    <>
      <h1>Admin Dashboard</h1>
      <ul></ul>
    </>
  );
};

export default AdminDashboard;
