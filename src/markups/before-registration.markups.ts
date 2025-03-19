import { Markup } from "telegraf";

export const beforeRegistrationKeybordText = [
  "🏢 Про BEST",
  "ℹ️ Про Івент",

];
export const beforeRegistrationKeyboard = Markup.keyboard([
  [Markup.button.text("ℹ️ Про Івент"), Markup.button.text("🏢 Про BEST")],

]).resize();
