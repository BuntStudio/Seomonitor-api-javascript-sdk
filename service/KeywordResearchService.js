'use strict';


/**
 * Get URL/Domain Overview
 * This endpoint returns the overall aggregated search, SERP, and Visibility data for all the ranking keywords of a specified domain or URL.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * url String This parameter specifies the domain or URL path for which you want to return the data.   If you request a domain, the endpoint will return the data for the entire domain.   If you request a URL, the endpoint will return the data only for the specified URL path. 
 * gap_analysis String The type of keywords you want to return data for. Allowed values are `overlapping`, `non-overlapping`, or `all-keywords`.  If the `keyword_gap_type` is not specified, data for `all-keywords` is returned. (optional)
 * returns research-domain-overview
 **/
exports.researchV3_0Domain_overviewGET = function(campaign_id,url,gap_analysis) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "related_keywords" : 495,
  "search_data" : {
    "search_volume" : 887,
    "year_over_year" : 1.45,
    "monthly_searches" : [ {
      "month" : "June",
      "year" : 2023,
      "search_volume" : 889
    } ]
  },
  "serp_data" : {
    "percentage_clicks" : 0.77,
    "serp_features" : [ {
      "feature" : "IMG",
      "count" : 10
    } ]
  },
  "est_traffic" : {
    "my_traffic" : {
      "traffic" : 290000,
      "trend" : 0.1
    },
    "competitor_traffic" : {
      "traffic" : 1450000,
      "trend" : 0.3
    }
  },
  "visibility_data" : {
    "my_visibility" : {
      "visibility" : 0.19,
      "trend" : 0.1
    },
    "competitor_visibility" : {
      "visibility" : 0.47,
      "trend" : 0.3
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Ranking Keywords
 * This endpoint returns the keywords on which the specified domain or URL ranks in top 100. For each keyword, it will return SERP, search and two sets of ranking data for your campaign domain, and for the requested one.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * url String This parameter specifies the domain or URL path for which you want to return the keywords ranking in top 100.  If you request a domain, the endpoint will return the data for the entire domain.   If you request a URL, the endpoint will return the data only for the specified URL path.
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  `search_volume`  `year-over-year`  `rank`: Sorts the data based on the keyword rank for the requested domain or URL.  `rank_trend`: Sorts the data based on the trend in keyword ranking for the requested domain or URL.  `my_rank`: Sorts the data based on the keyword rank for the tracked website.  `my_rank_trend`: Sorts the data based on the trend in keyword ranking for the tracked website.  `percentage_clicks`: Sorts the data based on the percentage of clicks that end up on organic results after discounting the impact of the top 10 SERP features present on the keyword.  (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * gap_analysis String The type of keywords you want to return data for. Allowed values are `overlapping`, `non-overlapping`, or `all-keywords`.   If the `keyword_gap_type` is not specified, data for `all-keywords` is returned. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword name search. The API will return only those records where the keyword matches (fully or partially) the provided search term.  The search parameter is case-insensitive, allowing partial matches irrespective of casing.  (optional)
 * returns domain-rankings-data
 **/
exports.researchV3_0Domain_ranking_keywordsGET = function(campaign_id,url,limit,offset,order_by,order_direction,gap_analysis,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword" : "go fresco",
  "search_data" : {
    "search_volume" : 887,
    "year_over_year" : 1.45,
    "monthly_searches" : [ {
      "month" : "June",
      "year" : 2023,
      "search_volume" : 889
    } ]
  },
  "ranking_data" : {
    "updated_on" : "2023-09-06",
    "my_rank" : {
      "rank" : 45,
      "trend" : 3,
      "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
    },
    "competitor_rank" : {
      "rank" : 28,
      "trend" : -1,
      "landing_page" : "https://www.ubereats.com/gb/category/leicester-eng/dessert"
    }
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : [ {
      "feature" : "IMG",
      "position" : 4
    } ]
  },
  "tracked_keyword_id" : 1789784
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Keyword Data
 * This endpoint returns the SERP, search and your ranking data for the keywords specified in the request.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns. 
 * keywords String Comma-separated list of keyword phrases that you want to return data for. 
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  `search_volume`  `year-over-year`  `rank`  `rank_trend`  `percentage_clicks` (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * returns List
 **/
exports.researchV3_0KeywordsGET = function(campaign_id,keywords,limit,offset,order_by,order_direction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "name" : "go fresco",
  "search_data" : {
    "search_volume" : 18100,
    "year_over_year" : 1.49,
    "monthly_searches" : [ {
      "month" : "August",
      "year" : 2023,
      "search_volume" : 27100
    } ]
  },
  "ranking_data" : {
    "updated_on" : "2023-09-06",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : {
      "feature" : "IMG",
      "position" : 4
    }
  },
  "tracked_keyword_id" : 1789784
} ], [ {
  "name" : "go fresco",
  "search_data" : {
    "search_volume" : 18100,
    "year_over_year" : 1.49,
    "monthly_searches" : [ {
      "month" : "August",
      "year" : 2023,
      "search_volume" : 27100
    } ]
  },
  "ranking_data" : {
    "updated_on" : "2023-09-06",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : {
      "feature" : "IMG",
      "position" : 4
    }
  },
  "tracked_keyword_id" : 1789784
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Ranking Data
 * This endpoint returns the SERP, search, and ranking data for the keywords specified in the request, for both your campaign website and the specified domains or URLs.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns. 
 * keywords List A comma-separated list of keyword phrases that you want to return data for.
 * domains String A comma-separated list of domains for which you want to return the ranking data. The maximum number of domains allowed is 10.
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request   If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  `rank`  `rank_trend`  If you do not specify an `order_by`parameter, the API will sort the data by `rank` by default. (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * returns List
 **/
exports.researchV3_0Ranking_dataGET = function(campaign_id,keywords,domains,limit,offset,order_by,order_direction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "keyword" : "go fresco",
  "updated_on" : "2023-09-06",
  "ranking_data" : [ {
    "domain" : "deliveroo.co.uk",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  } ]
}, {
  "keyword" : "go fresco",
  "updated_on" : "2023-09-06",
  "ranking_data" : [ {
    "domain" : "deliveroo.co.uk",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Related Keywords
 * This endpoint returns the SERP, search, and your ranking data of the related keywords for a specified keyword (topic).
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * keyword String The topic for which you want to return related keywords' data.
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  `connection_strength`  `search_volume`  `year-over-year`  `rank`  `rank_trend`  `percentage_clicks`  If not otherwise specified, the returned data will be sorted by `connection_strength` by default. (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term. The search parameter is case-insensitive, allowing partial matches irrespective of casing.  (optional)
 * returns List
 **/
exports.researchV3_0Related_keywordsGET = function(campaign_id,keyword,limit,offset,order_by,order_direction,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "keyword" : "go fresco",
  "connection_strength" : 5,
  "search_data" : {
    "search_volume" : 887,
    "year_over_year" : 1.45,
    "monthly_searches" : [ {
      "month" : "June",
      "year" : 2023,
      "search_volume" : 889
    } ]
  },
  "ranking_data" : {
    "updated_on" : "2023-10-01",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : [ {
      "feature" : "IMG",
      "position" : 4
    } ]
  },
  "tracked_keyword_id" : 1789784
}, {
  "keyword" : "go fresco",
  "connection_strength" : 5,
  "search_data" : {
    "search_volume" : 887,
    "year_over_year" : 1.45,
    "monthly_searches" : [ {
      "month" : "June",
      "year" : 2023,
      "search_volume" : 889
    } ]
  },
  "ranking_data" : {
    "updated_on" : "2023-10-01",
    "rank" : 45,
    "trend" : 3,
    "landing_page" : "https://deliveroo.co.uk/restaurants/manchester/sale"
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : [ {
      "feature" : "IMG",
      "position" : 4
    } ]
  },
  "tracked_keyword_id" : 1789784
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Topic Overview
 * This endpoint returns the overall aggregated search, SERP, and your website's Visibility data for all the related keywords of a specified keyword (topic). 
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * keyword String The topic for which you want to return related keywords' data.
 * returns topics-overview
 **/
exports.researchV3_0Topic_overviewGET = function(campaign_id,keyword) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "related_keywords" : 495,
  "search_data" : {
    "search_volume" : 887,
    "year_over_year" : 1.45,
    "monthly_searches" : [ {
      "month" : "June",
      "year" : 2023,
      "search_volume" : 889
    } ]
  },
  "serp_data" : {
    "percentage_clicks" : 77,
    "serp_features" : [ {
      "feature" : "IMG",
      "count" : 10
    } ]
  },
  "visibility_data" : {
    "visibility" : 0.19,
    "trend" : -0.2
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

