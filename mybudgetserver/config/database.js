module.exports = {
    "development": {
      "username": "postgres",
      "password": "root",
      "database": "mybudget_development",
      "host": "172.21.0.2",
      "dialect": "postgres"
    },
    "test": {
      "username": "postgres",
      "password": "root",
      "database": "mybudget_test",
      "host": "172.17.0.2",
      "dialect": "postgres"
    },
    "production": {
      "username": "postgres",
      "password": "root",
      "database": "mybudget_production",
      "host": "172.17.0.2",
      "dialect": "postgres"
    }
}
