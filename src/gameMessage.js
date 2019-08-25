export default {
    'スタート': {
        type: 'text',
        text: 'ぎじゅつしょてんのしめきりまであと７にち、だけどしんちょくは１０ぱーせんとみまん。あなたはどうする？',
        quickReply: {
            items: [
                {
                    type: 'action',
                    action: {
                        type: 'message',
                        label: 'げんかいまでがんばる',
                        text: '[1] げんかいまでがんばる'
                    }
                },
                {
                    type: 'action',
                    action: {
                        type: 'message',
                        label: 'あきらめる',
                        text: '[2] あきらめる'
                    }
                },
                {
                    type: 'action',
                    action: {
                        type: 'message',
                        label: 'いか',
                        text: '[3] いか'
                    }
                }
            ]
        }
    },
    '1': {
        type: 'text',
        text: 'がんばりすぎずねるべし'
    },
    '2': {
        type: 'text',
        text: 'あしたがんばろー'
    },
    '3': {
        type: 'text',
        text: 'いかともぼしゅうちゅう',
        quickReply: {
            items: [
                {
                    type: 'action',
                    action: {
                        type: 'message',
                        label: 'いいよ',
                        text: '[4] いいよ'
                    }
                },
                {
                    type: 'action',
                    action: {
                        type: 'message',
                        label: 'いやよ',
                        text: '[5] いやよ'
                    }
                }
            ]
        }
    },
    '4': {
        type: 'text',
        text: 'れんらくまってます'
    }
}