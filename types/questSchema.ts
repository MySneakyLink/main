/**
 * Defines the shared Zod shape used to validate newly generated quest payloads.
 */
import {z} from "zod"

/**
 * Base Zod shape for a newly generated quest.
 *
 * Fields:
 * - `New`: Marks the payload as a brand-new quest instead of a match.
 * - `Name`, `Desc`, `Blurb`: User-facing quest copy.
 * - `EstTime`, `XP`, `Weight`: Numeric gameplay and ranking values.
 * - `Diff`, `Type`: Quest difficulty and cadence enums.
 * - `StartMonth`, `EndMonth`: Seasonal availability window.
 */
const questSchemaObject = {
  New: z.literal(true),
  Name: z.string(),
  EstTime: z.number(),
  XP: z.number(),
  Desc: z.string(),
  Weight: z.number(),
  Blurb: z.string(),
  Diff: z.enum(["easy", "medium", "hard"]),
  Type: z.enum(["Daily", "Normal"]),
  Capacity: z.number(),
  StartMonth: z.enum([
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ]),
  EndMonth: z.enum([
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ]),
}

export {questSchemaObject}
