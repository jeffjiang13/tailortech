-- CreateTable
CREATE TABLE "Layer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "visibility" BOOLEAN NOT NULL DEFAULT true,
    "zIndex" INTEGER NOT NULL DEFAULT 0,
    "subAccountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Layer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Layer_subAccountId_idx" ON "Layer"("subAccountId");
