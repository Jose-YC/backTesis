import { UseCase } from "../../../Types";
import { OrderRepository } from "../repositories/order.repository";


export class CreatePdf implements UseCase<PDFKit.PDFDocument, number>{
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(id: number): Promise<PDFKit.PDFDocument> {
        return this.repository.getPdf(id);
    }
    
}