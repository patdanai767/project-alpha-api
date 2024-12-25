import { Module } from '@nestjs/common';
import { WorkExpsService } from './work-exps.service';
import { WorkExpsController } from './work-exps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkExp, WorkExpSchema } from './schemas/work-exp.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: WorkExp.name, schema: WorkExpSchema}
    ])
  ],
  providers: [WorkExpsService],
  controllers: [WorkExpsController]
})
export class WorkExpsModule {}
