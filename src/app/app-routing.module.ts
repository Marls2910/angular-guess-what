import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticViewComponent } from './components/statistic-view/statistic-view.component';
import { SettingViewComponent } from './components/setting-view/setting-view.component';
import { OverviewGamesComponent } from './components/overview-games/overview-games.component';
import { GameModeComponent } from './components/game-mode/game-mode.component';
import { HomeViewComponent } from './components/home-view/home-view.component';

const routes: Routes = [
    {
        path: '', component: HomeViewComponent
    }, {
        path: 'user-statistics', component: StatisticViewComponent
    }, {
        path: 'settings', component: SettingViewComponent
    }, {
        path: 'game-overview', component: OverviewGamesComponent
    }, {
        path: 'game-mode', component: GameModeComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeViewComponent, StatisticViewComponent, SettingViewComponent, OverviewGamesComponent, GameModeComponent];