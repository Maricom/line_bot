import axios from 'axios'
import messageData from './gameMessage'

exports.handler = async function(event, context, callback) {
    const webhookBody = JSON.parse(event.body)
    const targetEvent = webhookBody.events[0]

    const matchResult = targetEvent.message.text.match(/[\d+]|スタート/)
    if (!matchResult) {
        callback(null, {})
    }

    const data = {
        replyToken: targetEvent.replyToken,
        messages: [
            messageData[messageKey]
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