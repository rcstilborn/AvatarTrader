exports = module.exports = function(req, res, options) {
  /* options = {
   from: String,
   to: String,
   cc: String,
   bcc: String,
   text: String,
   textPath String,
   html: String,
   htmlPath: String,
   attachments: [String],
   success: Function,
   error: Function
   } */

   request = require('request');
   request({
     uri: 'http://us.battle.net/api/wow/character/' + options.avatar.realm + '/' + options.avatar.name,
     qs: { fields: 'guild'} },
     function(err, response, body) {
       console.log('body: ' + body);
       var oBody = JSON.parse(body);
       console.log('response: ' + JSON.stringify(response));
       console.log('err: ' + err);
       if(err)
         return options.error(err);
       if(response.statusCode == 404)
         return options.error(oBody.reason);
       if (response.statusCode == 200) {
         options.avatar.details = body;
         options.avatar.save(function(err, avatar) {
           if (err) {
             options.error(err);
           }
         });
         options.success();
       } else {
         options.error("Not sure what went wrong!");
       }
    });
};