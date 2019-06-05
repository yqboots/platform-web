import {createSelector} from '@ngrx/store';
import {getMailAppState, LabelsState, MailAppState} from '@yq/extensions/mail-ngrx/store/reducers';

export const getLabelsState = createSelector(
  getMailAppState,
  (state: MailAppState) => state.labels
);

export const getLabels = createSelector(
  getLabelsState,
  (state: LabelsState) => state.entities
);

export const getLabelsLoaded = createSelector(
  getLabelsState,
  (state: LabelsState) => state.loaded
);

export const getLabelsArr = createSelector(
  getLabels,
  (entities) => Object.keys(entities).map((id) => entities[id])
);
