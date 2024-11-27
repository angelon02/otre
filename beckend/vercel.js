const vercelConfig = {
    version: 2,
    builds: [
      {
        src: "path/to/your/entry-file.js",
        use: "@vercel/node",
      },
      {
        src: "path/to/another-entry.js",
        use: "@vercel/static-build",
      },
    ],
    routes: [
      {
        src: "/api/(.*)",
        dest: "/path/to/api/$1",
      },
      {
        src: "/static/(.*)",
        dest: "/public/static/$1",
      },
    ],
  };
  
  module.exports = vercelConfig;
  
  