
const ENV = process.env.NODE_ENV? process.env.NODE_ENV : 'dev';

switch (ENV) {
    case 'dev':
    case 'development':
        module.exports = require('./config/webpack.dev')({env: 'development'});
        break;
}
