import "./styles.css";
import { Button as CssModuleButton } from "./components/cssModules/Button";
import { Button as StyledButton } from "./components/styledComponents/Button";
import { Button as EmotionButton } from "./components/emotion/Button";

export default function App() {
  return (
    <div
      style={{ paddingTop: "100px", display: "flex", justifyContent: "center" }}
    >
      {/* <CssModuleButton /> */}
      <StyledButton />
      <EmotionButton />
    </div>
  );
}
