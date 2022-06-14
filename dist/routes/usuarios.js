"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const userRouter = (0, express_1.Router)();
userRouter.get('/', usuarios_1.getUsuarios);
userRouter.get('/:id', usuarios_1.getUsuario);
userRouter.post('/', usuarios_1.postUsuario);
userRouter.put('/:id', usuarios_1.putUsuario);
userRouter.delete('/:id', usuarios_1.deleteUsuario);
exports.default = userRouter;
//# sourceMappingURL=usuarios.js.map