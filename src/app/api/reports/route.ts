import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Gemeni } from "@/lib/gemeni";

export const POST = async (req: Request) => {
  try {
    async function GetPrismaData() {
      const data = await prisma.quests.findMany({
        select: { Name: true, Blurb: true },
      });

      const exampledata = await prisma.quests.findMany({
        take: 3,
      });
      const JsonData: string = JSON.stringify(data);
      const JsonExample: string = JSON.stringify(exampledata);

      return {JsonData,}
    }
  } catch {}
};
