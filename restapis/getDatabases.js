const MongoClient = require("mongodb").MongoClient;

const connectInterface = (url="mongodb://localhost:27017", dbObject = {}) => {
	try{
		MongoClient.connect(url,(err,client)=>{
			if(err) return Promise.reject({status:"error",message:"Error Connecting Database"});
			return Promise.resolve(client.db("test"));
		});
	} catch(err){
		return Promise.reject({status:"error", message: "Something went wrong", err:err});
	}
}

const getDb = async(url, dbObject) => {
	try{
		let db = await connectInterface(url, dbObject);
		adminDb = db.admin();
		adminDb.listDatabases(function(err, dbs) {
			if(err) return Promise.reject({status:"error", message: "Error listing databases"});
			return Promise.resolve(dbs);
			db.close();
		});
	} catch(err) {
		return Promise.reject({status:"error", message: "Something wen wrong", err:err});
	}
}

module.exports = (req, res, next) => {
	getDB(req.body.url, req.body.dbObject)
	.then((result)=>{
		res.json(result);
	})
	.catch((err)=>{
		res.json(err);
	});
}