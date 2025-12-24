import crypto from "crypto";

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function verifyCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken;
}
