"use client";

import { atom } from "recoil";

let showHeaderAtomDefaultValue = false;

export const showHeaderAtom = atom({
  key: "showHeader",
  default: showHeaderAtomDefaultValue,
});

export const commandsAtom = atom({
  key: "commands",
  default: [],
});

export const isRootUserAtom = atom({
  key: "isRootUser",
  default: false,
});

export const terminalLabelAtom = atom({
  key: "terminalLabel",
  default: "visitor@lakshya:/",
});
