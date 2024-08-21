import { Module } from "@nestjs/common";
import { InternalModule } from "./app/imports/internal.module";
import { PluginsModule } from "./app/imports/plugin.module";
import { GlobalModule } from "./modules/global/global.module";

@Module({
  imports: [GlobalModule, ...PluginsModule, ...InternalModule],
})
export class AppModule {}
