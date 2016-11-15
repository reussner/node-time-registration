/**
 * SubProject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$SubProject',

  attributes: {
    "timestamp": {
      type: "timestamp"
    },
    "Job No_": {
      type: "nvarchar(20)",
      primaryKey: true
    },
    "Sub Project": {
      type: "nvarchar(50)",
      primaryKey: true
    },
    "Start Date": {
      type: "datetime"
    },
    "Chargeable": {
      type: "tinyint"
    },
    "Blocked": {
      type: "tinyint"
    }
  }
};

