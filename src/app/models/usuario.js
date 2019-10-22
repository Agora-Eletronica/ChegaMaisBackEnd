const Sequelize, { Model } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
        nome: Sequelize.STRING,
        endereco: Sequelize.STRING,
        idade: Sequelize.NUMBER,
        cpf: Sequelize.NUMBER,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Usuario;
