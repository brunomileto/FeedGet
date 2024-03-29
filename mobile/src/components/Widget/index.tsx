import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <KeyboardAvoidingView behavior="padding">
          {feedbackSent ? (
            <Success onSendAnotherFeedback={handleRestartFeedback} />
          ) : (
            <>
              {feedbackType ? (
                <Form
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
                  feedbackType={feedbackType}
                />
              ) : (
                <Options onFeedbackTypeChanged={setFeedbackType} />
              )}
            </>
          )}
        </KeyboardAvoidingView>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
