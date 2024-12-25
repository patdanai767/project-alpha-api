import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { ResumeDocument } from 'src/modules/resume/schemas/resume.schema';
import { UserRole } from 'src/shared/enums/roles.enums';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User username',
    type: String,
  })
  username?: string;

  @ApiProperty({
    description: 'User email',
    type: String,
  })
  email?: string;

  @ApiProperty({
    description: 'User fullname',
    type: String,
  })
  fullname?: string;

  @ApiProperty({
    description: 'User role',
    type: String,
    enum: [UserRole.TRAINEE, UserRole.TRAINER, UserRole.ADMIN],
  })
  role?: UserRole;

  @ApiProperty({
    type: String,
    example: 'Male',
  })
  sex?: string;

  @ApiProperty({
    type: String,
    example: "My name is Skibidi, I'm thai",
  })
  bio?: string;

  @ApiProperty({
    type: String,
  })
  profileImage?: string;

  @ApiProperty({
    type: mongoose.Schema.ObjectId,
  })
  resume?: ResumeDocument;
}
