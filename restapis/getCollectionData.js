const connectInterface = require('./helpers/connectInterface.js');

const getCollectionData = async(url, dbObject, dbname, collectionName) => {
	try{
		let db = await connectInterface(url, dbObject, dbname);
		let data = await db.collection(collectionName).find();
		db.close();
		return data;
	} catch(err) {
		return Promise.reject({status:"error", message: "Something wen wrong", err:err});
	}
}

module.exports = (req, res, next) => {
	getCollectionData(req.body.url, req.body.dbObject, req.body.dbname, req.body.collectionName)
	.then((result)=>{
		res.json(result);
	})
	.catch((err)=>{
		res.json(err);
	});
}