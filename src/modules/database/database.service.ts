import { Logger, Provider } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { EnvConfig } from "src/app/configs/environment.config";
import { ModelsProvider } from "./model.service";

export const DatabaseService: Provider[] = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const logger = new Logger();

      try {
        const sequelize = new Sequelize({
          dialect: "mysql",
          host: EnvConfig.database.host,
          port: EnvConfig.database.port,
          username: EnvConfig.database.username,
          password: EnvConfig.database.password,
          database: EnvConfig.database.name,
          logging: true,
        });

        sequelize.addModels([...ModelsProvider]);

        await sequelize.sync({
          benchmark: true,
          alter: false,
        });

        await sequelize.authenticate();

        logger.debug("🧩🧩 Database connected successfully", "DatabaseService");

        return sequelize;
      } catch (error) {
        logger.error("Failed to connect database.");
        process.send(1);
      }
    },
  },
];
