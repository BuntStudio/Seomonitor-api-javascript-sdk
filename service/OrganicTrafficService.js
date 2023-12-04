'use strict';


/**
 * Get Daily Traffic Data by Segment
 * This endpoint returns the organic traffic metrics by day for a traffic segment over a specified timeframe.  The data returned includes the number of sessions, conversions, bounce rate, and revenue.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * segment String The name assigned to the segment in the platform. Accepted values are `all`, `non-brand`, `brand`, or the name of a custom traffic segment created in the SEOmonitor platform, e.g. \"blog\".  Unless otherwise specified, data will be returned for the Non-Brand segment by default. (optional)
 * returns traffic-overview
 **/
exports.organic_trafficV3_0Daily_trafficGET = function(campaign_id,start_date,end_date,segment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2023-01-07",
  "sessions" : 508000,
  "currency" : "USD",
  "ecommerce" : {
    "conversions" : 1512,
    "revenue" : 97000
  },
  "goals" : {
    "completions" : 865,
    "revenue" : 83000
  },
  "bounce_rate" : 0.3,
  "conversion_rate" : 0.05
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Traffic Data by Keywords
 * This endpoint returns the traffic data by keyword for a specific traffic segment and timeframe.  Note: This endpoint will return data only if SEOmonitor pulled Google Search Console and/or Google Analytics data for the selected timeframe through an active connection.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * start_date date This parameter specifies the start date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * end_date date This parameter specifies the end date of the timeframe for which you want to return the data, in YYYY-MM-DD format.
 * segment String The name assigned to the segment in the platform. Accepted values are `all`, `non-brand`, `brand`, or the name of a custom traffic segment created in the SEOmonitor platform, e.g. \"blog\".  Unless otherwise specified, data will be returned for the Non-Brand segment by default. (optional)
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request  If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * order_by String This parameter enables you to sort the returned data based on a specified field.  The field names you can use to sort data are:  - `avg_position`   - `sessions`  - `transactions`  - `goals`  - `transactions_revenue`  - `goals_revenue`   If you do not specify an `order_direction`, the default is `asc`, which means the API will sort the data in ascending order.  (optional)
 * order_direction String This parameter determines the sorting direction of the `order_by` field. You can sort the data in either ascending (`asc`) or descending (`desc`) order.  If the `tracking_status` is not specified, data for all keywords is returned. (optional)
 * tracking_status String This parameter enables you to filter the results based on the keyword property of being tracked in the SEOmonitor platform. Allowed values are `tracked`, `untracked`, and `all`.  If the `tracking_status` is not specified, data for all keywords is returned. (optional)
 * search String The `search` parameter allows you to filter the results based on a keyword search. The API will return only those records where the keyword matches (fully or partially) the provided search term.  The search parameter is case-insensitive, allowing partial matches irrespective of casing. (optional)
 * returns traffic-keywords
 **/
exports.organic_trafficV3_0KeywordsGET = function(campaign_id,start_date,end_date,segment,limit,offset,order_by,order_direction,tracking_status,search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keyword" : "blue sneakers",
  "tracked_keyword_id" : 4674,
  "brand" : false,
  "current_page" : "",
  "gsc_data" : {
    "impressions" : 0,
    "clicks" : 9,
    "avg_position" : 8
  },
  "analytics_data" : {
    "sessions" : 900,
    "ecommerce" : {
      "conversions" : 3818,
      "revenue" : 488485.1
    },
    "goals" : {
      "completions" : 3751,
      "revenue" : 409731.8
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

