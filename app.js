(function() {

    var URL = 'https://www.woopra.com/widgets/embed?type=profile&embed_ver=dev';

    return {

        // Here we define events such as a user clicking on something
        events: {
            'iframe.clientReady': 'handleClientReady',
            'iframe.setHeight': 'handleSetHeight',
            'app.activated': 'renderWoopra'
        },

        handleClientReady: function(e) {
        },

        handleSetHeight: function(param) {
            this.$('#woopra-profile iframe').css({
                height: param.height
            });
        },

        // Below this point, you're free to define your own functions used by the app
        renderWoopra: function(e) {
            var requester;
            var ticket;
            var email;

            if (this.ticket) {
                ticket = this.ticket();
                if (ticket && ticket.requester()) {
                    email = ticket.requester().email();
                }
            }
            else if (this.user) {
                email = this.user().email();
            }

            if (email) {
                this.switchTo('profile', {
                    base_url: URL,
                    iframe_src: URL + "&website=" + this.setting('website') + "&id=" + email + "&ver=" + new Date().getTime() + "&theme=zendesk",
                    website: this.setting('website'),
                    email: email
                });
            }
        }
    };

}());
