import { Module } from '@nestjs/common';
import { ApiRecipesController } from './api-recipes.controller';
import { ApiRecipesService } from './api-recipes.service';

@Module({
  controllers: [ApiRecipesController],
  providers: [ApiRecipesService],
  exports: [ApiRecipesService],
})
export class ApiRecipesModule {}
