import axios from 'axios';
import 'dotenv/config';

export const sendTelegramMessage = async (message) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId || token.includes('YOUR_BOT_TOKEN')) {
        console.warn('⚠️ Telegram настройки не заданы. Сообщение не отправлено.');
        return;
    }

    try {
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML' // Позволяет использовать жирный шрифт и т.д.
        });
        console.log('📨 Сообщение в Telegram отправлено.');
    } catch (error) {
        console.error('❌ Ошибка отправки в Telegram:', error.message);
        if (error.response) {
            console.error('Детали ошибки Telegram:', error.response.data);
        }
    }
};
