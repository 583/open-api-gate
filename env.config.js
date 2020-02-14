module.exports = {
  apps: [{
    name: 'open-api-gate',
    script: './bin/www',
    watch: 'app',
    ignore_watch: ['node_modules', 'logs'],
    out_file: './logs/out.log',
    error_file: './logs/error.log', 
    max_memory_restart: '400M',
    env: {
      NODE_ENV: 'prod'
    },
    env_dev: {
      NODE_ENV: 'dev',
    },
    env_test: {
      NODE_ENV: 'test',
    },
    exec_mode: 'cluster', 
    instances: 'max',
    autorestart: true 
  }]
}
