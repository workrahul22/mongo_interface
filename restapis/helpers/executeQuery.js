const connectInterface = require('./helpers/connectInterface.js');

const executeQuery = async(url, dbObject, dbname, collectionName, query) => {
	try{
		let db = await connectInterface(url,dbObject,dbname);
		
	}
}