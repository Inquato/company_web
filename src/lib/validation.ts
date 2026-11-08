import { z } from "zod";
export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().min(7, "Enter a phone or WhatsApp number").max(30),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Choose a service").max(120),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Tell us a little more (20+ characters)").max(3000),
  website: z.string().max(0).optional(),
});
export type Inquiry = z.infer<typeof inquirySchema>;
