module.exports = {
  apps: [
    {
      script: 'build/app.js',
      name: require('./package.json').name,
      // instances: require('os').cpus().length,
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        NODE_PM2: true,
        FEATURE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development',
        NODE_PM2: true,
        FEATURE_ENV: 'development'
      },
      env_test: {
        NODE_ENV: 'production',
        NODE_PM2: true,
        FEATURE_ENV: 'test'
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      out_file: './logs/pm2/log.log',
      error_file: './logs/pm2/error.log'
    }
  ]
};
