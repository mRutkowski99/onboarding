import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiRecipesService } from './api-recipes.service';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';

@Controller('recipe')
export class ApiRecipesController {
  constructor(private service: ApiRecipesService) {}

  @Get()
  getAll(): Recipe[] {
    return this.service.getAll();
  }

  @Get(':id')
  getSingle(@Param('id') id: string): Recipe {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() payload: CreateUpdateRecipePayload) {
    this.service.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: CreateUpdateRecipePayload) {
    this.service.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.delete(id);
  }
}
