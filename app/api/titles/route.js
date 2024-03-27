import  connectMongoDB  from "@/libs/mongodb";
import  Title  from "@/models/titles";
import {NextResponse} from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Title.create({ title, description });
    return NextResponse.json({message:"Title Created"},{status:201});
}

export async function GET(request) {
    await connectMongoDB();
    const titles = await Title.find({});
    return NextResponse.json(titles);
}

export async function DELETE(request) {
    const  id  = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Title.findByIdAndDelete(id);
    return NextResponse.json({message:"Title Deleted"} ,{status:200});
}