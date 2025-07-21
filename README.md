# AES Encryption App

This is a full-stack application that allows users to encrypt and decrypt messages using AES encryption. The application supports key padding for improper key lengths and provides an option to generate a 32-byte salt for encryption.

## Features

* AES encryption with 16, 24, or 32 byte keys
* Automatic padding for non-conforming keys (using null bytes `\0`)
* Option to generate a 32-byte random key (salt)
* Mobile-responsive UI with Bootstrap
* FastAPI backend with endpoints for encryption and decryption
* Testable with curl or frontend integration

## Technologies Used

* **Backend:** Python, FastAPI, Cryptography
* **Frontend:** Bootstrap, HTML, JavaScript
* **Encryption Standard:** AES (CBC Mode with PKCS7 padding)

## API Endpoints

### POST `/encrypt`

Encrypt a message using the provided key.

**Request Body:**

```json
{
  "message": "your text",
  "key": "your-secret-key"
}
```

**Response:**

```json
{
  "result": "base64-encoded-encrypted-string"
}
```

### POST `/decrypt`

Decrypt a previously encrypted message using the same key.

**Request Body:**

```json
{
  "message": "base64-encoded-encrypted-string",
  "key": "your-secret-key"
}
```

**Response:**

```json
{
  "result": "your text"
}
```

### GET `/generate-key`

Returns a base64-encoded 32-byte key (salt).

**Response:**

```json
{
  "key": "base64-encoded-32-byte-key"
}
```

## Curl Commands

**Encrypt a Message:**

```bash
curl -X POST http://localhost:8000/encrypt \
  -H "Content-Type: application/json" \
  -d '{"message": "hello world", "key": "mykey"}'
```

**Decrypt a Message:**

```bash
curl -X POST http://localhost:8000/decrypt \
  -H "Content-Type: application/json" \
  -d '{"message": "<ciphertext>", "key": "mykey"}'
```

**Generate a Key:**

```bash
curl http://localhost:8000/generate-key
```

## Frontend Usage

You can use the API with any frontend framework or directly through the HTML + JS UI provided. The API expects and returns JSON.

## Running Locally

1. Install dependencies:

```bash
pip install -r requirements.txt
```

2. Run the server:

```bash
uvicorn main:app --reload
```

3. Open your browser at [http://localhost:8000](http://localhost:8000) to view the UI.

## License

MIT License
