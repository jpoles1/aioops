migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // remove
  collection.schema.removeField("meoyuvas")

  // remove
  collection.schema.removeField("iym8lcpj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tzabpkjd",
    "name": "model",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qwzdh06aahx7h9f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmuaxkjm",
    "name": "quant",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lurphvgq",
    "name": "user",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("tzabpkjd")

  // remove
  collection.schema.removeField("pmuaxkjm")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
