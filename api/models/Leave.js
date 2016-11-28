/**
 * Leave.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localMongoDb',

  attributes: {
    leaveType: {
      type: 'string'
    },
    startDate: {
      type: 'date'
    },
    endDate: {
      type: 'date'
    },
    comment: {
      type: 'string'
    },
    approved: {
      type: 'boolean'
    },
    owner: {
      type: 'string'
    },
    days: {
      type: 'integer'
    },
    department: {
      type: 'string'
    }
  }
};

