const { Client } = require('discord.js');
const app = new Client();

app.on('ready', () => {
    console.log(`Estou logado no corpo de ${app.user.tag}.`);
    app.user.setActivity('Bom dia!', { type: "LISTENING" });
});

app.on('message', (m) => {
    if (m.author.bot) return;
    if (m.channel.type === "dm") return;

    if (m.channel.id === "752505612503482439") {
        if (!m.content.toLowerCase().includes('bom') || !m.content.toLowerCase().includes('dia')) {
            m.delete();
            m.author.send('Apenas mensagens de bom dia no #xet-de-bom-dia');
        }
    }
});

app.login(process.env.AUTH_TOKEN);