-- CreateTable
CREATE TABLE "Funcionario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "unidadeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_cpf_key" ON "Funcionario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
