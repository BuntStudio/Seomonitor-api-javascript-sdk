'use strict';

var utils = require('../utils/writer.js');
var Forecast = require('../service/ForecastService');

module.exports.forecastV3_0KeywordsGET = function forecastV3_0KeywordsGET (req, res, next, campaign_id, forecast_id, limit, offset) {
  Forecast.forecastV3_0KeywordsGET(campaign_id, forecast_id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forecastV3_0ObjectiveGET = function forecastV3_0ObjectiveGET (req, res, next, campaign_id, forecast_id) {
  Forecast.forecastV3_0ObjectiveGET(campaign_id, forecast_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forecastV3_0ScenarioGET = function forecastV3_0ScenarioGET (req, res, next, campaign_id, forecast_id) {
  Forecast.forecastV3_0ScenarioGET(campaign_id, forecast_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forecastV3_0ScenariosGET = function forecastV3_0ScenariosGET (req, res, next, campaign_id) {
  Forecast.forecastV3_0ScenariosGET(campaign_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
