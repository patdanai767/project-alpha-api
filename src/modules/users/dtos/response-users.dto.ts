import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/shared/enums/roles.enums';

export class UserResponseDto {
  @ApiProperty({
    description: 'User ID',
    type: String,
  })
  _id: string;

  @ApiProperty({
    description: 'User username',
    type: String,
  })
  username: string;

  @ApiProperty({
    description: 'User email',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'User fullname',
    type: String,
  })
  fullname: string;

  @ApiProperty({
    description: 'User role',
    type: String,
    enum: [UserRole.TRAINEE, UserRole.TRAINER],
  })
  role: UserRole;

  @ApiProperty({
    description: 'User created date',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User updated date',
    type: Date,
  })
  updatedAt: Date;
}
