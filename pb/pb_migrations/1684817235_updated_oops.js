migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5weiwssu",
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

  // remove
  collection.schema.removeField("5weiwssu")

  return dao.saveCollection(collection)
})
