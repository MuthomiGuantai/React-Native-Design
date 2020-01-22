import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { PanResponder, Animated } from "react-native";

class ProjectsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    pan: new Animated.ValueXY()
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: () =>
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 }
        }).start()
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ]
          }}
          {...this._panResponder.panHandlers}
        >
          <Project
            title="Snotra's Blog"
            image={require("../assets/background5.jpg")}
            author="MissSunotra"
            text="I really have no special and/or grand purpose in doing this, I simply  hope to cry with you, overcome with you and mostly entertain you. I hope this feels like home to you and I hope you enjoy the ride (it will be a roller coaster, I promise!)

            Thank you for stopping by here, enjoy the read!"
          />
        </Animated.View>
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const Text = styled.Text``;
