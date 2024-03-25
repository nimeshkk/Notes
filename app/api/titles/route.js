import  connectMongoDB  from "@/libs/mongodb";
import  Title  from "@/models/title";
import {NextResponse} from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Title.create({ title, description });
    return NextResponse.json({message:"Title Created"},{status:201});
}