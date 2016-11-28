/**
 * TimeRegEntry.js
 *
 * @description :: This model represents an entry for the time registration: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localMongoDb',

  attributes: {
    owner: {
      type: 'string'
    },
    project: {
      type: 'string'
    },
    task: {
      type: 'string'
    },
    subproject: {
      type: 'string'
    },
    comment: {
      type: 'string'
    },
    time: {
      type: 'float'
    },
    unit: {
      type: 'string'
    },
    flat: {
      type: 'boolean'
    },
    ticket: {
      type: 'boolean'
    },
    review: {
      type: 'boolean'
    },
    chargeable: {
      type: 'boolean'
    },
    chargeableTime: {
      type: 'float'
    },
    entryDate: {
      type: 'datetime'
    }
  }

};
