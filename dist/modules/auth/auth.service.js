"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(LoginDto) {
        const existsUser = await this.userService.getUserByEmail(LoginDto.email);
        if (!(LoginDto.password === existsUser.password)) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        const accessToken = await this.generateAccessToken(existsUser._id);
        const { password, ...user } = existsUser;
        return { accessToken, user };
    }
    async register(RegisterDto) {
        const existEmail = await this.userService.getUserByEmail(RegisterDto.email);
        const existUsername = await this.userService.getUserByUsername(RegisterDto.username);
        if (existEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
        if (existUsername) {
            throw new common_1.ConflictException('Username already exists');
        }
        const user = await this.userService.createUser(RegisterDto);
        const accessToken = await this.generateAccessToken(user._id);
        return { user, accessToken };
    }
    generateAccessToken(userId) {
        const payload = { sub: userId };
        return this.jwtService.signAsync(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map