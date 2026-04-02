import "dotenv/config";
import { Gemeni } from "../../../lib/gemeni";
import prisma from "../../..//lib/prisma";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

async function main() {
  const data = await prisma.quests.findMany({
    select: { Name: true, Blurb: true },
  });

  const exampledata = await prisma.quests.findMany({
    take: 3,
  });
  const JsonData: string = JSON.stringify(data);
  const JsonExample: string = JSON.stringify(exampledata);
  // console.log(JsonExample)

  const QuestSchema = z.object({
    New: z.boolean(),
    Name: z.string(),
    EstTime: z.number(),
    XP: z.number(),
    Desc: z.string(),
    Weight: z.number(),
    Blurb: z.string(),
    Diff: z.string(),
    Type: z.string(),
    StartMonth: z.string(),
    EndMonth: z.string(),
  });

  const reportText1 = "The charles river is way too dirty";
  const reportText2 = "There's a ton of trash and broken bottles piling up at Riverside Park. The benches and walkways are covered in litter. Someone needs to go clean it up.";
  const GemeniConfig = {
    systemInstruction: `Here are the existing quests: ${JsonData} 
    Based on the report given in the prompt,
    Determine if this matches an existing quest or needs a new one. 
    If it matches, the New part of the response/Json should be False and everything else can be null
    If it doesn't match you need to create a new quest for it, 
    The format of the new quest should match the the json format in the ${JsonExample} 
    with some example quests given to guide you in making a new quest,
    `,
    responseMimeType: "application/json",
    responseJsonSchema: zodToJsonSchema(QuestSchema),
  };

  const Response = await Gemeni(reportText1, "gemini-2.5-flash", GemeniConfig);
  const quest = QuestSchema.parse(JSON.parse(Response.text));
  console.log(quest);
//   interface Quest {
//     Name: string;
//     EstTime: number;
//     XP: number;
//     Desc: string;
//     Weight: number;
//     Blurb: string;
//     Diff: string;
//     Type: string;
//     StartMonth: string;
//     EndMonth: string;
//   }
// }
// const NewQuest = JSON.parse(Response) as Quest;

}

main();
