import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  //Initialize firebase, config file at'./config/admin-key.json'
  const admin = require("firebase-admin");

  const serviceAccount = require("./../config/admin-key.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });




  const app = await NestFactory.create(AppModule);
  //Add cors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
