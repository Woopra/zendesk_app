(function() {

    return {

        // Here we define events such as a user clicking on something
        events: {

            // The app is active, so call requestBookmarks (L#65)
            'app.activated': 'renderWoopra'
        },

        // Below this point, you're free to define your own functions used by the app

        renderWoopra: function() {
            this.switchTo('profile', {
                email: this.ticket().requester().email(),
                theme: 'zendesk',
                version: new Date().getTime()
            });

            this.$('#profile-iframe').on('load', function() {
                //win.postMessage(JSON.stringify({
                    //action: 'load'
                //}));
            });
        }
    };

}());
