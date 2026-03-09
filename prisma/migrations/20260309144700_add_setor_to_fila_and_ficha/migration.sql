-- CreateEnum
CREATE TYPE "Setor" AS ENUM ('RECEPCAO', 'TRIAGEM', 'CONSULTA');

-- AlterTable
ALTER TABLE "FichaAtendimento" ADD COLUMN     "setor" "Setor" NOT NULL DEFAULT 'TRIAGEM';

-- AlterTable
ALTER TABLE "Fila" ADD COLUMN     "setor" "Setor" NOT NULL DEFAULT 'TRIAGEM';
