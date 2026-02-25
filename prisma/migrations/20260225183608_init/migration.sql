-- CreateEnum
CREATE TYPE "TipoUnidade" AS ENUM ('HOSPITAL', 'UPA', 'UBS');

-- CreateEnum
CREATE TYPE "TipoAtendimento" AS ENUM ('PREFERENCIAL', 'NORMAL');

-- CreateTable
CREATE TABLE "Unidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoUnidade" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fila" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoAtendimento" NOT NULL,
    "chamada" BOOLEAN NOT NULL DEFAULT false,
    "unidadeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fila_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fila" ADD CONSTRAINT "Fila_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
