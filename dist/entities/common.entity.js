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
exports.CommonEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let CommonEntity = class CommonEntity {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)({ unsigned: true }),
    __metadata("design:type", Number)
], CommonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
    }),
    __metadata("design:type", String)
], CommonEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
    }),
    __metadata("design:type", String)
], CommonEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", String)
], CommonEntity.prototype, "deletedAt", void 0);
CommonEntity = __decorate([
    (0, graphql_1.ObjectType)()
], CommonEntity);
exports.CommonEntity = CommonEntity;
//# sourceMappingURL=common.entity.js.map