import { comments } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

// Update a comment by ID
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params;
    const body = await request.json();
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
    if (commentIndex === -1) {
        return NextResponse.json({ message: "Comment not found" }, { status: 404 });
    }
    comments[commentIndex].text = body.text;
    return NextResponse.json(comments[commentIndex]);
}