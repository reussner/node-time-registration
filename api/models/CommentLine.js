/**
 * CommentLine.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Comment Line',

  attributes: {
    "timestamp": {
      type: ''
    },
    "Table Name": {
      type: '',
      primaryKey: true
    },
    "No_": {
      type: '',
      primaryKey: true
    },
    "Line No_": {
      type: '',
      primaryKey: true
    },
    "Date": {
      type: ''
    },
    "Code": {
      type: ''
    },
    "Comment": {
      type: ''
    }
  }
};

