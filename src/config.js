const config = {
	db: {
		socketPath: process.env.DB_SOCKET_PATH,
		database: 'blog',
		user: 'blog-api',
		password: '',
		connectionLimit: 100,
	},
};

export default config;
