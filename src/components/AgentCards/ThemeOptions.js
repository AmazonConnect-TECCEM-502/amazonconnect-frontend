import { useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const ThemeOptions = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("light");
        }}
      >
        Light Theme
      </button>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("dark");
        }}
      >
        Dark Theme
      </button>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("blue");
        }}
      >
        Blue Theme
      </button>
    </div>
  );
};

export default ThemeOptions;
