"use server";

import { NextRequest, NextResponse } from "next/server";
import { google } from "./google";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { generateText } from "ai";

const formSchema = z.object({
  messages: z.string(),
});

async function parseAndValidateMessages(req: NextRequest): Promise<any[]> {
  const formData = await req.formData();
  const messagesRaw = formData.get("messages");

  if (!messagesRaw || typeof messagesRaw !== "string") {
    throw { status: 400, message: "Messages are required." };
  }
  const parsed = formSchema.safeParse({ messages: messagesRaw });
  if (!parsed.success) {
    throw { status: 400, message: "Invalid input format." };
  }
  let messages: any[];
  try {
    messages = JSON.parse(messagesRaw);
  } catch {
    throw { status: 400, message: "Messages must be valid JSON." };
  }
  return messages;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    let messages: any[];
    try {
      messages = await parseAndValidateMessages(req);
    } catch (err: any) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status || 400 }
      );
    }

    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    let fileBuffer: Buffer;
    try {
      fileBuffer = await fs.readFile(filePath);
    } catch {
      return NextResponse.json(
        { error: "resume.pdf not found in public directory." },
        { status: 404 }
      );
    }

    const llmMessages = messages.map((m: any, idx: number) => {
      if (idx === messages.length - 1 && m.role === "user") {
        return {
          role: m.role,
          content: [
            { type: "text" as const, text: m.content },
            {
              type: "file" as const,
              data: fileBuffer,
              mimeType: "application/pdf",
            },
          ],
        };
      }
      return {
        role: m.role,
        content: [{ type: "text" as const, text: m.content }],
      };
    });

    const model = google("gemini-2.0-flash-lite");
    const result = await generateText({
      model,
      temperature: 0.0,
      maxRetries: 1,
      system: `It is currently ${new Date().toLocaleString()}.
You must take on the persona of resume candidate provided to you and must speak in first-person using it as the source of truth for all your answers. If the question asked are not relevant or not found in the resume, you must say that you there's not enough information to accurately answer, and would prefer to answer it in-person during a call or a meeting.\nEnsure that your answers are clear and concise, exceeding no more than 3 sentences at a time.`,
      messages: llmMessages,
    });

    return NextResponse.json({ response: result.text });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
