import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  SECRET_JWT: get('SECRET_JWT').required().asString(),
  NODE_ENV: get('NODE_ENV').required().asString(),
  WEBSERVICE_URL: get('WEBSERVICE_URL').required().asString(), 
  
  POSTGRES_URL: get('POSTGRES_URL').required().asString(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),

  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: get('MONGO_USER').required().asString(),
  MONGO_PASS: get('MONGO_PASS').required().asString(),

  MAILER_EMAIL: get('MAILER_EMAIL').required().asEmailString(),
  MAILER_KEY: get('MAILER_KEY').required().asString(),
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
}