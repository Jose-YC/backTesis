import {  UseCase } from "../../../Types";
import { VentaRepository } from "../repositories/venta.repository";



export class CreateVentaPdf implements UseCase<PDFKit.PDFDocument, number> {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(id: number): Promise<PDFKit.PDFDocument> {
        return this.repository.getPdf(id);
    }
    
}