-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "firstTeamCountryCode" TEXT NOT NULL,
    "secondTeamCountryCode" TEXT NOT NULL,
    "firstTeamPoints" INTEGER NOT NULL DEFAULT 0,
    "secondTeamPoints" INTEGER NOT NULL DEFAULT 0,
    "group" TEXT NOT NULL,
    "winner" TEXT NOT NULL DEFAULT 'EMP'
);
INSERT INTO "new_Game" ("date", "firstTeamCountryCode", "firstTeamPoints", "group", "id", "secondTeamCountryCode", "secondTeamPoints") SELECT "date", "firstTeamCountryCode", "firstTeamPoints", "group", "id", "secondTeamCountryCode", "secondTeamPoints" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
