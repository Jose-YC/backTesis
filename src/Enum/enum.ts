export enum OrderState {
    PENDING = 'PENDING',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
}

export enum ClientType {
    NATURAL = 'NATURAL',
    JURIDICO = 'JURIDICO'
}

export enum PaymentMethod {
    EFECTIVO = 'EFECTIVO',
    CREDITO = 'CREDITO',
    DEBITO = 'DEBITO',
    TRANSFERENCIA = 'TRANSFERENCIA'
}

export enum DocumentType {
    BOLETA = 'BOLETA',
    FACTURA = 'FACTURA',
    TICKET = 'TICKET',
}