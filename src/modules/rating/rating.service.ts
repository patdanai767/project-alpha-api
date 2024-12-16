import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rating } from './schemas/rating.schema';
import { Model } from 'mongoose';
import { CreateRatingDto } from './dtos/create-rating.dto';

@Injectable()
export class RatingService {
    constructor(@InjectModel(Rating.name) private ratingModel:Model<Rating>) {}

    async findAll(): Promise<Rating[]>{
        return await this.ratingModel.find();
    }

    async createRating(CreateRatingDto:CreateRatingDto,userId:string):Promise<Rating>{
        return this.ratingModel.create({
            user_id:userId,
            ...CreateRatingDto,
        })
    }

    async deleteRatingById(id:string):Promise<Rating>{
        return this.ratingModel.findByIdAndDelete(id);
    }
}
