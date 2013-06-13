Package.describe({
  summary: "Adds Application Information"
});

Package.on_use(function (api) {
  
  // Client
  api.use(['templating'], 'client');

  api.add_files([
    'vern.html',
    'vern_client.js'
    ], 'client');
});
