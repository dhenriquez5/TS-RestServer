"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Usuario = conexion_1.default.define('Usuario', {
    nombre: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    estado: { type: sequelize_1.DataTypes.BOOLEAN }
});
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map