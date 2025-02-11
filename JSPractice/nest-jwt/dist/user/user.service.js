"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                username: 'User1',
                password: 'admin',
                email: 'user1@gmail.com',
                age: 21,
                role: constants_1.CONSTANTS.ROLES.ANDROID_DEVELOPER,
            },
            {
                username: 'User2',
                password: 'admin',
                email: 'user2@gmail.com',
                age: 22,
                role: constants_1.CONSTANTS.ROLES.WEB_DEVELOPER,
            },
            {
                username: 'User3',
                password: 'admin',
                email: 'user3@gmail.com',
                age: 23,
                role: constants_1.CONSTANTS.ROLES.WEB_DEVELOPER,
            },
        ];
    }
    getUserByUserName(userName) {
        return this.users.find((user) => user.username === userName);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map