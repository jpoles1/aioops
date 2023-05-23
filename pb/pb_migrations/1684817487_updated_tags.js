migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntmsboukscyx798")

  collection.name = "oops_tags"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntmsboukscyx798")

  collection.name = "tags"

  return dao.saveCollection(collection)
})
