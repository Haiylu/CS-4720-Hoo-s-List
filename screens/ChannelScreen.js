
import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  MessageText,
} from "stream-chat-expo";

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl2ZWx5LXZvaWNlLTYifQ.aZYtcylstCfuUexU0eXYhmxdyB3ZOfUoCZqWyLfBBew';

const user = {
  id: 'lively-voice-6',
  name: 'Lively voice',
  image:
    'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

export class CustomMessageSimple extends React.PureComponent {
  render() {
    const {message} = this.props;
    return (
      <View>
        <Text>{message.user.name}:</Text>
        <MessageText
          message={message}
        />
      </View>
    );
  }
}

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "lively-voice-6");
    channel.watch();

    return (
      <View>
        <Chat client={chatClient}>
          <Channel client={chatClient} channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList
                Message={CustomMessageSimple}
              />
            {/* <MessageInput /> */}
            </View>
          </Channel>
        </Chat>
      </View>
    );
  }
}