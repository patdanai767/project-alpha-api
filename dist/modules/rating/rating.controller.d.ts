import { RatingService } from './rating.service';
import { Rating } from './schemas/rating.schema';
import { CreateRatingDto } from './dtos/create-rating.dto';
import { AuthenticatedRequest } from '../auth/interfaces/authenticated-request.interface';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    getRatings(): Promise<Rating[]>;
    createRating(CreateRatingDto: CreateRatingDto, req: AuthenticatedRequest): Promise<Rating>;
    deleteRating(id: string): Promise<Rating>;
}
