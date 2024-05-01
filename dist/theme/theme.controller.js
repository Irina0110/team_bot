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
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const theme_service_1 = require("./theme.service");
const create_theme_dto_1 = require("./dto/create-theme.dto");
const update_theme_dto_1 = require("./dto/update-theme.dto");
const swagger_1 = require("@nestjs/swagger");
let ThemeController = class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
    }
    create(createThemeDto) {
        return this.themeService.create(createThemeDto);
    }
    findAll() {
        return this.themeService.findAll();
    }
    getAvalible() {
        return this.themeService.avalible();
    }
    findOne(id) {
        return this.themeService.findOne(+id);
    }
    update(id, updateThemeDto) {
        return this.themeService.update(+id, updateThemeDto);
    }
    remove(id) {
        return this.themeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_theme_dto_1.CreateThemeDto]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('available'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "getAvalible", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_theme_dto_1.UpdateThemeDto]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "remove", null);
ThemeController = __decorate([
    (0, swagger_1.ApiTags)('theme'),
    (0, common_1.Controller)('theme'),
    __metadata("design:paramtypes", [theme_service_1.ThemeService])
], ThemeController);
exports.ThemeController = ThemeController;
//# sourceMappingURL=theme.controller.js.map