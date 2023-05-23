migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // remove
  collection.schema.removeField("acjtbxm5")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "acjtbxm5",
    "name": "tags",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("lb6gemnz")

  return dao.saveCollection(collection)
})
