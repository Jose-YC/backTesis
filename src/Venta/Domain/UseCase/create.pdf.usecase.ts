import {  CreateVentaPDFUseCase } from "../../../Types";
import { VentaRepository } from "../repositories/venta.repository";



export class CreateVentaPdf implements CreateVentaPDFUseCase{
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(id: number): Promise<PDFKit.PDFDocument> {
        return this.repository.getPdf(id);
    }
    
}