/**
 * Resource.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  connection: 'infosimNavSql',
  tableName: 'Infosim$Resource',

  attributes: {
    "timestamp": {
      type: "timestapm"
    },
    "No_": {
      type: "nvarchar(20)",
      primaryKey: true
    },
    "Type": {
      type: "int"
    },
    "Name": {
      type: "nvarchar(50)"
    },
    "Search Name": {
      type: "nvarchar(50)"
    },
    "Name 2": {
      type: "nvarchar(50)"
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
    "Social Security No_": {
      type: "nvarchar(30)"
    },
    "Job Title": {
      type: "nvarchar(30)"
    },
    "Education": {
      type: "nvarchar(30)"
    },
    "Contract Class": {
      type: "nvarchar(30)"
    },
    "Employment Date": {
      type: "datetime"
    },
    "Resource Group No_": {
      type: "nvarchar(20)"
    },
    "Global Dimension 1 Code": {
      type: "nvarchar(20)"
    },
    "Global Dimension 2 Code": {
      type: "nvarchar(20)"
    },
    "Base Unit of Measure": {
      type: "nvarchar(10)"
    },
    "Direct Unit Cost": {
      type: "decimal(38,20)"
    },
    "Indirect Cost _": {
      type: "decimal(38,20)"
    },
    "Unit Cost": {
      type: "decimal(38,20)"
    },
    "Profit _": {
      type: "decimal(38,20)"
    },
    "Price_Profit Calculation": {
      type: "int"
    },
    "Unit Price": {
      type: "decimal(38,20)"
    },
    "Vendor No_": {
      type: "nvarchar(20)"
    },
    "Last Date Modified": {
      type: "datetime"
    },
    "Blocked": {
      type: "tinyint"
    },
    "Gen_ Prod_ Posting Group": {
      type: "nvarchar(10)"
    },
    "Picture": {
      type: "image"
    },
    "Post Code": {
      type: "nvarchar(20)"
    },
    "County": {
      type: "nvarchar(30)"
    },
    "Automatic Ext_ Texts": {
      type: "tinyint"
    },
    "No_ Series": {
      type: "nvarchar(10)"
    },
    "Tax Group Code": {
      type: "nvarchar(10)"
    },
    "VAT Prod_ Posting Group": {
      type: "nvarchar(10)"
    },
    "Country_Region Code": {
      type: "nvarchar(10)"
    },
    "IC Partner Purch_ G_L Acc_ No_": {
      type: "nvarchar(20)"
    },
    "Service Zone Filter": {
      type: "nvarchar(10)"
    },
    "E-Mail": {
      type: "nvarchar(250)"
    },
    "Use Time Sheet": {
      type: "tinyint"
    },
    "Time Sheet Owner User ID": {
      type: "nvarchar(50)"
    },
    "Time Sheet Approver User ID": {
      type: "nvarchar(50)"
    },
    "NAV Granule ID": {
      type: "int"
    },
    "NAV SKU": {
      type: "int"
    },
    "NAV Prerequesites": {
      type: "nvarchar(100)"
    },
    "Division": {
      type: "int"
    },
    "Default Deferral Template Code": {
      type: "nvarchar(10)"
    }
  }
};

