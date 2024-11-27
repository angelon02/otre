module.exports = {
    version: 2,
    builds: [
      {
        src: 'beckend/server.js',
        use: '@vercel/node',
      },
    ],
    routes: [
      {
        src: '/api/(.*)',
        dest: '/beckend/api/$1',
      },
    ],
  };
  