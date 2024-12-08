import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  SECRET_JWT: get('SECRET_JWT').required().asString(),
  NODE_ENV: get('NODE_ENV').required().asString(),
  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(), 
  CLOUDINARY_URL: get('CLOUDINARY_URL').required().asString(), 
  
  POSTGRES_URL: get('POSTGRES_URL').required().asString(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),

  MAILER_EMAIL: get('MAILER_EMAIL').required().asEmailString(),
  MAILER_KEY: get('MAILER_KEY').required().asString(),
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
}