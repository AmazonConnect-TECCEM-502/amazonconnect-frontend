/*
Author: María Fernanda Ramirez Barragán

Description: Buttons of the different themes of the app

Usage:
<ThemeOptions />
*/

const ThemeOptions = (props) => {
  return (
    <div className="dropdown-menu-themes">
      <a
        onClick={async () => {
          await props.newTheme("light");
        }}
      >
        Tecmex Theme
      </a>
      <a
        onClick={async () => {
          await props.newTheme("dark");
        }}
      >
        Dark Theme
      </a>
      <a
        onClick={async () => {
          await props.newTheme("light-protanopia");
        }}
      >
        Light Protanopia-Deuteranopia Theme
      </a>
      <a
        onClick={async () => {
          await props.newTheme("dark-protonopia");
        }}
      >
        Dark Protonopia-Deuteranopia Theme
      </a>
      <a
        onClick={async () => {
          await props.newTheme("light-tritanopia");
        }}
      >
        Light Tritanopia Theme
      </a>
      <a
        onClick={async () => {
          await props.newTheme("dark-tritanopia");
        }}
      >
        Dark Tritanopia Theme
      </a>
    </div>
  );
};

export default ThemeOptions;
