import { Request } from "express";
import { JwtInterface } from "./jwt-payload.interface";

export interface AuthenticatedRequest extends Request {
    user: JwtInterface
}