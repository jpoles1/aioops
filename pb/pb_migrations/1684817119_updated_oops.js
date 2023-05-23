migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kolduqw6",
    "name": "user_reason",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // remove
  collection.schema.removeField("kolduqw6")

  return dao.saveCollection(collection)
})
