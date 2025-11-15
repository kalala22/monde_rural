-- CreateEnum
CREATE TYPE "users_type_adhesion" AS ENUM ('membre', 'partenaire', 'benevole');

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255),
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "postnom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "type_adhesion" "users_type_adhesion" NOT NULL,
    "message" TEXT,
    "date_adhesion" TIMESTAMP(0),
    "admin_id" INTEGER,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "users"("email");

-- CreateIndex
CREATE INDEX "admin_id" ON "users"("admin_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_ibfk_1" FOREIGN KEY ("admin_id") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
