import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  brandTitle: "DHTMLX Widgets",
  brandUrl: "https://dhtmlx.github.io/angular-suite-demo/?path=/story",
  brandImage: "./assets/logo.svg",
});

addons.setConfig({
  showPanel: false,
  enableShortcuts: false,
  theme,
});
