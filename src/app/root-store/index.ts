import { RootStoreModule } from './root-store.module';
import * as RootStoreSelectors from './photos-feature-store/selectors';
import * as RootStoreState from './photos-feature-store/state';
export * from './photos-feature-store';
export { RootStoreState, RootStoreSelectors, RootStoreModule };