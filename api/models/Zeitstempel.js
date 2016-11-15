//noinspection JSNonASCIINames
/**
 * Zeitstempel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    "timestamp": {
      type: "timestamp"
    },

    "ID": {
      type: "int",
      primaryKey: true
    },

    "Projekt Code": {
      type: "nvarchar(20)"
    },

    "Projektaufgaben Code": {
      type: "nvarchar(20)"
    },

    "Ressource": {
      type: "nvarchar(20)"
    },

    "Datum": {
      type: "datetime"
    },

    "Bemerkung": {
      type: "nvarchar(250)"
    },

    "Zeit": {
      type: "decimal(38,20)"
    },

    "Geschlossen": {
      type: "tinyint"
    },

    "Einheit": {
      type: "nvarchar(20)"
    },

    "Zeit (Basis)": {
      type: "decimal(38,20)"
    },

    "Abrechenbar": {
      type: "tinyint"
    },

    "Zeit abrechenbar": {
      type: "decimal(38,20)"
    },

    "Zeit abrechenbar (Basis)": {
      type: "decimal(38,20)"
    },

    "Erstellt am": {
      type: "datetime"
    },

    "Projektbuchungsgruppe": {
      type: "nvarchar(20)"
    },

    "Pauschal": {
      type: "tinyint"
    },

    "Ticket": {
      type: "tinyint"
    },

    "Sub Project": {
      type: "nvarchar(50)"
    },

    "Klärung": {
      type: "tinyint"
    },

    "jiraKey": {
      type: "nvarchar(64)"
    },

    "jiraWorklogId": {
      type: "int"
    },

    "isDeleted": {
      type: "tinyint"
    },

    "ExportedForAnaptis": {
      type: "tinyint"
    }
  }
};

