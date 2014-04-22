(function() {

    var URL = 'https://www.woopra.com/widgets/embed?type=profile';

    return {

        // Here we define events such as a user clicking on something
        events: {
            'app.activated': 'renderWoopra'
        },

        // Below this point, you're free to define your own functions used by the app
        renderWoopra: function() {
            var requester = this.ticket().requester();
            var email;

            if (requester) {
                email = requester.email();

                if (email) {

                    this.switchTo('profile', {
                        base_url: URL,
                        website: this.setting('website'),
                        email: email,
                        theme: 'zendesk',
                        version: new Date().getTime()
                    });
                }
            }
        }
    };

}());
