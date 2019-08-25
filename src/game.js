import axios from 'axios'

exports.handler = async function(event, context, callback) {
    const webhookBody = JSON.parse(event.body)
    const targetEvent = webhookBody.events[0]

    const matchResult = targetEvent.message.text.match(/スタート/)
    if (!matchResult) {
        callback(null, {})
    }

    const data = {
        replyToken: targetEvent.replyToken,
        messages: [
            {
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
            }
        ]
    }

    const res = await axios.post(
        'https://api.line.me/v2/bot/message/reply',
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`
            }
        }
    )

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(event)
    })
}