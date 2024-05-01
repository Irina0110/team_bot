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
exports.ThemeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ThemeService = class ThemeService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createThemeDto) {
        return this.prismaService.theme.create({
            data: createThemeDto,
        });
    }
    findAll() {
        return this.prismaService.theme.findMany();
    }
    async avalible() {
        const themes = await this.prismaService.theme.findMany({
            include: {
                comand: true
            }
        });
        return themes.filter(th => {
            if (th.comand.length === 0)
                return true;
            return th.comand.some(async (c) => {
                const teams = await this.prismaService.command.findMany({
                    where: {
                        id: c.id
                    },
                    include: {
                        User: true
                    }
                });
                return teams.length < th.max_count_team;
            });
        });
    }
    findOne(id) {
        return this.prismaService.theme.findFirst({
            where: {
                id
            }
        });
    }
    update(id, updateThemeDto) {
        return this.prismaService.theme.update({
            data: updateThemeDto,
            where: {
                id
            }
        });
    }
    remove(id) {
        return this.prismaService.theme.delete({
            where: {
                id
            }
        });
    }
};
ThemeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ThemeService);
exports.ThemeService = ThemeService;
//# sourceMappingURL=theme.service.js.map