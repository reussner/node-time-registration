/**
 * ResourceUnitOfMeasure.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Resource Unit of Measure',

  attributes: {
    'timestamp': {
      type: 'timestamp'
    },

    'Resource No_': {
      type: ''
    },

    'Code': {
      type: ''
    },

    'Qty_per Unit of Measure': {
      type: ''
    },

    'Related to Base Unit of Meas_': {
      type: ''
    }
  }
};

