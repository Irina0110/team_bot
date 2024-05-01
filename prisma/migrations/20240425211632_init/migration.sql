-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('CUSTOMER', 'EVENT_ORGANIZATOR', 'CANDIDAT', 'TEAM_MEMBER', 'TEAMLEAD');

-- CreateTable
CREATE TABLE "Theme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "max_count_team" INTEGER NOT NULL DEFAULT 1,
    "max_member_in_team" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Command" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "theme_id" INTEGER NOT NULL,

    CONSTRAINT "Command_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "telegram_chat_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'CANDIDAT',
    "command_id" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Theme_name_key" ON "Theme"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Command_name_key" ON "Command"("name");

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_command_id_fkey" FOREIGN KEY ("command_id") REFERENCES "Command"("id") ON DELETE SET NULL ON UPDATE CASCADE;
