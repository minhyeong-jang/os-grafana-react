export type PanelOptionMethod = 'get' | 'post' | 'put' | 'delete';
export type PanelOptionAlign = 'left' | 'center' | 'right';
export interface PanelOptions {
  showControllerButton: boolean;
  createModalButtonText: string;
  updateModalButtonText: string;
  createControllerUrl: string;
  createControllerMethod: PanelOptionMethod;
  getControllerUrl: string;
  getControllerMethod: PanelOptionMethod;
  updateButtonText: string;
  updateControllerUrl: string;
  updateControllerMethod: PanelOptionMethod;
  deleteControllerUrl: string;
  deleteControllerMethod: PanelOptionMethod;
  updateButtonAlign: PanelOptionAlign;
  showErrorMessage: boolean;
}
