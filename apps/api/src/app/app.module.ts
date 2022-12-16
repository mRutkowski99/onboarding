import { Module } from '@nestjs/common';
import { ApiRecipesModule } from '@onboarding/api/recipes';

@Module({
  imports: [ApiRecipesModule],
})
export class AppModule {}
