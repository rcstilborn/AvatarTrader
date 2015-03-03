'use strict';

exports.read = function(req, res, next){
  req.app.db.models.Avatar.findById(req.params.id).exec(function(err, avatar) {
    if (err) {
      return next(err);
    }

    //if (req.xhr) {
    //  res.send(avatar);
    //}
    //else {
    avatar.detail = JSON.parse(avatar.details);
    avatar.thumbnail = 'http://us.battle.net/static-render/us/' + avatar.detail.thumbnail;
    avatar.image = avatar.thumbnail.replace('avatar', 'profilemain');
    res.render('avatar', avatar);
    //}
  });
  //
  //res.locals.avatarName=['Blizzard'];
  //res.render('avatar/index', {});
};
