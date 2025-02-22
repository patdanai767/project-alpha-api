import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { StatusCoin } from 'src/shared/enums/coins.enums';

export type CoinDocument = HydratedDocument<Coin>;

@Schema({ timestamps: true })
export class Coin {
  @Prop({
    required: true,
  })
  coin: number;

  @Prop({
    required: true,
  })
  status: StatusCoin;

  @Prop()
  currentCoin: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  user: UserDocument;
}

export const CoinSchema = SchemaFactory.createForClass(Coin);
CoinSchema.plugin(require('mongoose-autopopulate'));
