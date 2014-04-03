(function() {

    return {

        // Here we define events such as a user clicking on something
        events: {
            'app.activated': 'renderWoopra'
        },

        // Below this point, you're free to define your own functions used by the app
        renderWoopra: function() {
            this.switchTo('profile', {
                email: this.ticket().requester().email(),
                theme: 'zendesk',
                version: new Date().getTime()
            });
        }
    };

}());
