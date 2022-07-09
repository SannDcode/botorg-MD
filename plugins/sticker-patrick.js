const dir = [
'https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dad.webp', '', m)
}
handler.help = ['patrick']
handler.tags = ['sticker', 'fun']
handler.command = /^patrick$/i

module.exports = handler
