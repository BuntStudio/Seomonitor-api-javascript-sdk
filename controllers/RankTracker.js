'use strict';

var utils = require('../utils/writer.js');
var RankTracker = require('../service/RankTrackerService');

module.exports.rank_trackerV3_0Daily_share_of_clicksGET = function rank_trackerV3_0Daily_share_of_clicksGET (req, res, next, campaign_id, start_date, end_date, group_id, keyword_ids) {
  RankTracker.rank_trackerV3_0Daily_share_of_clicksGET(campaign_id, start_date, end_date, group_id, keyword_ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0GroupsDaily_visibilityGET = function rank_trackerV3_0GroupsDaily_visibilityGET (req, res, next, campaign_id, start_date, end_date, group_id, keyword_ids, domain, feature_visibility) {
  RankTracker.rank_trackerV3_0GroupsDaily_visibilityGET(campaign_id, start_date, end_date, group_id, keyword_ids, domain, feature_visibility)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0GroupsDataGET = function rank_trackerV3_0GroupsDataGET (req, res, next, campaign_id, start_date, end_date, group_ids, limit, offset) {
  RankTracker.rank_trackerV3_0GroupsDataGET(campaign_id, start_date, end_date, group_ids, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0GroupsGET = function rank_trackerV3_0GroupsGET (req, res, next, campaign_id) {
  RankTracker.rank_trackerV3_0GroupsGET(campaign_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsCompetitionGET = function rank_trackerV3_0KeywordsCompetitionGET (req, res, next, campaign_id, start_date, end_date, device, search, keyword_ids, group_id, competitors, limit, offset, order_by, order_direction) {
  RankTracker.rank_trackerV3_0KeywordsCompetitionGET(campaign_id, start_date, end_date, device, search, keyword_ids, group_id, competitors, limit, offset, order_by, order_direction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsDaily_ranksGET = function rank_trackerV3_0KeywordsDaily_ranksGET (req, res, next, campaign_id, start_date, end_date, search, domain, group_id, keyword_ids, get_archive, limit, offset) {
  RankTracker.rank_trackerV3_0KeywordsDaily_ranksGET(campaign_id, start_date, end_date, search, domain, group_id, keyword_ids, get_archive, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsGET = function rank_trackerV3_0KeywordsGET (req, res, next, campaign_id, end_date, start_date, group_id, keyword_ids, limit, offset, order_by, order_direction, search) {
  RankTracker.rank_trackerV3_0KeywordsGET(campaign_id, end_date, start_date, group_id, keyword_ids, limit, offset, order_by, order_direction, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsImportPOST = function rank_trackerV3_0KeywordsImportPOST (req, res, next, body) {
  RankTracker.rank_trackerV3_0KeywordsImportPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsImport_statusGET = function rank_trackerV3_0KeywordsImport_statusGET (req, res, next, import_id, campaign_id) {
  RankTracker.rank_trackerV3_0KeywordsImport_statusGET(import_id, campaign_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsRanking_pagesGET = function rank_trackerV3_0KeywordsRanking_pagesGET (req, res, next, campaign_id, group_id, limit, offset, search) {
  RankTracker.rank_trackerV3_0KeywordsRanking_pagesGET(campaign_id, group_id, limit, offset, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsSerp_feature_presenceGET = function rank_trackerV3_0KeywordsSerp_feature_presenceGET (req, res, next, campaign_id, start_date, end_date, group_id, keyword_ids, limit, offset, search) {
  RankTracker.rank_trackerV3_0KeywordsSerp_feature_presenceGET(campaign_id, start_date, end_date, group_id, keyword_ids, limit, offset, search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rank_trackerV3_0KeywordsTop_resultsGET = function rank_trackerV3_0KeywordsTop_resultsGET (req, res, next, campaign_id, date, device, group_id, keyword_ids, limit, offset) {
  RankTracker.rank_trackerV3_0KeywordsTop_resultsGET(campaign_id, date, device, group_id, keyword_ids, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
