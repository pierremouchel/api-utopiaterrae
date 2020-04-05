define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Get an Api Key",
    "name": "ApiKey",
    "group": "Api_Key",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Your Api Key</p>"
          }
        ]
      }
    },
    "description": "<p>You have to create an account at this adress to get an Api Key : http://localhost:3000</p> <p>Use it in your request header as below.</p>",
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Api_Key"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\Pierre\\Desktop\\api utopiaterrae\\utopiaterrae\\routes\\doc\\main.js",
    "groupTitle": "C:\\Users\\Pierre\\Desktop\\api utopiaterrae\\utopiaterrae\\routes\\doc\\main.js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/climate/:id",
    "title": "7. Delete Climate information by id",
    "name": "DeleteClimateById",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Climate delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Climate not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter.</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "get",
    "url": "/climate",
    "title": "1. Request all Climate information",
    "name": "GetClimate",
    "group": "Climate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>Location longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year_id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"location_id\": 1,\n     \"latitude\": 40.25,\n     \"longitude\": 20.86,\n     \"year_id\": 1,\n     \"year\": 2019\n     \"sea_level\": 10.05,\n     \"pollution_level\": 11.05,\n     \"temperature\": 25.20\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ClimateNotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "get",
    "url": "/climate/:id",
    "title": "2. Request Climate information by id",
    "name": "GetClimateById",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>Location longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year_id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"location_id\": 1,\n     \"latitude\": 40.25,\n     \"longitude\": 20.86,\n     \"year_id\": 1,\n     \"year\": 2019\n     \"sea_level\": 10.05,\n     \"pollution_level\": 11.05,\n     \"temperature\": 25.20\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Climate was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "get",
    "url": "/climate/location/:id",
    "title": "3. Request Climate information by location",
    "name": "GetClimateByLocation",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>Location longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year_id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"location_id\": 1,\n     \"latitude\": 40.25,\n     \"longitude\": 20.86,\n     \"year_id\": 1,\n     \"year\": 2019\n     \"sea_level\": 10.05,\n     \"pollution_level\": 11.05,\n     \"temperature\": 25.20\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Climate was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "get",
    "url": "/climate/location/:locationId/year/:yearId",
    "title": "5. Request Climate information by location and year",
    "name": "GetClimateByLocationAndYear",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>Location longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year_id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"location_id\": 1,\n     \"latitude\": 40.25,\n     \"longitude\": 20.86,\n     \"year_id\": 1,\n     \"year\": 2019\n     \"sea_level\": 10.05,\n     \"pollution_level\": 11.05,\n     \"temperature\": 25.20\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Climate was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "get",
    "url": "/climate/year/:id",
    "title": "4. Request Climate information by year",
    "name": "GetClimateByYear",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "location_id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>Location latitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>Location longitude.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year_id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"location_id\": 1,\n     \"latitude\": 40.25,\n     \"longitude\": 20.86,\n     \"year_id\": 1,\n     \"year\": 2019\n     \"sea_level\": 10.05,\n     \"pollution_level\": 11.05,\n     \"temperature\": 25.20\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Climate was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "post",
    "url": "/climate",
    "title": "6. Post Climate information",
    "name": "PostClimate",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "locationId",
            "description": "<p>Location Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "yearId",
            "description": "<p>Year Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "seaLevel",
            "description": "<p>Sea level</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "pollutionLevel",
            "description": "<p>Pollution level</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Climate saved</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"This climate already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Parameters in an encoded form.</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "put",
    "url": "/climate/:id",
    "title": "8. Update Climate information by id",
    "name": "UpdateClimateById",
    "group": "Climate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Climate unique ID in Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sea_level",
            "description": "<p>Sea level.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "pollution_level",
            "description": "<p>Pollution level.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>Temperature.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Climate update</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Climate not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ClimateNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Parameters in an encoded form.</p>",
    "version": "0.0.0",
    "filename": "./climates.js",
    "groupTitle": "Climate"
  },
  {
    "type": "delete",
    "url": "/location/:id",
    "title": "4. Delete Location information by id",
    "name": "DeleteLocationById",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Location delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Location not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter.</p>",
    "version": "0.0.0",
    "filename": "./locations.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/location",
    "title": "1. Request all Location information",
    "name": "GetLocation",
    "group": "Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Varchar",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Varchar",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the Location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"latitude\": -12.05,\n  \"longitude\": 28.632\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>LocationNotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./locations.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/location/:id",
    "title": "2. Request Location information by id",
    "name": "GetLocationById",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Varchar",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the Location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Varchar",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the Location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"latitude\": -12.05,\n  \"longitude\": 28.632\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Location was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./locations.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/location",
    "title": "3. Post Location information",
    "name": "PostLocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Varchar",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude value</p>"
          },
          {
            "group": "Parameter",
            "type": "Varchar",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude value</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Location saved</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"This location already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Parameters in an encoded form.</p>",
    "version": "0.0.0",
    "filename": "./locations.js",
    "groupTitle": "Location"
  },
  {
    "type": "put",
    "url": "/location/:id",
    "title": "5. Update Location information by id",
    "name": "UpdateLocationById",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Location unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Location update</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Location not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter.</p>",
    "version": "0.0.0",
    "filename": "./locations.js",
    "groupTitle": "Location"
  },
  {
    "type": "delete",
    "url": "/year/:id",
    "title": "4. Delete Year information by id",
    "name": "DeleteYearById",
    "group": "Year",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Year delete</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Year not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"YearNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter.</p>",
    "version": "0.0.0",
    "filename": "./years.js",
    "groupTitle": "Year"
  },
  {
    "type": "get",
    "url": "/year",
    "title": "1. Request all Year information",
    "name": "GetYear",
    "group": "Year",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"year\": 2015\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>YearNotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"YearNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./years.js",
    "groupTitle": "Year"
  },
  {
    "type": "get",
    "url": "/year/:id",
    "title": "2. Request Year information by id",
    "name": "GetYearById",
    "group": "Year",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"year\": -12.05\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The id of the Year was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"YearNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Url parameter</p>",
    "version": "0.0.0",
    "filename": "./years.js",
    "groupTitle": "Year"
  },
  {
    "type": "post",
    "url": "/year",
    "title": "3. Post Year information",
    "name": "PostYear",
    "group": "Year",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Year saved</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"This year already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Parameters in an encoded form.</p>",
    "version": "0.0.0",
    "filename": "./years.js",
    "groupTitle": "Year"
  },
  {
    "type": "put",
    "url": "/year/:id",
    "title": "5. Update Year information by id",
    "name": "UpdateYearById",
    "group": "Year",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Year unique ID in Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Year description.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>Year update</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Year not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"YearNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Parameters in an encode form</p>",
    "version": "0.0.0",
    "filename": "./years.js",
    "groupTitle": "Year"
  }
] });
