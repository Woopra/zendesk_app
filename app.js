(function() {

    //import ZAF SDK into the iframe HTML
    <script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>

    var URL = 'https://www.woopra.com/widgets/embed?type=profile&embed_ver=zendesk';

    // Magic number for the padding on the size relative to window height
    var SIDEBAR_PADDING = 210;

    return {

        // Here we define events such as a user clicking on something
        events: {
            'iframe.clientReady': 'handleClientReady',
            'iframe.setHeight': 'handleSetHeight',
            'window.resize': 'handleWindowResize',
            'app.activated': 'renderWoopra'
        },

        handleClientReady: function(e) {
        },

        handleWindowResize: function(param) {
            var height = 600; // default min height

            if (param.height > 600) {
                height = param.height - SIDEBAR_PADDING;
            }

            this.setHeight(height);
        },

        handleSetHeight: function(param) {
            this.setHeight(param.height);
        },

        /**
         * Set height of the iframe
         */
        setHeight: function(height) {
            this.$('#woopra-profile iframe').css({
                height: height
            });
        },

        // Below this point, you're free to define your own functions used by the app
        renderWoopra: function(e) {
            var requester;
            var ticket;
            var email;
            // var client = ZAFClient.init();

            if (client.getTicket()) {
                ticket = client.getTicket();

                if (ticket && client.get('ticket.requester')) {
                  client.get('ticket.requester.email').then(function(data) {
                    email = data;
                  });
                }
            }
            else if (client.getCurrentUser()) {
                email = client.getCurrentUser().email;
            }

            if (email) {
                this.switchTo('profile', {
                    base_url: URL,
                    iframe_src: URL + "&website=" + this.setting('website') + "&id=" + encodeURIComponent(email) + "&ver=" + new Date().getTime() + "&theme=zendesk",
                    website: this.setting('website'),
                    email: email
                });
            }
        }
    };

}());
