import { Transition } from "react-native-reanimated";

const Transition = () => (
  <Transition.Together>
    <Transition.Out
      type="slide-bottom"
      durationMs={400}
      interpolation="easeIn"
    />
    <Transition.In type="fade" durationMs={500} />
  </Transition.Together>
);
