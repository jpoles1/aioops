migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzdh06aahx7h9f")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwzdh06aahx7h9f")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
