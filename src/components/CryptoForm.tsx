import React, { useState } from "react";
import axios from "axios";

interface CryptoPayload {
  message: string;
  key: string;
}

const CryptoForm = () => {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const payload: CryptoPayload = { message, key };
    try {
      const endpoint = isEncrypt ? "encrypt" : "decrypt";
      const response = await axios.post(
        `http://localhost:8000/${endpoint}`,
        payload
      );
      setResult(response.data.result);
    } catch (error) {
      setResult(
        "❌ Error: " +
          ((error as any).response?.data?.detail || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='card shadow-sm'>
      <div className='card-body'>
        <div className='mb-3'>
          <textarea
            className='form-control'
            placeholder='Enter your message'
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your key (16/24/32 chars)'
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className='d-flex gap-2'>
          <button
            className='btn btn-primary'
            disabled={loading}
            onClick={() => {
              setIsEncrypt(true);
              handleSubmit();
            }}>
            Encrypt
          </button>
          <button
            className='btn btn-success'
            disabled={loading}
            onClick={() => {
              setIsEncrypt(false);
              handleSubmit();
            }}>
            Decrypt
          </button>
        </div>
        {result && (
          <div className='alert alert-secondary mt-4' role='alert'>
            <strong>Result:</strong>
            <pre className='mb-0'>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoForm;
