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
exports.PassportLocalStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const user_service_1 = require("../user/user.service");
let PassportLocalStrategy = class PassportLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    async validate(name, password) {
        const user = this.userService.getUserByName(name);
        if (user === undefined)
            throw new common_1.UnauthorizedException();
        if ((await user).password === password)
            return user;
    }
};
exports.PassportLocalStrategy = PassportLocalStrategy;
exports.PassportLocalStrategy = PassportLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PassportLocalStrategy);
//# sourceMappingURL=passport.local.strategy.js.map