import { Sequelize } from "sequelize";

const db = new Sequelize('cursonode','root','',{
    host:'localhost',
    dialect:'mysql',
    //logging:false
});

export default db;

