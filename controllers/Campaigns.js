'use strict';

var utils = require('../utils/writer.js');
var Campaigns = require('../service/CampaignsService');

module.exports.dashboardV3_0CampaignsTrackedGET = function dashboardV3_0CampaignsTrackedGET (req, res, next, campaign_ids, company_id, limit, offset) {
  Campaigns.dashboardV3_0CampaignsTrackedGET(campaign_ids, company_id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
