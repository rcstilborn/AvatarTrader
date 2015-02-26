'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/drywall'
  //uri: 'mongodb://ec2:MySecret1@ds049161.mongolab.com:49161/staging'
};
exports.companyName = 'AvatarTrader, Inc.';
exports.projectName = 'AvatarTrader';
exports.systemEmail = '***REMOVED***';
exports.cryptoKey = 'ThisIsMyBigSecret!';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = true;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +'',
    address: process.env.SMTP_FROM_ADDRESS || 'donotreply@halathome.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || '',
    password: process.env.SMTP_PASSWORD || '',
    host: process.env.SMTP_HOST || '',
    ssl: true
  }
};
exports.sendgrid = {
  credentials: {
    api_user: '***REMOVED***',
    api_key: '***REMOVED***'
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
