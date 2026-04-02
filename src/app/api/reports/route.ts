import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Gemeni } from "@/lib/gemeni";

export const POST = async (req: Request) => {
  try {
    const data = await prisma.quests.findMany({
      select: { QuestID: true, Blurb: true },
    });
    const JsonData:string = JSON.stringify(data);
    const SystemPrompt:string = "Imagine you are cat"

    const GemeniConfig ={ 
      thinkingConfig: {
            },
        systemInstruction: SystemPrompt
    }
    const Prompt = "What does a cat say"

    const Response = await Gemeni(Prompt, "gemini-1.5-flash", GemeniConfig)
    console.log(Response)
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Failed to get the quests",
        error: error.message,
      },
      { status: 500 },
    );
  }
};

