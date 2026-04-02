import "dotenv/config";
import { Gemeni } from "../../../lib/gemeni";
import prisma from "../../..//lib/prisma";

async function main() {
  const SystemPrompt: string = "Imagine you are cat";

  const data = await prisma.quests.findMany({
    select: { Name: true, Blurb: true },
  });
  const JsonData: string = JSON.stringify(data);

  console.log(JsonData)
  const reportText = "There's a ton of trash and broken bottles piling up at Riverside Park. The benches and walkways are covered in litter. Someone needs to go clean it up.";
  const GemeniConfig = {
    systemInstruction: `Here are the existing quests: ${JsonData} 
    Based on the report given in the prompt,
    Determine if this matches an existing quest or needs a new one. 
    If it matches, tell the name of the qyest it matches with`,
  };

  const Response = await Gemeni(reportText, "gemini-2.5-flash", GemeniConfig);
  console.log(Response.text);
}

main();
