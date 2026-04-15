// A file which host future LLM prompts
/**
 * Builds the LLM prompt used to match a report to an existing quest or define a new one.
 *
 * @param questNameBlurb Serialized summary of existing quests available for matching.
 * @param firstThreeQuest Example quest JSON used as a template when creating a new quest.
 * @returns Prompt text to send to the model.
 */
function questPrompt (questNameBlurb : string, firstThreeQuest: string) : string {
    const returnString =`Here are the existing quests: ${questNameBlurb}
    Based on the report given in the prompt,
    Determine if this matches an existing quest or needs a new one.
    If it matches, follow the zod schema and return me just the match and ID of that
    If it doesn't match you need to create a new quest for it,
    The format of the new quest should match the the json format in the ${firstThreeQuest}
    with some example quests given to guide you in making a new quest,
    "You MUST include a New field in your response. If the report matches an existing quest,
    set New: false and MatchedName to the quest name. If it's a new quest, set New: true and fill in all fields."
    `
    return returnString  
}
export {questPrompt}
