import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "./lib/db";
import { ProductFormValues } from "./lib/zodSchema";
import { PrismaClient } from "@prisma/client";

//server action
export async function createProduct(data: ProductFormValues){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user || user.email !== 'mahdivaeztehrani81@gmail.com'){
        return redirect('/');
    } 

    try {
        const product = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: parseFloat(data.price),
                images: data.images,
                category: data.category ,
                stock: 0,
                isArchived: data.status === 'archived'
            }
        });

        return { success: true, product };
    } catch (error) {
        console.error('Error creating product:', error);
        return { success: false, error: 'Failed to create product' };
    }
}