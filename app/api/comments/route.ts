import { NextRequest, NextResponse } from "next/server";
import { comments } from "@/app/lib/data";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const search = searchParams.get("search");

    if (search) {
        const filteredComments = comments.filter(comment => comment.text.toLowerCase().includes(search.toLowerCase()));
        return NextResponse.json(filteredComments);
    }
    return NextResponse.json(comments);
}