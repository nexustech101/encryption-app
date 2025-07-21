import React, { useState } from "react";
// import { encryptMessage, decryptMessage } from "./api";
import { encryptMessage, decryptMessage } from "./hooks";

import {
  Container,
  Form,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";


export default function CryptoForm() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { message, key };
      const res =
        mode === "encrypt"
          ? await encryptMessage(payload)
          : await decryptMessage(payload);
      setResult(res);
    } catch (err) {
      setResult(`⚠️ Operation failed: ${err}`);
    }
  };

  return (
    <Container className='p-3'>
      <h3 className='mb-3 text-center'>AES-CBC Encryption App</h3>

      <Form onSubmit={handleSubmit}>
        <ToggleButtonGroup
          type='radio'
          name='mode'
          value={mode}
          onChange={(val) => setMode(val)}
          className='mb-3 w-100'>
          <ToggleButton id='enc' value='encrypt' variant='outline-primary'>
            Encrypt
          </ToggleButton>
          <ToggleButton id='dec' value='decrypt' variant='outline-secondary'>
            Decrypt
          </ToggleButton>
        </ToggleButtonGroup>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mt-3'>
          <Form.Label>Passphrase</Form.Label>
          <Form.Control
            type='password'
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-4 w-100'>
          {mode === "encrypt" ? "Encrypt Message" : "Decrypt Message"}
        </Button>
      </Form>

      {result && (
        <div className='alert alert-info mt-4'>
          <strong>Result:</strong>
          <pre className='mt-2 mb-0 text-break'>{result}</pre>
        </div>
      )}
    </Container>
  );
}
