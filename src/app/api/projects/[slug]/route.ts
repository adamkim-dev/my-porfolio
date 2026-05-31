import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(request: Request, context: any) {
  const { params } = context || {};
  const { slug } = params || {};
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
