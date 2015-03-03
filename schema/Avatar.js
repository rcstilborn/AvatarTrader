'use strict';

exports = module.exports = function(app, mongoose) {
  var avatarSchema = new mongoose.Schema({
    company: String,
    game: String,
    realm: String,
    name: String,
    details: String,
    timeCreated: { type: Date, default: Date.now },
    lastUpdated: Date
  });
  //userSchema.methods.canPlayRoleOf = function(role) {
  //  if (role === "admin" && this.roles.admin) {
  //    return true;
  //  }
  //
  //  if (role === "account" && this.roles.account) {
  //    return true;
  //  }
  //
  //  return false;
  //};
  //userSchema.methods.defaultReturnUrl = function() {
  //  var returnUrl = '/';
  //  if (this.canPlayRoleOf('account')) {
  //    returnUrl = '/account/';
  //  }
  //
  //  if (this.canPlayRoleOf('admin')) {
  //    returnUrl = '/admin/';
  //  }
  //
  //  return returnUrl;
  //};
  //userSchema.statics.encryptPassword = function(password, done) {
  //  var bcrypt = require('bcrypt');
  //  bcrypt.genSalt(10, function(err, salt) {
  //    if (err) {
  //      return done(err);
  //    }
  //
  //    bcrypt.hash(password, salt, function(err, hash) {
  //      done(err, hash);
  //    });
  //  });
  //};
  //userSchema.statics.validatePassword = function(password, hash, done) {
  //  var bcrypt = require('bcrypt');
  //  bcrypt.compare(password, hash, function(err, res) {
  //    done(err, res);
  //  });
  //};
  avatarSchema.plugin(require('./plugins/pagedFind'));
  avatarSchema.index({ company: 1, game: 1, realm: 1, name: 1 }, { unique: true });
  avatarSchema.set('autoIndex', false);
  //userSchema.index({ email: 1 }, { unique: true });
  //userSchema.index({ timeCreated: 1 });
  //userSchema.index({ 'twitter.id': 1 });
  //userSchema.index({ 'github.id': 1 });
  //userSchema.index({ 'facebook.id': 1 });
  //userSchema.index({ 'google.id': 1 });
  //userSchema.index({ search: 1 });
  //userSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Avatar', avatarSchema);
};
