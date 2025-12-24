import { z } from "zod";

export const sessionSchema = z.object({
  userId: z.string(),
  role: z.enum(["OWNER", "USER"]),
  csrfToken: z.string(),
});

export type SessionData = z.infer<typeof sessionSchema>;
