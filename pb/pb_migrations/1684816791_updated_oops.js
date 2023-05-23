migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mwdkdykr",
    "name": "prompt",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3cafw7q6",
    "name": "ai_resp",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kc930lpnpu2lixa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mwdkdykr",
    "name": "prompt",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3cafw7q6",
    "name": "ai_resp",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
