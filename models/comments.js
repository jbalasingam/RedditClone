/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    comment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'comments'
  });
};
