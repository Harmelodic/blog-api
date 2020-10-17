const config = {
  contentURI: process.env.CONTENT_URI || 'https://harmelodic.gitlab.io/scribbles-content',
  db: {
    socketPath: process.env.DB_SOCKET_PATH,
    database: 'scribbles',
    user: 'scribbles-api',
    password: '',
    connectionLimit: 100,
  },
};

export default config;
