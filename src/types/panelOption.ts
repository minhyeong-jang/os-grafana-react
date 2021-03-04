export type PanelOptionMethod = 'get' | 'post' | 'put' | 'delete';
export type PanelOptionAlign = 'left' | 'center' | 'right';
export interface PanelOptions {
  showAddButton: boolean;
  createButtonText: string;
  createControllerUrl: string;
  createControllerMethod: PanelOptionMethod;
  getControllerUrl: string;
  getControllerMethod: PanelOptionMethod;
  updateButtonText: string;
  updateControllerUrl: string;
  updateControllerMethod: PanelOptionMethod;
  updateButtonAlign: PanelOptionAlign;
  showErrorMessage: boolean;
}
