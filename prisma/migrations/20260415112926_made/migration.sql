/*
  Warnings:

  - Made the column `Capacity` on table `Quests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Quests" ALTER COLUMN "Capacity" SET NOT NULL;
