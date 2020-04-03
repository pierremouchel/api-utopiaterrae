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
    "url": "/location/:id",
    "title": "4. Delete Location information by id",
    "name": "DeleteLocationById",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
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
    "title": "1. Request Location information",
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
            "description": "<p>Id of the Location.</p>"
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
            "type": "Number",
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
            "description": "<p>Id of the Location.</p>"
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
            "type": "Number",
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
  }
] });
