import { NextResponse } from 'next/server';

async function sendToTelegram(data) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) {
        throw new Error('Telegram credentials not configured');
    }
    const {
        direction,
        name,
        businessArea,
        budget,
        email,
        phone
    } = data;
    const message = `
            🆕 <b>New Lead Submission</b>
            👤 <b>Name:</b> ${name || 'N/A'}
            📧 <b>Email:</b> ${email || 'N/A'}
            📞 <b>Phone:</b> ${phone || 'N/A'}
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
}

async function sendToCRM(data) {
    const crmKey = process.env.CRM_KEY;
    const crmTeam = process.env.CRM_TEAM;
    const crmUrl = process.env.CRM_API_URL;
    if (!crmKey || !crmTeam) {
        throw new Error('CRM credentials not configured');
    }
    const {
        direction,
        name,
        businessArea,
        budget,
        email,
        phone
    } = data;
    const payload = {
        phone: phone,
        source: 'VisionSpace Landing',
        source_comment: 'Lead from VisionSpace landing page',
        name: name,
        email: email,
        custom_fields: {
            direction: direction,
            business_area: businessArea,
            budget: budget,
        },
    };
    const crmResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': crmKey,
            'X-TRAFFIC-TEAM': crmTeam,
        },
        body: JSON.stringify(payload),
    });
    if (!crmResponse.ok) {
        const errorText = await crmResponse.text();
        console.error('CRM API error:', errorText);
        throw new Error('Failed to send lead to CRM');
    }
    console.log('✅ Lead sent to CRM successfully');
}


export async function POST(request) {
    const data = await request.json();
    let telegramError = false;
    let crmError = false;
    try {
        await sendToTelegram(data);
    } catch (error) {
        console.error('Error processing lead:', error);
        telegramError = true;
    }
    try {
        await sendToCRM(data);
    } catch (error) {
        console.error('Error processing lead:', error);
        crmError = true;
    }
    if (telegramError && crmError) {
        return NextResponse.json({
            success: false,
            telegramError,
            crmError,
        }, { status: 500 });
    }
    return NextResponse.json({
        success: !telegramError && !crmError,
        telegramError,
        crmError,
    });
}
