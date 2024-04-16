-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_subAccountId_fkey" FOREIGN KEY ("subAccountId") REFERENCES "SubAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
