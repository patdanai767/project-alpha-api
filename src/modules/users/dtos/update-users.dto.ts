import { ApiProperty } from '@nestjs/swagger';
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
}
