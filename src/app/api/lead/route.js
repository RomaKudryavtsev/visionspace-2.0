import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (!botToken || !chatId) {
            throw new Error('Telegram credentials not configured');
        }

        const body = await request.json();
        const {
            direction,
            name,
            businessArea,
            budget,
            contacts
        } = body;

        const message = `
            🆕 <b>New Lead Submission</b>
            👤 <b>Name:</b> ${name || 'N/A'}
            📧 <b>Contact:</b> ${contacts || 'N/A'}
            💬 <b>Direction:</b> ${direction || 'N/A'}
            🏢 <b>Business Area:</b> ${businessArea || 'N/A'}
            💰 <b>Budget:</b> ${budget || 'N/A'}
            ⏰ <b>Time:</b> ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}
        `.trim();
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML',
                }),
            }
        );
        const telegramData = await telegramResponse.json();
        if (!telegramData.ok) {
            console.error('Telegram API error:', telegramData);
            throw new Error('Failed to send message to Telegram');
        }
        console.log('✅ Lead sent to Telegram successfully');
        return NextResponse.json(
            {
                success: true,
                message: 'Lead submitted successfully',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing lead:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to process lead submission',
                message: error.message
            },
            { status: 500 }
        );
    }
}
