/*
  Warnings:

  - Added the required column `Capacity` to the `RBQuests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quests" ADD COLUMN     "Capacity" INTEGER;

-- AlterTable
ALTER TABLE "RBQuests" ADD COLUMN     "Capacity" INTEGER NOT NULL;
