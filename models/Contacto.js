import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Contacto = db.define('contactos', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});
