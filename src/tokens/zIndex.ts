/**
 * Z-Index Scale - ValidAI Neumorphic Design System
 *
 * Layering system for proper stacking context management.
 * Use these tokens to ensure consistent depth ordering.
 */

/**
 * Z-index scale tokens
 */
export const zIndex = {
  // Below everything - hidden or background elements
  hide: -1,

  // Default layer - normal flow content
  base: 0,

  // Slightly elevated - floating elements on page
  raised: 10,

  // Dropdowns, menus, selects
  dropdown: 100,

  // Sticky headers, floating buttons
  sticky: 200,

  // Overlay backgrounds (behind modals)
  overlay: 300,

  // Modal dialogs, sheets
  modal: 400,

  // Popovers, tooltips
  popover: 500,

  // Toasts, notifications
  toast: 600,

  // Maximum - debugging or critical overlays
  max: 9999,
} as const;

/**
 * Semantic z-index mappings for common components
 */
export const zIndexSemantics = {
  // Navigation
  navigation: {
    header: zIndex.sticky,
    sidebar: zIndex.sticky,
    bottomNav: zIndex.sticky,
    mobileMenu: zIndex.overlay,
  },

  // Overlays and modals
  overlays: {
    backdrop: zIndex.overlay,
    modal: zIndex.modal,
    drawer: zIndex.modal,
    sheet: zIndex.modal,
    dialog: zIndex.modal,
  },

  // Floating elements
  floating: {
    dropdown: zIndex.dropdown,
    select: zIndex.dropdown,
    menu: zIndex.dropdown,
    autocomplete: zIndex.dropdown,
  },

  // Tooltips and popovers
  hints: {
    tooltip: zIndex.popover,
    popover: zIndex.popover,
    contextMenu: zIndex.popover,
  },

  // Notifications
  notifications: {
    toast: zIndex.toast,
    snackbar: zIndex.toast,
    alert: zIndex.toast,
    banner: zIndex.raised,
  },

  // Special
  special: {
    loadingOverlay: zIndex.modal,
    imageViewer: zIndex.modal,
    commandPalette: zIndex.modal,
    devTools: zIndex.max,
  },
} as const;

export type ZIndex = typeof zIndex;
export type ZIndexSemantics = typeof zIndexSemantics;
