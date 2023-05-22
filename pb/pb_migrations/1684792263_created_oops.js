migrate((db) => {
  const collection = new Collection({
    "id": "kc930lpnpu2lixa",
    "created": "2023-05-22 21:51:03.092Z",
    "updated": "2023-05-22 21:51:03.092Z",
    "name": "oops",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwdkdykr",
        "name": "prompt",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "3cafw7q6",
        "name": "ai_resp",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "oi9c9gsj",
        "name": "user_resp",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fd7twrfg",
        "name": "event_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "meoyuvas",
        "name": "ai_id",
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
        "id": "iym8lcpj",
        "name": "ai_version",
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
        "id": "lurphvgq",
        "name": "uid",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa");

  return dao.deleteCollection(collection);
})
