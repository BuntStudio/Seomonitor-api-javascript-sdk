'use strict';

var utils = require('../utils/writer.js');
var OrganicTraffic = require('../service/OrganicTrafficService');

module.exports.organic_trafficV3_0Daily_trafficGET = function organic_trafficV3_0Daily_trafficGET (req, res, next, campaign_id, start_date, end_date, segment) {
  OrganicTraffic.organic_trafficV3_0Daily_trafficGET(campaign_id, start_date, end_date, segment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organic_trafficV3_0KeywordsGET = function organic_trafficV3_0KeywordsGET (req, res, next, campaign_id, start_date, end_date, segment, limit, offset, order_by, order_direction, tracking_status, search) {
  OrganicTraffic.organic_trafficV3_0KeywordsGET(campaign_id, start_date, end_date, segment, limit, offset, order_by, order_direction, tracking_status, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
