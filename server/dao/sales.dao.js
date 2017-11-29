const express 	= require('express');
const db        = require('../database/mongo');


var DAO = {

  find: function(req, res){
    db.find("sales").then(function(data){
      console.log("find:");
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  insertOne: function(req, res){
    console.log("insertOne: ", req.body);
    db.insertOne("sales", req.body).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  updateOne: function(req, res){
    console.log("updateOne: body: ", req.body);
    db.updateOne("sales", req.body ).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  deleteOne: function(req, res){
    console.log("deleteOne: id: ", req.params.id);
    db.deleteOne("sales", req.params.id ).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  }

}

module.exports = exports = DAO;
