import { Rating } from './schemas/rating.schema';
import { Model } from 'mongoose';
import { CreateRatingDto } from './dtos/create-rating.dto';
export declare class RatingService {
    private ratingModel;
    constructor(ratingModel: Model<Rating>);
    findAll(): Promise<Rating[]>;
    createRating(CreateRatingDto: CreateRatingDto, userId: string): Promise<Rating>;
    deleteRatingById(id: string): Promise<Rating>;
}
