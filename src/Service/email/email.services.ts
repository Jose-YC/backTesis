import nodemailer, { Transporter } from 'nodemailer'

interface sendEmailOption {
    to: string | string[],
    subject: string,
    html:string,
    attachments?: Attachment[]
}

interface Attachment {
    filename: string,
    path: string,
}

export class EmailService {

    private transport:Transporter;

    constructor(
        mailerServive:string,
        mailerEmail:string,
        mailerKey:string,
    ){
        this.transport = nodemailer.createTransport({
            service: mailerServive,
            auth: {
                user: mailerEmail,
                pass: mailerKey,
              },
        });
    }



    async sendEmail(option:sendEmailOption){
        const {to, subject, html, attachments = []} = option;
            const send = await this.transport.sendMail({to, subject, html, attachments});
            return send
    }  
    
    async sendEmailToken(to: string | string[], link: string){
        const subject = 'Email verificate';
        const html = `
        <h1>Validate your email</h1>
        <p>Click on the following link to validate your email</p>
        <a href="${link}">Validate your email: ${link}</a>
        `;

        const send = await this.sendEmail({to, subject, html})
        return send
    }  
    
  
  }