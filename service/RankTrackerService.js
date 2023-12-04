'use strict';


/**
 * Get Daily Share of Clicks
 * Retrieves the daily share of clicks of your domain and the top ten ones by visibility, on a specific keyword list, for the selected timeframe.   You can use this endpoint in two ways:  to retrieve the Share of Clicks data of an existing keyword group created in the SEOmonitor campaign, by specifying the `group_id` in the request.  to retrieve the Share of Clicks data of a list of requested keywords, by specifying the list of `keyword_ids` in the request.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.    Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the data, in YYYY-MM-DD format. (optional)
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the data in YYYY-MM-DD format. (optional)
 * group_id Integer The ID for the group of keywords for which the data must be returned.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign. (optional)
 * keyword_ids String This parameter allows you to specify the IDs of the keywords for which you want to return Visibility data. `keyword_ids` should be a comma-separated list of keyword IDs.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your keywords.  If you do not specify `keyword_ids`, the API will return data for all keywords that meet the other specified criteria (e.g. `group_id`). (optional)
 * returns daily-share-of-clicks
 **/
exports.rank_trackerV3_0Daily_share_of_clicksGET = function(campaign_id,start_date,end_date,group_id,keyword_ids) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2023-08-01",
  "domains" : [ {
    "domain" : "amazon.com",
    "share_of_clicks" : 0.53,
    "monthly_clicks" : 2345000
  }, {
    "domain" : "etsy.com",
    "share_of_clicks" : 0.43,
    "monthly_clicks" : 19345000
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Daily Group Visibility
 * Retrieves the daily Visibility and average weighted ranks of your website or of any other domain, for a group of keywords, over a specified timeframe.  You can use this endpoint in two ways:   to retrieve the Visibility data of an existing keyword group created in the SEOmonitor campaign, by specifying the `group_id` in the request.  to retrieve the Visibility data of a list of requested keywords, by specifying the list of `keyword_ids` in the request. 
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the data in YYYY-MM-DD format.
 * group_id Integer The ID for the group of keywords for which the data must be returned.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign.  (optional)
 * keyword_ids String This parameter allows you to specify the IDs of the keywords for which you want to return Visibility data. `keyword_ids` should be a comma-separated list of keyword IDs.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your keywords.   If you do not specify `keyword_ids`, the API will return data for all keywords that meet the other specified criteria (e.g. `group_id`). (optional)
 * domain String The domain name for which the Visibility will be returned.   If no domain is provided, the endpoint will return the data for the campaign's website. (optional)
 * feature_visibility String This parameter enables you to also retrieve the Visibility for one of the following SERP features: product_listing  `images_pack`  `questions`  `ads_pack`  `knowledge_graph`  `top_stories`  `local_pack`  `featured_snippet`  `recipes`  `news`  If no `feature_visibility` is specified, the endpoint will return an empty array. (optional)
 * returns group-daily-visibility
 **/
exports.rank_trackerV3_0GroupsDaily_visibilityGET = function(campaign_id,start_date,end_date,group_id,keyword_ids,domain,feature_visibility) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2023-08-01",
  "visibility" : {
    "desktop" : 0.53,
    "mobile" : 0.51
  },
  "avg_rank" : {
    "desktop" : 11.2,
    "mobile" : 12.3
  },
  "feature_visibility" : {
    "desktop" : 20.1,
    "mobile" : 0
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
 * Get Groups Data
 * With this endpoint, you can retrieve overall aggregated search and SERP data along with Visibility metrics and trends for all the keywords of the groups specified through group IDs.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date The start date of the timeframe for which you want to return the data in YYYY-MM-DD format.
 * end_date date The end date of the timeframe for which you want to return the data in YYYY-MM-DD format.
 * group_ids String The ID(s) of the group(s) for which you want to return data.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is `All Keywords` group, which means data will be returned for all keywords in the campaign. (optional)
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * returns List
 **/
exports.rank_trackerV3_0GroupsDataGET = function(campaign_id,start_date,end_date,group_ids,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "group_id" : 2261,
  "group_name" : "Bath Department",
  "keyword_counters" : {
    "main_keywords" : 123,
    "close_cariations" : 3
  },
  "serp_data" : {
    "desktop" : {
      "feature" : "IMG",
      "presence_count" : 100,
      "listed_count" : 10
    },
    "mobile" : {
      "feature" : "IMG",
      "presence_count" : 100,
      "listed_count" : 10
    }
  },
  "percentage_clicks" : 0.69,
  "search_intent" : {
    "informational" : 0.25,
    "commercial" : 0.2,
    "transactioal" : 0.55
  },
  "search_data" : {
    "search_volume" : 5903860,
    "monthly_searches" : [ {
      "month" : "January",
      "year" : "2023",
      "search_volume" : 8293610
    } ],
    "volume_by_device" : {
      "desktop" : 0.24605408651822203,
      "mobile" : 0.753945913481778
    },
    "year_over_year" : 1.5
  },
  "visibility" : {
    "desktop" : {
      "latest" : 11.8,
      "trend" : -0.44
    },
    "mobile" : {
      "latest" : 11.8,
      "trend" : -0.24
    }
  },
  "opportunity" : {
    "score" : 8,
    "difficulty_top_10" : "hard",
    "additional_monthly_sessions" : 18744,
    "avg_cpc" : 0.06
  },
  "traffic_data" : {
    "sessions" : 0,
    "ecommerce" : {
      "transactions" : 0,
      "revenue" : 0
    },
    "goals" : {
      "completions" : 0,
      "revenue" : 0
    }
  }
}, {
  "group_id" : 2261,
  "group_name" : "Bath Department",
  "keyword_counters" : {
    "main_keywords" : 123,
    "close_cariations" : 3
  },
  "serp_data" : {
    "desktop" : {
      "feature" : "IMG",
      "presence_count" : 100,
      "listed_count" : 10
    },
    "mobile" : {
      "feature" : "IMG",
      "presence_count" : 100,
      "listed_count" : 10
    }
  },
  "percentage_clicks" : 0.69,
  "search_intent" : {
    "informational" : 0.25,
    "commercial" : 0.2,
    "transactioal" : 0.55
  },
  "search_data" : {
    "search_volume" : 5903860,
    "monthly_searches" : [ {
      "month" : "January",
      "year" : "2023",
      "search_volume" : 8293610
    } ],
    "volume_by_device" : {
      "desktop" : 0.24605408651822203,
      "mobile" : 0.753945913481778
    },
    "year_over_year" : 1.5
  },
  "visibility" : {
    "desktop" : {
      "latest" : 11.8,
      "trend" : -0.44
    },
    "mobile" : {
      "latest" : 11.8,
      "trend" : -0.24
    }
  },
  "opportunity" : {
    "score" : 8,
    "difficulty_top_10" : "hard",
    "additional_monthly_sessions" : 18744,
    "avg_cpc" : 0.06
  },
  "traffic_data" : {
    "sessions" : 0,
    "ecommerce" : {
      "transactions" : 0,
      "revenue" : 0
    },
    "goals" : {
      "completions" : 0,
      "revenue" : 0
    }
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Groups List
 * This endpoint allows you to retrieve all keyword groups including their structure within folders, for a particular campaign ID. It provides the hierarchical data in a nested JSON structure, with the top-level groups (folders) for the campaign ID at the root level, and any groups nested under them. The response contains details on each group, including its unique ID, name, and type (folder, group, or smart group).
 *
 * campaign_id Integer The campaign ID for which the group structure will be returned.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * returns List
 **/
exports.rank_trackerV3_0GroupsGET = function(campaign_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "group_id" : 12345,
  "name" : "Keyword Opportunities",
  "type" : "folder",
  "subfolders" : {
    "group_id" : 178456,
    "name" : "High opportunity",
    "type" : "smart_group"
  }
}, {
  "group_id" : 12345,
  "name" : "Keyword Opportunities",
  "type" : "folder",
  "subfolders" : {
    "group_id" : 178456,
    "name" : "High opportunity",
    "type" : "smart_group"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Keywords Competition Data
 * This endpoint returns the specified competitors' ranking data for a campaign.
 *
 * campaign_id Integer The ID of the campaign for which keyword competitor ranking data must be returned.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date The start date of the date range to get ranking data for, in YYYY-MM-DD format. This is the earliest date of rankings to include.
 * end_date date The end date of the date range to get ranking data for, in YYYY-MM-DD format. This is the most recent date of rankings to include.
 * device String The device type to get ranking data for–either `desktop` or `mobile`.  The default selection is `desktop`.
 * search String Allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term. (optional)
 * keyword_ids String The IDs of the keywords for which you want to get competitor ranking data. `keyword_ids` should be a comma-separated list of keyword IDs.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your keywords.  If you do not specify `keyword_ids`, the API will return data for all keywords in the campaign that meet the other specified criteria (e.g. `group_id`). (optional)
 * group_id Integer The ID of a specific group in the campaign to get competitor ranking data for. If not specified, returns data for all of the keywords in the campaign.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign.  (optional)
 * competitors String An optional list of competitor domain names to filter the results by. The ranking data returned will only include the specified competitors. This parameter should be an array of strings containing one or more competitor domains, formatted as follows: `[\"examplecompetitor1.com\", \"examplecompetitor2.net\"]`   If you do not specify the competitors, the endpoint will return data for the competitors configured in the interface for the specified keyword group. (optional)
 * limit Integer Determines the maximum number of records to return in a single request. Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer The starting index within the results to begin returning data. Typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on the parameter specified. Allowed values:  `keyword`  `rank`  `rank_trend`: Sorts the data based on the trend in keyword ranking.   If you do not specify the `order_by` parameter, the data will be sorted by default by the keyword name (`keyword`). (optional)
 * order_direction String Determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  Note: The `order_direction` parameter works in conjunction with the `order_by` parameter. Use it to specify the direction of the sort after choosing the field to order by.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * returns keyword-competition
 **/
exports.rank_trackerV3_0KeywordsCompetitionGET = function(campaign_id,start_date,end_date,device,search,keyword_ids,group_id,competitors,limit,offset,order_by,order_direction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "[\n    {\n      \"keyword_id\": 123456,\n      \"keyword_name\": \"buy shoes online\",\n      \"competitors\": [\n        {\n          \"domain\": \"footwear.com\",\n          \"landing_page\": \"https://www.footwear.com/athletic-shoes\",\n          \"rank\": 5,\n          \"rank_trend\": 2\n        },\n        {\n          \"domain\": \"shoesgalore.com\",\n          \"landing_page\": \"https://www.shoesgalore.com/athletic\",\n          \"rank\": 7,\n          \"rank_trend\": -1\n        },\n        {\n          \"domain\": \"fancyshoes.com\",\n          \"landing_page\": \"https://www.fancyshoes.com/athletic-shoes\",\n          \"rank\": 10,\n          \"rank_trend\": 0\n        },\n        {\n          \"domain\": \"budgetshoes.net\",\n          \"landing_page\": \"https://www.budgetshoes.net/athletic\",\n          \"rank\": 12,\n          \"rank_trend\": 3\n        },\n        {\n          \"domain\": \"shoedeals.org\",\n          \"landing_page\": \"https://www.shoedeals.org/athletic\",\n          \"rank\": 15,\n          \"rank_trend\": -2\n        }\n    }\n]";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Daily Keyword Ranks
 * This endpoint returns the daily desktop and mobile ranks for your website or any other domain in a specified timeframe for actively tracked or archived keywords.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date The start date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * end_date date The end date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term.  The search parameter is case-insensitive, allowing partial matches irrespective of casing. (optional)
 * domain String The domain name for which the ranks will be returned.   If no `domain` is provided, the endpoint will return the data for the campaign's website. (optional)
 * group_id String The IDs of specific groups in the campaign to get keyword data for.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.   If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign.  (optional)
 * keyword_ids String The IDs of the keywords for which you want to return data. keyword_idsshould be a comma-separated list of keyword IDs.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your keywords.   If you do not specify `keyword_ids`, the API will return data for all keywords that meet the other specified criteria (e.g. `group_id`). (optional)
 * get_archive Boolean If true, it returns data only for the archived (deleted) keywords that had been active during the requested timeframe.  The default value is `false` and will return the data only for actively tracked keywords. (optional)
 * limit Integer Determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer The starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * returns keyword-daily-ranks
 **/
exports.rank_trackerV3_0KeywordsDaily_ranksGET = function(campaign_id,start_date,end_date,search,domain,group_id,keyword_ids,get_archive,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword_id" : 355,
  "keyword" : "librarie online",
  "ranking_data" : {
    "desktop" : [ {
      "date" : "2022-02-01",
      "rank" : 4
    }, {
      "date" : "2022-02-02",
      "rank" : 4
    } ],
    "mobile" : [ {
      "date" : "2022-02-01",
      "rank" : 4
    }, {
      "date" : "2022-02-02",
      "rank" : 4
    } ]
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
 * Get Keyword Data
 * This endpoint retrieves active keywords and their corresponding data within a specified timeframe from the Rank Tracker.   With this endpoint, you can get:  `Campaign-wide Data`: By default, this endpoint returns data for all active keywords in a specified campaign.  `Group-specific Data`: If you supply a `group_id`, the endpoint will return data only for the keywords in the specified group.  `Keyword-specific Data`: You can request data for specific keywords within a campaign by supplying their IDs using the `keyword_ids`  parameter. `keyword_ids` should be a comma-separated list of keyword IDs.   Note: Use other parameters like `limit`, `offset`, `order_by`, `order_direction`, and `search` to further customize the data retrieval as per your needs.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns. 
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the ranking and traffic data in YYYY-MM-DD format.  If you don't specify an `end_date`, the default is the current day.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the ranking and traffic data in YYYY-MM-DD format.  If you don't specify a `start_date`, the default is 30 days before the `end_date`.
 * group_id Integer The IDs of specific groups in the campaign to get keyword data for.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign. (optional)
 * keyword_ids String This parameter allows you to specify the IDs of the keywords for which you want to return data. `keyword_ids` should be a comma-separated list of keyword IDs.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your keywords.  If you do not specify `keyword_ids`, the API will return data for all keywords that meet the other specified criteria (e.g. `group_id`). (optional)
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are: - `keyword` - `search_volume` - `year-over-year` - `rank` - `rank_trend`: Sorts the data based on the trend in keyword ranking. - `rank_trend_impact`: Sorts the data based on the rank trend impact on Visibility. - `opportunity`: Sorts the data based on the keyword Opportunity score.  (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  Note: The `order_direction` parameter works in conjunction with the `order_by` parameter. Use it to specify the direction of the sort after choosing the field to order by with `order_by`.  If you do not specify an `order_direction`, the default is `asc`. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term. The search parameter is case-insensitive, allowing partial matches irrespective of casing. (optional)
 * returns List
 **/
exports.rank_trackerV3_0KeywordsGET = function(campaign_id,end_date,start_date,group_id,keyword_ids,limit,offset,order_by,order_direction,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 7882029,
  "name" : "victoria secret",
  "search_data" : {
    "average_search_volume" : 90500,
    "year_over_year" : 49.49,
    "search_seasonality" : [ {
      "date" : "2022-03-01",
      "search_volume" : 49500
    }, {
      "date" : "2022-04-01",
      "search_volume" : 90500
    }, {
      "date" : "2022-05-01",
      "search_volume" : 60500
    }, {
      "date" : "2022-06-01",
      "search_volume" : 60500
    }, {
      "date" : "2022-07-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-08-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-09-01",
      "search_volume" : 49500
    }, {
      "date" : "2022-10-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-11-01",
      "search_volume" : 110000
    }, {
      "date" : "2022-12-01",
      "search_volume" : 301000
    }, {
      "date" : "2023-01-01",
      "search_volume" : 135000
    }, {
      "date" : "2023-02-01",
      "search_volume" : 90500
    }, {
      "date" : "2023-03-01",
      "search_volume" : 74000
    } ],
    "sum_ctr_percentage" : 77
  },
  "rank_data" : {
    "desktop" : {
      "rank" : 100,
      "trend" : 0,
      "best_rank" : 6,
      "date_best_rank" : "2023-05-15"
    },
    "mobile" : {
      "rank" : 100,
      "trend" : 0,
      "best_rank" : 6,
      "date_best_rank" : "2023-05-15"
    }
  },
  "traffic_data" : {
    "currency" : "RON",
    "sessions" : 0,
    "ecommerce" : {
      "transactions" : 0,
      "revenue" : 0
    },
    "goals" : {
      "completions" : 0,
      "revenue" : 0
    }
  },
  "opportunity" : {
    "percentile" : 25,
    "difficulty_top_10" : "hard",
    "traffic_once_top_3" : {
      "additional_monthly_sessions" : 18744,
      "additional_monthly_revenue" : 76379,
      "equivalent_google_ads_spend" : 1125,
      "avg_cpc" : 0.06,
      "currency" : "RON"
    }
  },
  "landing_pages" : {
    "desktop" : "https://www.elefant.ro/list/parfumuri/filters/brand-Victoria%2527s%2BSecret",
    "mobile" : "https://www.elefant.ro/spray-de-corp-cu-sclipici-victoria-s-secret-love-spell-250-ml-pentru-femei_a4bce687-1d9f-40f2-a3d8-8d45ee6af39c"
  },
  "serp_features" : {
    "desktop" : [ {
      "name" : "Knowledge Graph",
      "position" : "side",
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Product Listing",
      "position" : "side",
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Ads Pack",
      "position" : 1,
      "campaign_present" : false,
      "data" : ""
    } ],
    "mobile" : [ {
      "name" : "Knowledge Graph",
      "position" : 6,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Images pack",
      "position" : 9,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Product Listing",
      "position" : 99,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Ads Pack",
      "position" : 1,
      "campaign_present" : false,
      "data" : ""
    } ]
  },
  "labels" : [ {
    "name" : "Seasonal",
    "type" : "automatic"
  } ]
}, {
  "id" : 7882029,
  "name" : "victoria secret",
  "search_data" : {
    "average_search_volume" : 90500,
    "year_over_year" : 49.49,
    "search_seasonality" : [ {
      "date" : "2022-03-01",
      "search_volume" : 49500
    }, {
      "date" : "2022-04-01",
      "search_volume" : 90500
    }, {
      "date" : "2022-05-01",
      "search_volume" : 60500
    }, {
      "date" : "2022-06-01",
      "search_volume" : 60500
    }, {
      "date" : "2022-07-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-08-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-09-01",
      "search_volume" : 49500
    }, {
      "date" : "2022-10-01",
      "search_volume" : 74000
    }, {
      "date" : "2022-11-01",
      "search_volume" : 110000
    }, {
      "date" : "2022-12-01",
      "search_volume" : 301000
    }, {
      "date" : "2023-01-01",
      "search_volume" : 135000
    }, {
      "date" : "2023-02-01",
      "search_volume" : 90500
    }, {
      "date" : "2023-03-01",
      "search_volume" : 74000
    } ],
    "sum_ctr_percentage" : 77
  },
  "rank_data" : {
    "desktop" : {
      "rank" : 100,
      "trend" : 0,
      "best_rank" : 6,
      "date_best_rank" : "2023-05-15"
    },
    "mobile" : {
      "rank" : 100,
      "trend" : 0,
      "best_rank" : 6,
      "date_best_rank" : "2023-05-15"
    }
  },
  "traffic_data" : {
    "currency" : "RON",
    "sessions" : 0,
    "ecommerce" : {
      "transactions" : 0,
      "revenue" : 0
    },
    "goals" : {
      "completions" : 0,
      "revenue" : 0
    }
  },
  "opportunity" : {
    "percentile" : 25,
    "difficulty_top_10" : "hard",
    "traffic_once_top_3" : {
      "additional_monthly_sessions" : 18744,
      "additional_monthly_revenue" : 76379,
      "equivalent_google_ads_spend" : 1125,
      "avg_cpc" : 0.06,
      "currency" : "RON"
    }
  },
  "landing_pages" : {
    "desktop" : "https://www.elefant.ro/list/parfumuri/filters/brand-Victoria%2527s%2BSecret",
    "mobile" : "https://www.elefant.ro/spray-de-corp-cu-sclipici-victoria-s-secret-love-spell-250-ml-pentru-femei_a4bce687-1d9f-40f2-a3d8-8d45ee6af39c"
  },
  "serp_features" : {
    "desktop" : [ {
      "name" : "Knowledge Graph",
      "position" : "side",
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Product Listing",
      "position" : "side",
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Ads Pack",
      "position" : 1,
      "campaign_present" : false,
      "data" : ""
    } ],
    "mobile" : [ {
      "name" : "Knowledge Graph",
      "position" : 6,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Images pack",
      "position" : 9,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Product Listing",
      "position" : 99,
      "campaign_present" : false,
      "data" : ""
    }, {
      "name" : "Ads Pack",
      "position" : 1,
      "campaign_present" : false,
      "data" : ""
    } ]
  },
  "labels" : [ {
    "name" : "Seasonal",
    "type" : "automatic"
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
 * Add New Keywords
 * With this endpoint, you can add a list of keywords to the specified groups of a campaign.   Note: The keywords added through this API endpoint will be charged according to our `pricing policy`. This endpoint cannot be used without setting `spend limits in the Billing section`. Unless you have spend limits set, the endpoint will return an error.  Note: the endpoint can also be used to allocate already tracked keywords to existing groups.
 *
 * body Keywords-import-post-body 
 * returns add-keywords
 **/
exports.rank_trackerV3_0KeywordsImportPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "import_id" : "108331"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Keywords Import Status
 * With this endpoint, you can retrieve the current status of a keyword import task using the provided import ID, with information on the number of keywords imported so far and the number remaining. 
 *
 * import_id Integer The import ID of the task.  Please refer to the Add New Keywords endpoint in our API to retrieve the `import_id`.
 * campaign_id Integer The ID of the campaign to which you want to add/import keywords.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns. 
 * returns keywords-import-status
 **/
exports.rank_trackerV3_0KeywordsImport_statusGET = function(import_id,campaign_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date_start" : "2022-03-14T16:44:05",
  "date_done" : "2022-03-14T16:44:12",
  "imported" : 1170,
  "processing" : 65
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Ranking Pages
 * This endpoint returns the ranking pages of the tracked keywords in a campaign.  The response contains an array with ranking pages and their URL, title, description, and associated keyword IDs.  Note: Using the keyword IDs of the ranking keywords for the returned landing pages, you can make API calls through the other endpoints, in order to further process landing page-level search volumes, Visibility, and other metrics.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * group_id Integer The IDs of specific groups in the campaign to get keyword data for.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign. (optional)
 * limit Integer Determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request.  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer The starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the default is `0`, which means the API will start from the first record. (optional)
 * search String The `search` parameter allows you to filter for landing pages that include the searched term or URL path. The API will return only those records where the landing page matches (fully or partially) the provided search term or URL. (optional)
 * returns List
 **/
exports.rank_trackerV3_0KeywordsRanking_pagesGET = function(campaign_id,group_id,limit,offset,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "url" : "[https://www.myshoestore.com/athletic-shoes",
  "title" : "Athletic Shoes for Men and Women",
  "description" : "Find the perfect athletic shoes for your sport or activity. Free shipping and returns. Top brands for running, walking, cross-training and more.",
  "ranking_keywords" : [ {
    "keyword_id" : 123,
    "keyword" : "cars"
  } ]
}, {
  "url" : "[https://www.myshoestore.com/athletic-shoes",
  "title" : "Athletic Shoes for Men and Women",
  "description" : "Find the perfect athletic shoes for your sport or activity. Free shipping and returns. Top brands for running, walking, cross-training and more.",
  "ranking_keywords" : [ {
    "keyword_id" : 123,
    "keyword" : "cars"
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
 * Get Daily SERP Feature Presence
 * This endpoint returns the historical daily SERP feature data for specified keywords over a specified timeframe.  It provides a comprehensive timeline view of the different SERP features present for each keyword on desktop and mobile searches. This includes detailed tracking of whether the website being monitored is listed in each detected feature per date.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the data in YYYY-MM-DD format.
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the data in YYYY-MM-DD format.
 * group_id Integer The IDs of specific groups in the campaign to get keyword data for.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign.  (optional)
 * keyword_ids List This parameter allows you to specify the IDs of the keywords for which you want to return data. `keyword_ids` should be a comma-separated list of keyword IDs.  Please refer to the keyword-related endpoints in our API to retrieve the IDs of your keywords.  If you do not specify `keyword_ids`, the API will return data for all keywords that meet the other specified criteria (e.g. `group_id`). (optional)
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term. The search parameter is case-insensitive, allowing partial matches irrespective of casing. (optional)
 * returns serp-feature-presence
 **/
exports.rank_trackerV3_0KeywordsSerp_feature_presenceGET = function(campaign_id,start_date,end_date,group_id,keyword_ids,limit,offset,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword_id" : 123,
  "keyword" : "cars",
  "serp_data" : [ {
    "date" : "2023-08-01",
    "desktop" : [ {
      "feature" : "IMG",
      "listed" : false
    } ],
    "mobile" : [ {
      "feature" : "IMG",
      "listed" : false
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Top 100 Results
 * This endpoint returns the top 100 results for the requested keywords on a specified date.
 *
 * campaign_id Integer The ID of the campaign for which keyword competitor ranking data must be returned.  Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * date date The date for which the ranking data will be provided, in YYYY-MM-DD format.
 * device String The device type to get ranking data for–either `desktop` or `mobile`.  The default selection is `desktop`.
 * group_id Integer The IDs of specific groups in the campaign to get competitor ranking data for. If not specified, returns data for all of the keywords in the campaign.  Please refer to the Quick Start Guide to learn how to identify the IDs of your groups.  If you do not specify a `group_id`, the default value is the `All Keywords` group, which means data will be returned for all active keywords in the campaign.  (optional)
 * keyword_ids List The IDs of the keywords for which you want to return the data. `keyword_ids` should be a comma-separated list of keyword IDs.   Please refer to the Quick Start Guide to learn how to identify the IDs of your keywords.  If you do not specify `keyword_ids`, the API will return data for all keywords in the campaign that meet the other specified criteria (e.g. `group_id`). (optional)
 * limit Integer Determines the maximum number of records to return in a single request. Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer The starting index within the results to begin returning data. Typically used with the `limit` parameter to implement pagination.  If you do not specify an offset, the default is `0`, which means the API will start from the first record. (optional)
 * returns top-results
 **/
exports.rank_trackerV3_0KeywordsTop_resultsGET = function(campaign_id,date,device,group_id,keyword_ids,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword_id" : 7882029,
  "keyword" : "victoria secret",
  "top_100_results" : [ {
    "domain" : "elefant.ro",
    "landing_page" : "https://www.elefant.ro/list/parfumuri/filters/brand-Victoria%2527s%2BSecret",
    "rank" : 1,
    "title" : "Title",
    "description" : "The description",
    "search_intent" : "transactional"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

