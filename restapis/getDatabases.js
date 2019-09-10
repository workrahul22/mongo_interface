const connectInterface = require('./helpers/connectInterface.js');

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