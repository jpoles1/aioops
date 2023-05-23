migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzdh06aahx7h9f")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzdh06aahx7h9f")

  collection.listRule = null

  return dao.saveCollection(collection)
})
