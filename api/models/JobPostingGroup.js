/**
 * JobPostingGroup.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Job Posting Group',

  attributes: {
    "timestamp": {
      type: ''
    },
    "Code": {
      type: '',
      primaryKey: true
    },
    "WIP Costs Account": {
      type: ''
    },
    "WIP Accrued Costs Amount": {
      type: ''
    },
    "Job Costs Applied Account": {
      type: ''
    },
    "Job Costs Adjustment Account": {
      type: ''
    },
    "G_L Expense Acc_ (Contract)": {
      type: ''
    },
    "Job Sales Adjustment Account": {
      type: ''
    },
    "WIP Accrued Sales Account": {
      type: ''
    },
    "WIP Invoiced Sales Account": {
      type: ''
    },
    "Job Sales Applied Account": {
      type: ''
    },
    "Recognized Costs Account": {
      type: ''
    },
    "Recognized Sales Account": {
      type: ''
    },
    "Item Costs Applied Account": {
      type: ''
    },
    "Resource Costs Applied Account": {
      type: ''
    },
    "G_L Costs Applied Account": {
      type: ''
    }
  }
};

