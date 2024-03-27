import connectMongoDB from "@/libs/mongodb";
import  Title  from "@/models/titles";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDB();
    await Title.findByIdAndUpdate(id, { title, description });
    return NextResponse.json ({  message: "Title updated successfully"  }, { status: 200 });

}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const title = await Title.findOne({_id: id});
    return NextResponse.json({title}, {status: 200});
}
    
    