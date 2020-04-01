export interface ISetTextareaFocusAction {
  readonly type: 'SET_TEXTAREA_FOCUS';
  payload: boolean;
}

export type UIActions = 
| ISetTextareaFocusAction
