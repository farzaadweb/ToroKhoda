import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { json, urlencoded } from "express";
import { AppModule } from "./app.module";
import { EnvConfig } from "./app/configs/environment.config";
import { HttpExceptionFilter } from "./app/exceptions/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableVersioning({ type: VersioningType.URI, defaultVersion: "2" });

  app.use(json({ limit: "100mb" }));
  app.use(urlencoded({ extended: true, limit: "100mb" }));

  app.enableCors({
    origin: EnvConfig.apiOrigins,
    methods: ["GET", "PUT", "PATCH", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 204,
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(EnvConfig.apiPort || 3000);
}
bootstrap();
