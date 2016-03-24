// Application
App = Ember.Application.create({});


// router
App.Router.map(function() {
    this.route('test', { path: '/test' });
});

// routes


App.TestRoute = Ember.Route.extend({
    model: function(params) {
        return {testValue: "awesome"};
    }
});
