const Sequelize, { Model } = require("sequelize");

class Balada extends Model {
  static init(sequelize) {
    super.init({
        nome: Sequelize.STRING,
        endereco: Sequelize.STRING,
        private: Sequelize.BOOLEAN,
        organizador: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Balada;
