'use strict';

var utils = require('../utils/writer.js');
var KeywordResearch = require('../service/KeywordResearchService');

module.exports.researchV3_0Domain_overviewGET = function researchV3_0Domain_overviewGET (req, res, next, campaign_id, url, gap_analysis) {
  KeywordResearch.researchV3_0Domain_overviewGET(campaign_id, url, gap_analysis)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.researchV3_0Domain_ranking_keywordsGET = function researchV3_0Domain_ranking_keywordsGET (req, res, next, campaign_id, url, limit, offset, order_by, order_direction, gap_analysis, search) {
  KeywordResearch.researchV3_0Domain_ranking_keywordsGET(campaign_id, url, limit, offset, order_by, order_direction, gap_analysis, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.researchV3_0KeywordsGET = function researchV3_0KeywordsGET (req, res, next, campaign_id, keywords, limit, offset, order_by, order_direction) {
  KeywordResearch.researchV3_0KeywordsGET(campaign_id, keywords, limit, offset, order_by, order_direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.researchV3_0Ranking_dataGET = function researchV3_0Ranking_dataGET (req, res, next, campaign_id, keywords, domains, limit, offset, order_by, order_direction) {
  KeywordResearch.researchV3_0Ranking_dataGET(campaign_id, keywords, domains, limit, offset, order_by, order_direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.researchV3_0Related_keywordsGET = function researchV3_0Related_keywordsGET (req, res, next, campaign_id, keyword, limit, offset, order_by, order_direction, search) {
  KeywordResearch.researchV3_0Related_keywordsGET(campaign_id, keyword, limit, offset, order_by, order_direction, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.researchV3_0Topic_overviewGET = function researchV3_0Topic_overviewGET (req, res, next, campaign_id, keyword) {
  KeywordResearch.researchV3_0Topic_overviewGET(campaign_id, keyword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
