import { Sequelize } from 'sequelize';
import { initModels } from '../beans/init-models';

const sequelize = async (): Promise<Sequelize> => {
  let sequelize: Sequelize;
  if (!sequelize) {
    sequelize = new Sequelize('sql6489724', 'sql6489724', 'iqdA57hvNd', {
      host: 'sql6.freemysqlhosting.net',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: { decimalNumbers: true },
    });

    initModels(sequelize);
  }

  return sequelize;
};

export default sequelize;
