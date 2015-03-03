/* global app:true */

(function() {
  'use strict';

  app = app || {};

  app.Appraisal = Backbone.Model.extend({
    url: '/appraisal/',
    defaults: {
      errors: [],
      errfor: {},
      company: '',
      game: '',
      realm: '',
      avatar: ''
    }
  });

  app.AppraisalView = Backbone.View.extend({
    el: '#appraisal',
    template: _.template( $('#tmpl-appraisal').html() ),
    events: {
      'submit form': 'preventSubmit',
      'keypress [name="avatar"]': 'AvatarOnEnter',
      'click .btn-appraisal': 'Appraisal'
    },
    initialize: function() {
      this.model = new app.Appraisal();
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },
    render: function() {
      this.$el.html(this.template( this.model.attributes ));
      this.$el.find('[name="avatar"]').focus();
    },
    preventSubmit: function(event) {
      event.preventDefault();
    },
    AvatarOnEnter: function(event) {
      if (event.keyCode !== 13) { return; }
      if ($(event.target).attr('name') !== 'avatar') { return; }
      //event.preventDefault();
      this.Appraisal();
    },
    Appraisal: function() {
      this.$el.find('.btn-appraisal').attr('disabled', true);

      this.model.save({
        company: this.$el.find('[name="company"]').val(),
        game: this.$el.find('[name="game"]').val(),
        realm: this.$el.find('[name="realm"]').val(),
        avatar: this.$el.find('[name="avatar"]').val()
      },{
        success: function(model, response) {
          if (response.success) {
            location.href = '/avatar/' + response.id;
          }
          else {
            model.set(response);
          }
        }
      });
    }
  });

  $(document).ready(function() {
    app.AppraisalView = new app.AppraisalView();
  });
}());
