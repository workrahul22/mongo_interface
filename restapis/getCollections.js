const connectInterface = require('./helpers/connectInterface.js');

const getCollections = async(url, dbObject, dbname) => {
	try{
		let db = await connectInterface(url, dbObject, dbname);
		return await db.listCollections();
	} catch(err) {
		return Promise.reject({status:"error", message: "Something wen wrong", err:err});
	}
}

module.exports = (req, res, next) => {
	getCollections(req.body.url, req.body.dbObject, req.body.dbname)
	.then((result)=>{
		res.json(result);
	})
	.catch((err)=>{
		res.json(err);
	});
}