/* global app:true */

(function() {
  'use strict';

  app = app || {};

  app.Avatar = Backbone.Model.extend({
    url: '/avatar/',
    defaults: {
      errors: [],
      errfor: {}
    }
  });

  app.AvatarView = Backbone.View.extend({
    el: '#avatar',
    //template: _.template( $('#tmpl-avatar').html() ),
    events: {
      //'submit form': 'preventSubmit',
      //'keypress [name="password"]': 'AppraisalOnEnter',
      //'click .btn-appraisal': 'Appraisal'
    },
    initialize: function() {
      this.model = new app.Avatar();
      this.listenTo(this.model, 'sync', this.render);
      //this.render();
    },
    //render: function() {
    //  this.$el.html(this.template( this.model.attributes ));
    //  this.$el.find('[name="avatar"]').focus();
    //},
    preventSubmit: function(event) {
      event.preventDefault();
    },
    //AppraisalOnEnter: function(event) {
    //  if (event.keyCode !== 13) { return; }
    //  if ($(event.target).attr('name') !== 'password') { return; }
    //  event.preventDefault();
    //  this.Appraisal();
    //},
    Appraisal: function() {
      this.$el.find('.btn-appraisal').attr('disabled', true);

      this.model.save({
        company: this.$el.find('[name="company"]').val(),
        game: this.$el.find('[name="game"]').val(),
        avatar: this.$el.find('[name="avatar"]').val()
      },{
        success: function(model, response) {
          if (response.success) {
            location.href = '/avatar/';
          }
          else {
            model.set(response);
          }
        }
      });
    }
  });

  $(document).ready(function() {
    app.AvatarView = new app.AvatarView();
  });
}());
