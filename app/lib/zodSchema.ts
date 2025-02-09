import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  price: z.string().min(1, { message: 'Price is required' }),
  featured: z.boolean().default(false),
  status: z.enum(['draft', 'published', 'archived']),
  category: z.enum(['men', 'women', 'kids'], {
    required_error: 'Category is required',
  }),
  images: z.array(z.string()).min(1, { message: 'At least one image is required' })
})

export type ProductFormValues = z.infer<typeof productSchema>