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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const role_guard_1 = require("./role.guard");
const constants_1 = require("./constants");
let AppController = class AppController {
    constructor(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    login(req) {
        const token = this.authService.generateToken(req.user);
        return token;
    }
    webDeveloper(req) {
        return 'Web Developer role' + JSON.stringify(req.user);
    }
    androidDeveloper(req) {
        return 'Android Developer role' + JSON.stringify(req.user);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/web-developer'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), new role_guard_1.RoleGuard(constants_1.CONSTANTS.ROLES.WEB_DEVELOPER)),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "webDeveloper", null);
__decorate([
    (0, common_1.Get)('/android-developer'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), new role_guard_1.RoleGuard(constants_1.CONSTANTS.ROLES.ANDROID_DEVELOPER)),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "androidDeveloper", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map