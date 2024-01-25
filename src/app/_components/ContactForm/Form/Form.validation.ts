import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email({ message: "Deve ser um email válido."}),
  name: z.string().trim().min(2, { message: "Tamanho mínimo são 2 caractéres"}).optional(),
  message: z.string().trim()
})

export type ValidationSchema = z.infer<typeof validationSchema>;
export type ValidationSchemaKeys = keyof ValidationSchema;