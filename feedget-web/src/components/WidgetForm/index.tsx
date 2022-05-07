import { CloseButton } from "../CloseButton";
import BugImageUrl from "../../assets/bug.svg";
import IdeaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <>
      <div className="relative bg-zinc-900 p-4 rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedbackSent ? (
          <FeedbackSuccessStep
            onFeedbackRestartRequested={handleRestartFeedback}
          />
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                onFeedbackRestartRequested={handleRestartFeedback}
                feedbackType={feedbackType}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )}
        <footer className="text-xs text-neutral-400">
          Feito com ♥ por{" "}
          <a
            href="https://github.com/brunomileto"
            className="underline underline-offset-1"
          >
            RocketSeat
          </a>
        </footer>
      </div>
    </>
  );
};
