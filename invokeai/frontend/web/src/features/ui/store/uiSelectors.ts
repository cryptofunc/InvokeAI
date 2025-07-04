import { createSelector } from '@reduxjs/toolkit';
import { selectEnabledTabs } from 'features/system/store/configSlice';
import { selectUiSlice } from 'features/ui/store/uiSlice';

export const selectActiveTab = createSelector(selectUiSlice, (ui) => ui.activeTab);
export const selectActiveTabIndex = createSelector(selectActiveTab, selectEnabledTabs, (activeTab, enabledTabs) => {
  return enabledTabs.indexOf(activeTab);
});
export const selectShouldShowImageDetails = createSelector(selectUiSlice, (ui) => ui.shouldShowImageDetails);
export const selectShouldShowProgressInViewer = createSelector(selectUiSlice, (ui) => ui.shouldShowProgressInViewer);
export const selectActiveTabCanvasRightPanel = createSelector(selectUiSlice, (ui) => ui.activeTabCanvasRightPanel);
export const selectShowGenerateTabSplashScreen = createSelector(selectUiSlice, (ui) => ui.showGenerateTabSplashScreen);
export const selectShowCanvasTabSplashScreen = createSelector(selectUiSlice, (ui) => ui.showCanvasTabSplashScreen);
