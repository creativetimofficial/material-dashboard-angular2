import { createAction, props } from '@ngrx/store';
import {DashboardStateInterface} from '../../types/dashboardState.interface';

export const updateTitle = createAction(
    '[Dashboard] Update Title',
    props<{ title: string }>()
);