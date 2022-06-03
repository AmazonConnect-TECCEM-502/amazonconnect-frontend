/*
Author: María Fernanda Ramirez Barragán

Description: Buttons of the different themes of the app

Usage:
<ThemeOptions />
*/

const ThemeOptions = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("light");
        }}
      >
        Tecmex Theme
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
          await props.newTheme("light-protanopia");
        }}
      >
        Light Protanopia-Deuteranopia Theme
      </button>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("light-tritanopia");
        }}
      >
        Light Tritanopia Theme
      </button>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("dark-protonopia");
        }}
      >
        Dark Protonopia-Deuteranopia Theme
      </button>
      <button
        type="button"
        onClick={async () => {
          await props.newTheme("dark-tritanopia");
        }}
      >
        Dark Tritanopia Theme
      </button>
    </div>
  );
};

export default ThemeOptions;
