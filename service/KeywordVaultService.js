'use strict';


/**
 * Get Keyword Data by List
 * This endpoint returns the SERP, search and ranking data for the keywords in a specified list within the Keyword Vault of a specified campaign. The ranking data is for both the website tracked in the specified SEOmonitor campaign and for the specified competitor websites.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * list String The name of the list created in the Keyword Vault for which you want to return keyword data.
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  `search_volume`  `year-over-year`  `rank`  `rank_trend`  `percentage_clicks`  If not otherwise specified, the returned data will be sorted by `connection_strength` by default. (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term.  The search parameter is case-insensitive, allowing partial matches irrespective of casing.  (optional)
 * returns keyword-vault-get-keyword-data-by-list
 **/
exports.keyword_vaultV3_0Get_keyword_data_by_listGET = function(campaign_id,list,limit,offset,order_by,order_direction,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword" : "side tables",
  "search_data" : {
    "search_volume" : 74000,
    "year_over_year" : 0
  },
  "monthly_searches" : {
    "month" : "September",
    "year" : 2023,
    "search_volume" : 74000
  },
  "ranking_data" : {
    "updated_on" : "2023-11-01",
    "rank" : 38,
    "trend" : 38,
    "landing_page" : "https://www.notonthehighstreet.com/home/furniture/side-tables"
  },
  "serp_data" : {
    "percentage_clicks" : 0.64,
    "serp_features" : [ {
      "feature" : "SHP",
      "position" : 1
    }, {
      "feature" : "ADD",
      "position" : 101
    }, {
      "feature" : "KNG",
      "position" : 999
    } ]
  },
  "tracked_keyword_id" : 3995717
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Overview Data
 * This endpoint returns the overall aggregated search, SERP, and Visibility data for all the keywords of a specified list in the Keyword Vault.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * list String The name of the list created in the Keyword Vault for which you want to return keyword data.
 * returns keyword-vault-get-overview-data
 **/
exports.keyword_vaultV3_0Get_overview_dataGET = function(campaign_id,list) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword_count" : 108,
  "search_data" : {
    "search_volume" : 25073400,
    "monthly_searches" : [ {
      "month" : "October",
      "year" : 2022,
      "search_volume" : 36918080
    } ],
    "year_over_year" : 1.49
  },
  "serp_data" : {
    "percentage_clicks" : 0.77,
    "serp_features" : [ {
      "feature" : "NEW",
      "count" : 4
    }, {
      "feature" : "IMG",
      "count" : 5
    }, {
      "feature" : "QNS",
      "count" : 30
    }, {
      "feature" : "DEF",
      "count" : 1
    }, {
      "feature" : "SHP",
      "count" : 1
    } ]
  },
  "visibility_data" : {
    "visibility" : 26.51,
    "trend" : 0
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

