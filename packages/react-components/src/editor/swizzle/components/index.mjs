/*************************************************************************
 *                                                                       *
 * FreeSewing's pattern editor allows swizzling components               *
 *                                                                       *
 * To 'swizzle' means to replace the default implementation of a         *
 * component with a custom one. It allows one to customize               *
 * the pattern editor.                                                   *
 *                                                                       *
 * This file holds the 'swizzleComponents' method that will return       *
 * the various components that can be swizzled, or their default         *
 * implementation.                                                       *
 *                                                                       *
 * To use a custom version, simply pas it as a prop into the editor      *
 * under the 'components' key. So to pass a custom 'TemporaryLoader'     *
 * component, you do:                                                    *
 *                                                                       *
 * <PatternEditor compnents={{ TemporaryLoader: MyTemporaryLoader }} />  *
 *                                                                       *
 *************************************************************************/

/*
 * Import of components that can be swizzled
 */
import { Link, AnchorLink, PageLink, WebLink, CardLink } from './link.mjs'
// Accordion
import { BaseAccordion, SubAccordion, Accordion } from './accordion.mjs'
// Auth wrapper
import {
  AuthWrapper,
  AuthMessageWrapper,
  ContactSupport,
  AuthRequired,
  AccountInactive,
  AccountDisabled,
  AccountProhibited,
  AccountStatusUnknown,
  RoleLacking,
  ConsentLacking,
} from './auth-wrapper.mjs'
// Ux
import { Ux } from './ux.mjs'
// Popout
import { Popout } from './popout.mjs'
// Loader
import { TemporaryLoader } from './loaders.mjs'
// Measurements Sets
import { UserSetPicker, BookmarkedSetPicker, CuratedSetPicker } from './sets.mjs'
// Curated Measurements Sets
import { CuratedMeasurementsSetLineup } from './curated-sets.mjs'
import { MeasurementsSetCard } from './measurements-set-card.mjs'
// Icons
import {
  ApplyIcon,
  BackIcon,
  BeakerIcon,
  BookmarkIcon,
  BoolNoIcon,
  BoolYesIcon,
  CircleIcon,
  CloseIcon,
  CuratedMeasurementsSetIcon,
  DesignIcon,
  DetailIcon,
  DocsIcon,
  DownIcon,
  EditIcon,
  ExpandIcon,
  ExportIcon,
  FailureIcon,
  FlagIcon,
  FlagNoteIcon,
  FlagInfoIcon,
  FlagTipIcon,
  FlagWarningIcon,
  FlagErrorIcon,
  FlagFixmeIcon,
  FlagExpandIcon,
  FlagOtionsIcon,
  GaugeIcon,
  GroupIcon,
  IncludeIcon,
  HelpIcon,
  KioskIcon,
  LeftIcon,
  ListIcon,
  LockIcon,
  MarginIcon,
  MeasurementsIcon,
  MeasurementsSetIcon,
  MenuIcon,
  NoIcon,
  OkIcon,
  OptionsIcon,
  PaperlessIcon,
  PlusIcon,
  PrintIcon,
  ResetAllIcon,
  ResetIcon,
  RightIcon,
  RocketIcon,
  RotateIcon,
  SaIcon,
  SaveIcon,
  SaveAsIcon,
  ScaleIcon,
  SettingsIcon,
  SpinnerIcon,
  SuccessIcon,
  TipIcon,
  TrashIcon,
  UiIcon,
  UndoIcon,
  UnitsIcon,
  UpIcon,
  UploadIcon,
  UxIcon,
  XrayIcon,
  ViewDraftIcon,
  ViewMeasurementsIcon,
  ViewTestIcon,
  ViewTimingIcon,
  ViewPrintLayoutIcon,
  ViewSaveIcon,
  ViewExportIcon,
  ViewEditSettingsIcon,
  ViewLogsIcon,
  ViewInspectIcon,
  ViewDocsIcon,
  ViewDesignsIcon,
  ViewViewPickerIcon,
  ViewUndosIcon,
} from './icons.mjs'
// Measurements Editor
import { MeasurementsEditor } from './measurements-editor.mjs'
// Zoomable pattern
import { ZoomablePattern, ZoomContextProvider } from './zoomable-pattern.mjs'
import { PatternLayout } from './pattern-layout.mjs'
// inputs
import {
  FormControl,
  ButtonFrame,
  NumberInput,
  StringInput,
  ListInput,
  MarkdownInput,
  MeasurementInput,
  ToggleInput,
} from './inputs.mjs'
// Views
import { DesignsView } from './designs-view.mjs'
import { DraftView } from './draft-view.mjs'
import { ErrorView } from './error-view.mjs'
import { MeasurementsView } from './measurements-view.mjs'
import { SaveView } from './save-view.mjs'
import { ViewPicker } from './view-picker.mjs'
import { UndoStep, UndoStepTimeAgo, UndosView } from './undos-view.mjs'
// Pattern
import { Pattern } from '@freesewing/react-components/pattern'
// Menus
import { DraftMenu } from './menus/draft-menu.mjs'
import { CoreSettingsMenu, CoreSetting } from './menus/core-settings-menu.mjs'
import { DesignOptionsMenu, DesignOption } from './menus/design-options-menu.mjs'
import { UiPreferencesMenu, UiPreference } from './menus/ui-preferences-menu.mjs'
import { MenuItem, MenuItemGroup, MenuItemTitle } from './menus/containers.mjs'
import {
  MenuBoolInput,
  MenuConstantInput,
  MenuDegInput,
  MenuEditOption,
  MenuListInput,
  MenuListToggle,
  MenuMmInput,
  //MenuNumberInput,
  MenuUxSettingInput,
  MenuOnlySettingInput,
  MenuPctInput,
  MenuSliderInput,
} from './menus/shared-inputs.mjs'
import {
  MenuBoolValue,
  MenuConstantOptionValue,
  MenuCountOptionValue,
  MenuDegOptionValue,
  MenuHighlightValue,
  MenuListOptionValue,
  MenuListValue,
  MenuMmOptionValue,
  MenuMmValue,
  MenuOnlySettingValue,
  MenuPctOptionValue,
  MenuScaleSettingValue,
  MenuShowValue,
} from './menus/shared-values.mjs'
import {
  HeaderMenu,
  HeaderMenuAllViews,
  HeaderMenuDraftView,
  HeaderMenuButton,
  HeaderMenuDropdown,
  HeaderMenuDraftViewDesignOptions,
  HeaderMenuDraftViewCoreSettings,
  HeaderMenuDraftViewUiPreferences,
  HeaderMenuDraftViewFlags,
  HeaderMenuDraftViewIcons,
  HeaderMenuIcon,
  HeaderMenuIconSpacer,
  HeaderMenuSaveIcons,
  HeaderMenuUndoIcons,
  HeaderMenuViewMenu,
} from './header-menu.mjs'
// Flags
import { Flag, FlagTypeIcon, FlagsAccordionTitle, FlagsAccordionEntries } from './flags.mjs'
// View Menu
import {
  AsideViewMenu,
  AsideViewMenuIcons,
  AsideViewMenuButton,
  AsideViewMenuSpacer,
  ViewTypeIcon,
} from './aside-view-menu.mjs'
import { Null } from './null.mjs'
import { LargeScreenOnly } from './large-screen-only.mjs'
import { Tooltip } from './tooltip.mjs'
import { LoadingStatus } from './loading-status.mjs'
import { Spinner, Loading } from './spinner.mjs'
import { Tab, Tabs } from './tabs.mjs'
import { Markdown } from './markdown.mjs'
import { HtmlSpan } from './html-span.mjs'
/**
 * This object holds all components that can be swizzled
 */
