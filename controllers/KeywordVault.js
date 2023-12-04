'use strict';

var utils = require('../utils/writer.js');
var KeywordVault = require('../service/KeywordVaultService');

module.exports.keyword_vaultV3_0Get_keyword_data_by_listGET = function keyword_vaultV3_0Get_keyword_data_by_listGET (req, res, next, campaign_id, list, limit, offset, order_by, order_direction, search) {
  KeywordVault.keyword_vaultV3_0Get_keyword_data_by_listGET(campaign_id, list, limit, offset, order_by, order_direction, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.keyword_vaultV3_0Get_overview_dataGET = function keyword_vaultV3_0Get_overview_dataGET (req, res, next, campaign_id, list) {
  KeywordVault.keyword_vaultV3_0Get_overview_dataGET(campaign_id, list)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
