import { z } from "zod";

export const validationSchema = z.object({
    email: z.string().email({ message: "Email inválido."}),
    name: z.string().trim(),
    message: z.string().trim()
});

export type ValidationSchema = z.infer<typeof validationSchema>;
export type ValidationSchemaKeys = keyof ValidationSchema;

