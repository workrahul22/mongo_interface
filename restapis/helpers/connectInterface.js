const MongoClient = require("mongodb").MongoClient;

module.exports = (url="mongodb://localhost:27017", dbObject = {}, dbname="test") => {
	try{
		MongoClient.connect(url,(err,client)=>{
			if(err) return Promise.reject({status:"error",message:"Error Connecting Database"});
			return Promise.resolve(client.db(dbname));
		});
	} catch(err){
		return Promise.reject({status:"error", message: "Something went wrong", err:err});
	}
}