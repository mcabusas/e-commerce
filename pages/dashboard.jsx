import React, { useEffect } from "react";
import { connectToDatabase } from "../utils/mongodb";

//Components.
import NavBar from "../components/Navbar";
import DashboardComponent from "../components/Dashboard/Dashboard";

const Dashboard = ({ products }) => {
  return (
    <>
      <NavBar />
      <div className="md:container md:mx-auto md:px-40">
        <DashboardComponent products={products} />
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("product").find({}).limit(20).toArray();

  const parsedData = JSON.parse(JSON.stringify(data));

  return {
    props: { products: parsedData },
  };
}

export default Dashboard;