const defaultComponents = {
  Accordion,
  AuthWrapper,
  AuthMessageWrapper,
  BackIcon,
  ContactSupport,
  AuthRequired,
  AccountInactive,
  AccountDisabled,
  AccountProhibited,
  AccountStatusUnknown,
  AnchorLink,
  AsideViewMenu,
  AsideViewMenuIcons,
  AsideViewMenuButton,
  AsideViewMenuSpacer,
  RoleLacking,
  ConsentLacking,
  BaseAccordion,
  BookmarkedSetPicker,
  ButtonFrame,
  CardLink,
  CircleIcon,
  CoreSetting,
  CoreSettingsMenu,
  CuratedMeasurementsSetIcon,
  CuratedMeasurementsSetLineup,
  CuratedSetPicker,
  DesignOption,
  DesignOptionsMenu,
  DesignsView,
  DraftMenu,
  DraftView,
  ErrorView,
  SaveView,
  Flag,
  FlagsAccordionTitle,
  FlagsAccordionEntries,
  FlagTypeIcon,
  FormControl,
  HeaderMenu,
  HeaderMenuAllViews,
  HeaderMenuDraftView,
  HeaderMenuDraftViewDesignOptions,
  HeaderMenuDraftViewCoreSettings,
  HeaderMenuDraftViewUiPreferences,
  HeaderMenuDraftViewFlags,
  HeaderMenuDraftViewIcons,
  HeaderMenuButton,
  HeaderMenuDropdown,
  HeaderMenuIcon,
  HeaderMenuIconSpacer,
  HeaderMenuSaveIcons,
  HeaderMenuUndoIcons,
  HtmlSpan,
  LargeScreenOnly,
  Link,
  ListInput,
  Loading,
  LoadingStatus,
  Markdown,
  MarkdownInput,
  MeasurementInput,
  MeasurementsSetCard,
  MeasurementsView,
  MeasurementsEditor,
  MenuIcon,
  NumberInput,
  Null,
  PageLink,
  Pattern,
  PatternLayout,
  Popout,
  StringInput,
  SubAccordion,
  Spinner,
  SpinnerIcon,
  Tab,
  Tabs,
  TemporaryLoader,
  ToggleInput,
  Tooltip,
  UiPreferencesMenu,
  UiPreference,
  UndoStep,
  UndoStepTimeAgo,
  UndosView,
  UserSetPicker,
  Ux,
  HeaderMenuViewMenu,
  ViewPicker,
  ViewTypeIcon,
  WebLink,
  ZoomablePattern,
  ZoomContextProvider,
  // icons
  ApplyIcon,
  BeakerIcon,
  BookmarkIcon,
  BoolNoIcon,
  BoolYesIcon,
  CloseIcon,
  DesignIcon,
  DetailIcon,
  DocsIcon,
  DownIcon,
  EditIcon,
  ExpandIcon,
  ExportIcon,
  FailureIcon,
  FlagIcon,
  FlagNoteIcon,
  FlagInfoIcon,
  FlagTipIcon,
  FlagWarningIcon,
  FlagErrorIcon,
  FlagFixmeIcon,
  FlagExpandIcon,
  FlagOtionsIcon,
  GaugeIcon,
  GroupIcon,
  HelpIcon,
  IncludeIcon,
  KioskIcon,
  LeftIcon,
  ListIcon,
  LockIcon,
  MarginIcon,
  MeasurementsIcon,
  MeasurementsSetIcon,
  NoIcon,
  OkIcon,
  OptionsIcon,
  PaperlessIcon,
  PlusIcon,
  PrintIcon,
  ResetAllIcon,
  ResetIcon,
  RightIcon,
  RocketIcon,
  RotateIcon,
  SaIcon,
  SaveIcon,
  SaveAsIcon,
  ScaleIcon,
  SettingsIcon,
  SuccessIcon,
  TipIcon,
  TrashIcon,
  UiIcon,
  UndoIcon,
  UnitsIcon,
  UpIcon,
  UploadIcon,
  UxIcon,
  XrayIcon,
  ViewDraftIcon,
  ViewMeasurementsIcon,
  ViewTestIcon,
  ViewTimingIcon,
  ViewPrintLayoutIcon,
  ViewSaveIcon,
  ViewExportIcon,
  ViewEditSettingsIcon,
  ViewLogsIcon,
  ViewInspectIcon,
  ViewDocsIcon,
  ViewDesignsIcon,
  ViewViewPickerIcon,
  ViewUndosIcon,
  // menus
  MenuItem,
  MenuItemGroup,
  MenuItemTitle,
  MenuBoolInput,
  MenuConstantInput,
  MenuDegInput,
  MenuEditOption,
  MenuListInput,
  MenuListToggle,
  MenuMmInput,
  //MenuNumberInput,
  MenuUxSettingInput,
  MenuOnlySettingInput,
  MenuPctInput,
  MenuSliderInput,
  MenuBoolValue,
  MenuConstantOptionValue,
  MenuCountOptionValue,
  MenuDegOptionValue,
  MenuHighlightValue,
  MenuListOptionValue,
  MenuListValue,
  MenuMmOptionValue,
  MenuMmValue,
  MenuOnlySettingValue,
  MenuPctOptionValue,
  MenuScaleSettingValue,
  MenuShowValue,
}

