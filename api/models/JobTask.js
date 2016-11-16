/**
 * JobTask.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Job Task',

  attributes: {
    "timestamp": {
      type: ''
    },
    "Job No_": {
      type: ''
    },
    "Job Task No_": {
      type: ''
    },
    "Description": {
      type: ''
    },
    "Job Task Type": {
      type: ''
    },
    "WIP-Total": {
      type: ''
    },
    "Job Posting Group": {
      type: ''
    },
    "Totaling": {
      type: ''
    },
    "New Page": {
      type: ''
    },
    "No_ of Blank Lines": {
      type: ''
    },
    "Indentation": {
      type: ''
    },
    "Recognized Sales Amount": {
      type: ''
    },
    "Recognized Costs Amount": {
      type: ''
    },
    "Global Dimension 1 Code": {
      type: ''
    },
    "Global Dimension 2 Code": {
      type: ''
    },
    "Verrechnung": {
      type: ''
    },
    "WIP Method": {
      type: ''
    },
    "Recognized Sales G_L Amount": {
      type: ''
    },
    "Recognized Costs G_L Amount": {
      type: ''
    }
  }
};

