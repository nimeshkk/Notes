import  connectMongoDB  from '$lib/api/mongo';
import Title from '$lib/api/models/title';
import {NextResponse} from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Title.create({ title, description });
    return NextResponse.json({message:"Title Created"},{status:201});
}