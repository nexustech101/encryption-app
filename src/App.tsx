import React from "react";
import CryptoForm from "./components/CryptoForm";

const App = () => {
  return (
    <div className='container py-5'>
      <h1 className='text-center mb-4'>AES CBC Encryption App</h1>
      <CryptoForm />
    </div>
  );
};

export default App;
