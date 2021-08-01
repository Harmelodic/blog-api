import mysql from 'mysql';

const database = {};
let pool;

database.close = () => {
	if (pool) pool.end();
	pool = null;
};

database.query = (sql) => {
	return new Promise(((resolve, reject) => {
		pool.getConnection((err, con) => {
			if (err) reject(err);

			con.query(sql, (error, results) => {
				if (error) reject(error);

				con.release();
				resolve(results);
			});
		});
	}));
};

process.on('beforeExit', () => {
	database.close();
});

export default (config) => {
	pool = mysql.createPool(config);
	return database;
};
