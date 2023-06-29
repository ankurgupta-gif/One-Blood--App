import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
        
          <h3> One Blood app</h3>
          <hr/>
          <p>
      <strong>  A Oneblood APP provides a specialized facility that collects, stores, and distributes blood 
        and blood products to meet the needs of patients requiring transfusions or other 
        blood-related medical treatments. These establishments play a vital role in healthcare 
        systems by ensuring a safe and adequate supply of blood for various medical procedures, emergencies, and surgeries.


        </strong>
         </p> 
     <h4>The primary functions of a "OneBlood" is:</h4>   
         <li> Manage Blood Record</li>
         <li>Storage and Inventory Management</li>
         <li>Donor Registry and Information Management</li>
         <li>Blood Distribution</li>
        </div>
        <h1>Our Aim:</h1>
        <p><b>the aim of a One Blood App is to ensure a safe and sufficient supply of blood and blood products to support patient
         care, promote public health, and save lives through transfusions.</b></p>
      </div>
     
    </Layout>
   
  );
};

export default AdminHome;
