import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { ProductCategory } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, description, price, images, category } = body;

        if (!name || !description || !price || !category) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const product = await prisma.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                images: images || [],
                category: category as ProductCategory,
            }
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error('[PRODUCTS_POST]', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}