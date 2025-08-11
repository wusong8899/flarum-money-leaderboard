<?php

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use wusong8899\MoneyLeaderboard\Controllers\MoneyLeaderboardController;
use wusong8899\MoneyLeaderboard\Controllers\ListMoneyLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__ . '/less/forum.less')
        ->route('/moneyLeaderboard', 'moneyLeaderboard.index', MoneyLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('allowViewLeaderbaord', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("moneyLeaderboard.allowViewLeaderbaord");
        }),

    (new Extend\Routes('api'))
        ->get('/moneyLeaderboard', 'moneyLeaderboard.get', ListMoneyLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('moneyLeaderBoardIcon', 'wusong8899-money-leaderboard.moneyLeaderBoardIcon')
        ->serializeToForum('moneyLeaderBoardEntryPosition', 'wusong8899-money-leaderboard.moneyLeaderBoardEntryPosition')
        ->serializeToForum('leaderboardMaxLoadCount', 'wusong8899-money-leaderboard.leaderboardMaxLoadCount', 'intval')
        ->serializeToForum('leaderboardInitLoadCount', 'wusong8899-money-leaderboard.leaderboardInitLoadCount', 'intval')
        ->serializeToForum('leaderboardLoadMoreCount', 'wusong8899-money-leaderboard.leaderboardLoadMoreCount', 'intval'),
];

return $extend;