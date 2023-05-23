migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // remove
  collection.schema.removeField("lb6gemnz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cmvjfzs3",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ntmsboukscyx798",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
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
    "id": "lb6gemnz",
    "name": "tags",
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
  collection.schema.removeField("cmvjfzs3")

  return dao.saveCollection(collection)
})
