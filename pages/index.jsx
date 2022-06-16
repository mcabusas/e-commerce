import Head from "next/head";
import { connectToDatabase } from "../utils/mongodb";

//Components
import Landing from "../components/Landing";

export default function Home({ properties }) {
  console.log(properties);
  return (
    <>
      <Landing />
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("product").find({}).limit(20).toArray();

  const parsedData = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: parsedData },
  };
}
