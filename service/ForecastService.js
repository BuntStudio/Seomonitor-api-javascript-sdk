'use strict';


/**
 * Get Forecast keywords
 * This endpoint returns the forecast data for the keywords included in the Forecast Scenario or Objective, including keyword data, target rank data, and additional traffic data, for the forecast timeframe.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * forecast_id Integer This parameter specifies the ID of the Forecast scenario set as an Objective for which you want to return data.   Please refer to the 'Quick Start Guide'  to retrieve the ID of your scenarios. 
 * limit Integer This parameter determines the maximum number of records to return in a single request.   Maximum Value: 1000 records per request   If you do not specify a `limit`, the default number of records returned per request will be 100. (optional)
 * offset Integer This parameter specifies the starting point within the collection of resource results. It's typically used with the `limit` parameter to implement pagination.  If you do not specify an `offset`, the API will start from the first record. (optional)
 * returns List
 **/
exports.forecastV3_0KeywordsGET = function(campaign_id,forecast_id,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "keyword" : "december birthstone",
  "keyword_data" : {
    "percentage_clicks" : 0.64,
    "search_volume" : 27100,
    "year_over_year" : 0.22,
    "difficulty" : "medium"
  },
  "average_rank_data" : {
    "initial_rank" : 29,
    "actual_rank" : 21,
    "estimated_rank" : 23,
    "estimated_rank_best_target" : 0,
    "target_rank" : 5,
    "target_rank_best" : 23
  },
  "additional_traffic" : {
    "sessions" : 4600,
    "sessions_best_target" : 0,
    "conversions" : 126,
    "conversions_best_target" : 454,
    "revenue" : 3400,
    "revenue_best_target" : 5600
  }
}, {
  "keyword" : "december birthstone",
  "keyword_data" : {
    "percentage_clicks" : 0.64,
    "search_volume" : 27100,
    "year_over_year" : 0.22,
    "difficulty" : "medium"
  },
  "average_rank_data" : {
    "initial_rank" : 29,
    "actual_rank" : 21,
    "estimated_rank" : 23,
    "estimated_rank_best_target" : 0,
    "target_rank" : 5,
    "target_rank_best" : 23
  },
  "additional_traffic" : {
    "sessions" : 4600,
    "sessions_best_target" : 0,
    "conversions" : 126,
    "conversions_best_target" : 454,
    "revenue" : 3400,
    "revenue_best_target" : 5600
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
 * Get Forecast objective Data
 * This endpoint returns the data of Forecast Scenarios set as Objectives, including the SEO goal and configuration parameters, the forecast results overview data, and the monthly actual and estimated results for the forecast timeframe.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * forecast_id Integer This parameter specifies the ID of the Forecast scenario for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your Forecast scenarios. 
 * returns forecast-objective-data
 **/
exports.forecastV3_0ObjectiveGET = function(campaign_id,forecast_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "objective_data" : {
    "completion_date" : "Oct 2025",
    "completion_status" : {
      "30days" : {
        "actual_sessions" : 89500,
        "forecasted_sessions" : 89500
      },
      "start_to_date" : {
        "actual_sessions" : 610000,
        "forecasted_sessions" : 600000
      }
    }
  },
  "seo_goal" : {
    "keywords_count" : 882,
    "search_data" : {
      "search_volume" : 8700,
      "year_over_year" : 1.49,
      "monthly_searches" : {
        "month" : "January",
        "year" : 2023,
        "search_volume" : 6700
      },
      "volume_by_device" : {
        "percentage_desktop" : 0.84,
        "percentage_mobile" : 0.16
      },
      "percentage_clicks" : 0.78
    },
    "target" : {
      "average_rank" : {
        "initial_rank" : 18,
        "trend_3months" : 5,
        "target_rank" : 5,
        "best_target_rank" : 2
      },
      "average_visibility" : {
        "initial_visibility" : 0.14,
        "trend_3months" : 0.01,
        "target_visibility" : 0.34,
        "best_target_visibility" : 0.57
      }
    },
    "goal_chance" : "realistic"
  },
  "scenario_configuration" : {
    "timeframe" : "12 mo",
    "start_month" : "Oct 2023",
    "extended_forecast" : true,
    "target_rank_range" : false,
    "progression_speed" : "conservative",
    "use_year_over_year" : true,
    "use_search_volume_by_device" : true,
    "use_long_tail_effect" : true,
    "use_percentage_clicks" : true,
    "conversion_data" : {
      "conversion_rate" : 0.035,
      "avg_order_value" : 0.5
    }
  },
  "overview_data" : {
    "additional_traffic" : {
      "sessions" : 900,
      "sessions_best_target" : 90,
      "conversions" : 2100,
      "conversions_best_target" : 200,
      "revenue" : 78,
      "revenue_best_target" : 90
    },
    "inertial_traffic" : {
      "sessions" : 15800000,
      "conversions" : 433000,
      "revenue" : 56000
    },
    "ads_equivalent" : {
      "equivalent" : 68600,
      "equivalent_best_target" : 6700
    }
  },
  "monthly_forecast" : {
    "month" : "Oct 2023",
    "seasonality" : 1.83,
    "traffic_data" : {
      "sessions" : {
        "inertial" : 859000,
        "additional" : 689,
        "additional_best_target" : 90
      },
      "conversions" : {
        "inertial" : 23500,
        "additional" : 500,
        "additional_best_target" : 80
      },
      "revenue" : {
        "inertial" : 278500,
        "additional" : 2100,
        "additional_best_target" : 80
      },
      "visibility" : {
        "estimated" : 0.07,
        "estimated_best_target" : 0
      },
      "estimated_avg_ranks" : {
        "estimated" : 0.07,
        "estimated_best_target" : 0
      }
    }
  },
  "monthly_forecast_extended" : {
    "month" : "Oct 2023",
    "seasonality" : 1.83,
    "traffic_data" : {
      "sessions" : {
        "inertial" : 859000,
        "additional" : 689,
        "additional_best_target" : 90
      },
      "conversions" : {
        "inertial" : 23500,
        "additional" : 500,
        "additional_best_target" : 80
      },
      "revenue" : {
        "inertial" : 278500,
        "additional" : 2100,
        "additional_best_target" : 80
      }
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
 * Get Forecast scenario Data
 * This endpoint returns the data of Forecast Scenarios created in a specified campaign, including the scenario details, the SEO goal and configuration parameters, the forecast results overview data, and the monthly estimated results for the forecast timeframe.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * forecast_id Integer This parameter specifies the ID of the Forecast scenario for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your Forecast scenarios.  To get data for the Campaign Objective, use the 'Get Forecast Objective Data'. 
 * returns forecast-scenario-data
 **/
exports.forecastV3_0ScenarioGET = function(campaign_id,forecast_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "seo_goal" : {
    "keywords_count" : 882,
    "search_data" : {
      "search_volume" : 8700,
      "year_over_year" : 1.49,
      "monthly_searches" : {
        "month" : "January",
        "year" : 2023,
        "search_volume" : 6700
      },
      "volume_by_device" : {
        "percentage_desktop" : 0.84,
        "percentage_mobile" : 0.16
      },
      "percentage_clicks" : 0.78
    },
    "target" : {
      "average_rank" : {
        "initial_rank" : 18,
        "trend_3months" : 5,
        "target_rank" : 5,
        "best_target_rank" : 2
      },
      "average_visibility" : {
        "initial_visibility" : 0.14,
        "trend_3months" : 0.01,
        "target_visibility" : 0.34,
        "best_target_visibility" : 0.57
      }
    },
    "goal_chance" : "realistic"
  },
  "scenario_configuration" : {
    "timeframe" : "12 mo",
    "start_month" : "Oct 2023",
    "extended_forecast" : true,
    "target_rank_range" : false,
    "progression_speed" : "conservative",
    "use_year_over_year" : true,
    "use_search_volume_by_device" : true,
    "use_long_tail_effect" : true,
    "use_percentage_clicks" : true,
    "conversion_data" : {
      "conversion_rate" : 0.035,
      "avg_order_value" : 0.5
    }
  },
  "overview_data" : {
    "additional_traffic" : {
      "sessions" : 900,
      "sessions_best_target" : 90,
      "conversions" : 2100,
      "conversions_best_target" : 200,
      "revenue" : 78,
      "revenue_best_target" : 90
    },
    "inertial_traffic" : {
      "sessions" : 15800000,
      "conversions" : 433000,
      "revenue" : 56000
    },
    "ads_equivalent" : {
      "equivalent" : 68600,
      "equivalent_best_target" : 6700
    }
  },
  "monthly_forecast" : {
    "month" : "Oct 2023",
    "seasonality" : 1.83,
    "traffic_data" : {
      "sessions" : {
        "inertial" : 859000,
        "additional" : 689,
        "additional_best_target" : 90
      },
      "conversions" : {
        "inertial" : 23500,
        "additional" : 500,
        "additional_best_target" : 80
      },
      "revenue" : {
        "inertial" : 278500,
        "additional" : 2100,
        "additional_best_target" : 80
      },
      "visibility" : {
        "estimated" : 0.07,
        "estimated_best_target" : 0
      },
      "estimated_avg_ranks" : {
        "estimated" : 0.07,
        "estimated_best_target" : 0
      }
    }
  },
  "monthly_forecast_extended" : {
    "month" : "Oct 2023",
    "seasonality" : 1.83,
    "traffic_data" : {
      "sessions" : {
        "inertial" : 859000,
        "additional" : 689,
        "additional_best_target" : 90
      },
      "conversions" : {
        "inertial" : 23500,
        "additional" : 500,
        "additional_best_target" : 80
      },
      "revenue" : {
        "inertial" : 278500,
        "additional" : 2100,
        "additional_best_target" : 80
      }
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
 * Get Forecast scenarios
 * This endpoint returns a list of Scenarios created in a specified campaign, including the Objective if one is set, and their details.
 *
 * campaign_id Integer This parameter specifies the ID of the campaign for which you want to return data.   Please refer to the Quick Start Guide to learn how to retrieve the IDs of your campaigns.
 * returns scenarios
 **/
exports.forecastV3_0ScenariosGET = function(campaign_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "forecast_id" : 2282,
  "name" : "Furniture forecast",
  "objective" : false,
  "created_date" : "2023-08-01",
  "created_by" : "Andrea Jones",
  "update_date" : "2023-08-27",
  "monthly_budget" : "5600"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

