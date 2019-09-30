export interface SidebarState {
  toggle: boolean;
}
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

interface SidebarToggle {
  type: typeof TOGGLE_SIDEBAR;
}

export type SidebarActions = SidebarToggle;
