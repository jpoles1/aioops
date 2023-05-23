migrate((db) => {
  const collection = new Collection({
    "id": "qwzdh06aahx7h9f",
    "created": "2023-05-23 01:26:15.567Z",
    "updated": "2023-05-23 01:26:15.567Z",
    "name": "aimodels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ugijgvdq",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mevqkw9h",
        "name": "repo_url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qwzdh06aahx7h9f");

  return dao.deleteCollection(collection);
})
