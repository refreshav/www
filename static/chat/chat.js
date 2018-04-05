// create a new instance of ChatEngine
ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-0e65b815-5ce5-44c0-b6cd-3e798304245c',
    subscribeKey: 'sub-c-e27e3780-3860-11e8-a6a1-9a016222f7eb'
});

// use a helper function to generate a new profile
let newPerson = generatePerson(true);

// create a bucket to store our ChatEngine Chat object
let myChat;

// compile handlebars templates and store them for use later
let userTemplate = Handlebars.compile($("#message-response-template").html());

// this is our main function that starts our chat app
const init = () => {

    // connect to ChatEngine with our generated user
    ChatEngine.connect(newPerson.uuid, newPerson);

    // when ChatEngine is booted, it returns your new User as `data.me`
    ChatEngine.on('$.ready', function(data) {

        // create a new ChatEngine Chat
        myChat = new ChatEngine.Chat('chatengine-demo-chat');

        // when we recieve messages in this chat, render them
        myChat.on('message', (message) => {
            renderMessage(message);
        });

        // wait for our chat to be connected to the internet
        myChat.on('$.connected', () => {

            // search for 50 old `message` events
            myChat.search({
                event: 'message',
                limit: 25
            }).on('message', (data) => {

                // when messages are returned, render them like normal messages
                renderMessage(data, true);

            });

        });

        // bind our "send" button and return key to send message
        $('#sendMessage').on('submit', sendMessage);

    });

};

// send a message to the Chat
const sendMessage = () => {

    // emit the `message` event to everyone in the Chat
    myChat.emit('message', {
        text: $('#message-to-send').val().trim()
    });

    // clear out the text input
    $('#message-to-send').val('');

    // stop form submit from bubbling
    return false;

};

// render messages in the list
const renderMessage = (message) => {

    const x = new embed({
        input: message.data.text,
        preset: embedPreset({
            gAuthKey: "AIzaSyCqFouT8h5DKAbxlrTZmjXEmNBjC69f0ts",
            facebook: {
                height: 460
            }
        })
    });

    x.text().then(({ result }) => {
        // render the message
        $('.chat-history ul').append(userTemplate({
            messageOutput: result,
            time: getCurrentTime(),
            user: message.sender.state
        }));

        // scroll to the bottom of the chat
        scrollToBottom();
    });

};

// scroll to the bottom of the window
const scrollToBottom = () => {
    $('.chat-history').scrollTop($('.chat-history')[0].scrollHeight);
};

// get the current time in a nice format
const getCurrentTime = () => {
    return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
};

// boot the app
init();