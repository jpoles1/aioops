migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntmsboukscyx798")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_ZElHBcT` ON `oops_tags` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntmsboukscyx798")

  collection.indexes = []

  return dao.saveCollection(collection)
})
