import "server-only";

import { z } from "zod";

const serverSchema = z.object({});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

const mergedSchema = serverSchema.merge(clientSchema);

export const env = mergedSchema.parse(process.env);
