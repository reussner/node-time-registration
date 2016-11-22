/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Employee',

  attributes: {
    "timestamp": {
      type: "timestamp"
    },

    "No_": {
      type: "nvarchar(20)",
      primaryKey: true
    },

    "First Name": {
      type: "nvarchar(30)"
    },

    "Middle Name": {
      type: "nvarchar(30)"
    },

    "Last Name": {
      type: "nvarchar(30)"
    },

    "Initials": {
      type: "nvarchar(30)"
    },

    "Job Title": {
      type: "nvarchar(30)"
    },

    "Search Name": {
      type: "nvarchar(30)"
    },

    "Address": {
      type: "nvarchar(50)"
    },

    "Address 2": {
      type: "nvarchar(50)"
    },

    "City": {
      type: "nvarchar(30)"
    },

    "Post Code": {
      type: "nvarchar(20)"
    },

    "County": {
      type: "nvarchar(30)"
    },

    "Phone No_": {
      type: "nvarchar(30)"
    },

    "Mobile Phone No_": {
      type: "nvarchar(30)"
    },

    "E-Mail": {
      type: "nvarchar(80)"
    },

    "Alt_ Address Code": {
      type: "nvarchar(10)"
    },

    "Alt_ Address Start Date": {
      type: "datetime"
    },

    "Alt_ Address End Date": {
      type: "datetime"
    },

    "Picture": {
      type: "image"
    },

    "Birth Date": {
      type: "datetime"
    },

    "Social Security No_": {
      type: "nvarchar(30)"
    },

    "Union Code": {
      type: "nvarchar(10)"
    },

    "Union Membership No_": {
      type: "nvarchar(30)"
    },

    "Gender": {
      type: "int"
    },

    "Country_Region Code": {
      type: "nvarchar(10)"
    },

    "Manager No_": {
      type: "nvarchar(20)"
    },

    "Emplymt_ Contract Code": {
      type: "nvarchar(10)"
    },

    "Statistics Group Code": {
      type: "nvarchar(10)"
    },

    "Employment Date": {
      type: "datetime"
    },

    "Status": {
      type: "int"
    },

    "Inactive Date": {
      type: "datetime"
    },

    "Cause of Inactivity Code": {
      type: "nvarchar(10)"
    },

    "Termination Date": {
      type: "datetime"
    },

    "Grounds for Term_ Code": {
      type: "nvarchar(10)"
    },

    "Global Dimension 1 Code": {
      type: "nvarchar(20)"
    },

    "Global Dimension 2 Code": {
      type: "nvarchar(20)"
    },

    "Resource No_": {
      type: "nvarchar(20)"
    },

    "Last Date Modified": {
      type: "datetime"
    },

    "Extension": {
      type: "nvarchar(30)"
    },

    "Pager": {
      type: "nvarchar(30)"
    },

    "Fax No_": {
      type: "nvarchar(30)"
    },

    "Company E-Mail": {
      type: "nvarchar(80)"
    },

    "Title": {
      type: "nvarchar(30)"
    },

    "Salespers__Purch_ Code": {
      type: "nvarchar(10)"
    },

    "No_ Series": {
      type: "nvarchar(10)"
    },

    "Cost Center Code": {
      type: "nvarchar(20)"
    },

    "Cost Object Code": {
      type: "nvarchar(20)"
    },

    "Geschäftsbereich": {
      type: "int"
    },

    "Mitarbeitergespräch": {
      type: "datetime"
    },

    "Firmen Mobilnr_": {
      type: "nvarchar(30)"
    },

    "SkypeAccount": {
      type: "nvarchar(30)"
    },

    "InfosimLocation": {
      type: "nvarchar(20)"
    },

    "Steuer ID": {
      type: "nvarchar(20)"
    },

    "Month Of Birth": {
      type: "int"
    },

    "Ausbildung": {
      type: "nvarchar(100)"
    },

    "Day Of Birth": {
      type: "int"
    },

    "Vacation Entitlement": {
      type: "decimal(38,20)"
    },

    "Vacation": {
      type: "decimal(38,20)"
    },

    "Remaining Vacation": {
      type: "decimal(38,20)"
    },

    "Real Vacation Entitlement": {
      type: "decimal(38,20)"
    }
  }
};

