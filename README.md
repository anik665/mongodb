//create 
db.users.createCollection('user')
db.useers.insertOne/Many{}
//read
db.users.findOne/Many({'arrdess.country':'Bangladesh'})
//update 
db.users.updateMany(
    {'address.country':'Bangladesh'},
    {$set:{"address.country":'India'}}
)
// delete
db.users.deleteMany(
    {name:'Anik Ghosh'}
)
//https://www.mongodb.com/docs/manual/reference/operator/query/
