import {extend, override} from 'flarum/extend';

app.initializers.add('wusong8899-money-leaderboard', () => {
  app.extensionData
    .for('wusong8899-money-leaderboard')
    .registerSetting({
      setting: 'wusong8899-money-leaderboard.moneyLeaderBoardIcon',
      label: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-icon'),
      help: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-icon-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'wusong8899-money-leaderboard.moneyLeaderBoardEntryPosition',
      label: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-entry-position'),
      type: 'select',
      options: {
        0: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-entry-sideNav'),
        1: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-entry-topRightMenu')
      },
    })
    .registerSetting({
      setting: 'wusong8899-money-leaderboard.leaderboardMaxLoadCount',
      label: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-max-load-count'),
      placeholder:50,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'wusong8899-money-leaderboard.leaderboardInitLoadCount',
      label: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-init-load-count'),
      placeholder:20,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'wusong8899-money-leaderboard.leaderboardLoadMoreCount',
      label: app.translator.trans('wusong8899-money-leaderboard.admin.settings.leaderboard-load-more-count'),
      placeholder:10,
      min:1,
      type: 'number',
    })
    .registerPermission({
        icon: 'fas fa-sort-amount-up',
        label: app.translator.trans('wusong8899-money-leaderboard.admin.permission.allow_view_leaderboard'),
        permission: 'moneyLeaderboard.allowViewLeaderbaord',
      },
      'moderate',
      90
    );
});
