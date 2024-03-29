import React from "react";
import { Text, View } from "react-native";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              key={key}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
              title={value.title}
            />
          );
        })}
      </View>
      <Copyright />
    </View>
  );
}
