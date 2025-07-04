import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css';
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
  const {
    showComponent,
    setShowComponent,
    loading,
    handlePrint,
    themeData,
  } = useContext(ResumeContext);

  const handleSelectNewTemplate = () => {
    setShowComponent(!showComponent);
  };

  const saveResumeToDB = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/resume/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(themeData),
      });

      const data = await response.json();
      console.log("✅ Resume saved to DB:", data);
      alert("Resume saved successfully!");
    } catch (err) {
      console.error("❌ Failed to save resume:", err);
      alert("Failed to save resume.");
    }
  };

  return (
    <>
      {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

      <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
        <UserDataCollect />
        <div id='theme-box-border'>
          {props.theme}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>
          Print
        </Button>

        <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>
          Select Another Template
        </Button>

        <Button className='mx-2 my-5' colorScheme="teal" variant="solid" onClick={saveResumeToDB}>
          Save Resume
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default BuilderArea;
