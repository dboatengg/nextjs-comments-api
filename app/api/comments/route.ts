import { NextRequest, NextResponse } from "next/server";
import { comments } from "@/app/lib/data";

// GET all comments or filter by search query
export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const search = searchParams.get("search");

    if (search) {
        const filteredComments = comments.filter(comment => comment.text.toLowerCase().includes(search.toLowerCase()));
        return NextResponse.json(filteredComments);
    }
    return NextResponse.json(comments);
}

// POST a new comment
export async function POST(request: NextRequest) {
    const body = await request.json();
    const newComment = {id: Date.now(), text: body.text};

    comments.push(newComment);
    return NextResponse.json(newComment, {status: 201});
}
