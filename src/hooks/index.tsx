import type { MessagePayload } from "../types";
import { API_URL } from "../constants";

export async function encryptMessage(data: MessagePayload): Promise<string> {
  const res = await fetch(`${API_URL}/encrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Encryption failed");
  const json = await res.json();
  return json.result;
}

export async function decryptMessage(data: MessagePayload): Promise<string> {
  const res = await fetch(`${API_URL}/decrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Decryption failed");
  const json = await res.json();
  return json.result;
}
