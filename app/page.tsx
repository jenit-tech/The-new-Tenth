import AboutUs from "@/components/Main/AboutUs";
import Company from "@/components/Main/Company";
import DataTraining from "@/components/Main/DataTraining";
import HomePage from "@/components/Main/HomePage";
import Navbar from "@/components/Main/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
      < Navbar/>
      <HomePage />
      <Company/>
      <DataTraining/>
      <AboutUs/>

      </div>
 
  </>)
}
