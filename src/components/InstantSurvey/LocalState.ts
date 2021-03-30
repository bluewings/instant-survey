import { atom } from 'recoil';

const GUTTER = 4;
const INDENT = 16;
const DRAG_HANDLE_WIDTH = 32;
const ATTR_TYPE_WIDTH = 40;
const ATTR_NAME_WIDTH = 160;
const TOGGLE_BUTTON_WIDTH = 32;
const REMOVE_BUTTON_WIDTH = 32;

export const SIZE = {
  GUTTER,
  INDENT,
  DRAG_HANDLE_WIDTH,
  ATTR_TYPE_WIDTH,
  ATTR_NAME_WIDTH,
  TOGGLE_BUTTON_WIDTH,
  REMOVE_BUTTON_WIDTH,
  L_COLUMNS_WIDTH: DRAG_HANDLE_WIDTH + ATTR_TYPE_WIDTH + ATTR_NAME_WIDTH + 2,
  R_COLUMNS_WIDTH: TOGGLE_BUTTON_WIDTH + REMOVE_BUTTON_WIDTH,
};

export const containerWidthState = atom<number>({
  key: 'containerWidthState',
  default: 0,
});

export const scrollLeftState = atom<number>({
  key: 'scrollLeftState',
  default: 0,
});

export const tickState = atom<number>({
  key: 'tickState',
  default: 0,
});

export const activeIdState = atom<string>({
  key: 'activeIdState',
  default: '',
});

export const keywordState = atom<string>({
  key: 'keywordState',
  default: '',
});

export const maxContentWidthState = atom<number>({
  key: 'maxContentWidthState',
  default: 0,
});

export const jsonPathsState = atom<string[]>({
  key: 'jsonPathsState',
  default: [],
});

export const hoverState = atom<string>({
  key: 'hoverState',
  default: '',
});


export const answersHeightState = atom<{ [key: string]: number }>({
  key: 'answersHeightState',
  default: {},
});