/*
 * This method returns a component that can be swizzled
 * So either the passed-in component, or the default one
 */
const swizzleComponents = (components = {}, Swizzled) => {
  /*
   * We need to return all resulting components, swizzled or not
   * So we create this object so we can pass that down
   */
  const all = {}
  for (let [name, Component] of Object.entries(defaultComponents)) {
    all[name] = components[name]
      ? (props) => components[name]({ Swizzled, ...props })
      : (props) => <Component {...props} Swizzled={Swizzled} />
  }

  /*
   * Return all components
   */
  return all
}

/*
 * Named exports
 */
export {
  swizzleComponents,
  // Re-export all components for specific imports
  Accordion,
  AuthWrapper,
  AuthMessageWrapper,
  BackIcon,
  ContactSupport,
  AuthRequired,
  AccountInactive,
  AccountDisabled,
  AccountProhibited,
  AccountStatusUnknown,
  AnchorLink,
  AsideViewMenu,
  AsideViewMenuIcons,
  AsideViewMenuButton,
  AsideViewMenuSpacer,
  RoleLacking,
  ConsentLacking,
  BaseAccordion,
  BookmarkedSetPicker,
  ButtonFrame,
  CardLink,
  CircleIcon,
  CoreSetting,
  CoreSettingsMenu,
  CuratedMeasurementsSetIcon,
  CuratedMeasurementsSetLineup,
  CuratedSetPicker,
  DesignOption,
  DesignOptionsMenu,
  DesignsView,
  DraftMenu,
  DraftView,
  ErrorView,
  SaveView,
  Flag,
  FlagsAccordionTitle,
  FlagsAccordionEntries,
  FlagTypeIcon,
  FormControl,
  HeaderMenu,
  HeaderMenuAllViews,
  HeaderMenuDraftView,
  HeaderMenuDraftViewDesignOptions,
  HeaderMenuDraftViewCoreSettings,
  HeaderMenuDraftViewUiPreferences,
  HeaderMenuDraftViewFlags,
  HeaderMenuDraftViewIcons,
  HeaderMenuButton,
  HeaderMenuDropdown,
  HeaderMenuIcon,
  HeaderMenuIconSpacer,
  HeaderMenuSaveIcons,
  HeaderMenuUndoIcons,
  HtmlSpan,
  LargeScreenOnly,
  Link,
  ListInput,
  Loading,
  LoadingStatus,
  Markdown,
  MarkdownInput,
  MeasurementInput,
  MeasurementsSetCard,
  MeasurementsView,
  MeasurementsEditor,
  MenuIcon,
  NumberInput,
  Null,
  PageLink,
  Pattern,
  PatternLayout,
  Popout,
  StringInput,
  SubAccordion,
  Spinner,
  SpinnerIcon,
  Tab,
  Tabs,
  TemporaryLoader,
  ToggleInput,
  Tooltip,
  UiPreferencesMenu,
  UiPreference,
  UndoStep,
  UndoStepTimeAgo,
  UndosView,
  UserSetPicker,
  Ux,
  HeaderMenuViewMenu,
  ViewPicker,
  ViewTypeIcon,
  WebLink,
  ZoomablePattern,
  ZoomContextProvider,
  // icons
  ApplyIcon,
  BeakerIcon,
  BookmarkIcon,
  BoolNoIcon,
  BoolYesIcon,
  CloseIcon,
  DesignIcon,
  DetailIcon,
  DocsIcon,
  DownIcon,
  EditIcon,
  ExpandIcon,
  ExportIcon,
  FailureIcon,
  FlagIcon,
  FlagNoteIcon,
  FlagInfoIcon,
  FlagTipIcon,
  FlagWarningIcon,
  FlagErrorIcon,
  FlagFixmeIcon,
  FlagExpandIcon,
  FlagOtionsIcon,
  GaugeIcon,
  GroupIcon,
  HelpIcon,
  IncludeIcon,
  KioskIcon,
  LeftIcon,
  ListIcon,
  LockIcon,
  MarginIcon,
  MeasurementsIcon,
  MeasurementsSetIcon,
  NoIcon,
  OkIcon,
  OptionsIcon,
  PaperlessIcon,
  PlusIcon,
  PrintIcon,
  ResetAllIcon,
  ResetIcon,
  RightIcon,
  RocketIcon,
  RotateIcon,
  SaIcon,
  SaveIcon,
  SaveAsIcon,
  ScaleIcon,
  SettingsIcon,
  SuccessIcon,
  TipIcon,
  TrashIcon,
  UiIcon,
  UndoIcon,
  UnitsIcon,
  UpIcon,
  UploadIcon,
  UxIcon,
  XrayIcon,
  ViewDraftIcon,
  ViewMeasurementsIcon,
  ViewTestIcon,
  ViewTimingIcon,
  ViewPrintLayoutIcon,
  ViewSaveIcon,
  ViewExportIcon,
  ViewEditSettingsIcon,
  ViewLogsIcon,
  ViewInspectIcon,
  ViewDocsIcon,
  ViewDesignsIcon,
  ViewViewPickerIcon,
  ViewUndosIcon,
  // menus
  MenuItem,
  MenuItemGroup,
  MenuItemTitle,
  MenuBoolInput,
  MenuConstantInput,
  MenuDegInput,
  MenuEditOption,
  MenuListInput,
  MenuListToggle,
  MenuMmInput,
  //MenuNumberInput,
  MenuUxSettingInput,
  MenuOnlySettingInput,
  MenuPctInput,
  MenuSliderInput,
  MenuBoolValue,
  MenuConstantOptionValue,
  MenuCountOptionValue,
  MenuDegOptionValue,
  MenuHighlightValue,
  MenuListOptionValue,
  MenuListValue,
  MenuMmOptionValue,
  MenuMmValue,
  MenuOnlySettingValue,
  MenuPctOptionValue,
  MenuScaleSettingValue,
  MenuShowValue,
}