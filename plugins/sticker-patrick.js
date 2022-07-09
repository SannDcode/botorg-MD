const dir = [
'https://i.ibb.co/WKxM2gM/image.png',
'https://i.ibb.co/Hh6rxH7/1.png',
'https://i.ibb.co/jGqY1Xs/10.png',
'https://i.ibb.co/SJHTdDj/100.png',
'https://i.ibb.co/316BCxj/101.png',
'https://i.ibb.co/9h9WZq0/102.png',
'https://i.ibb.co/mrnHtQy/103.png',
'https://i.ibb.co/rcd8Lbk/104.png',
'https://i.ibb.co/L6CkDTK/105.png',
'https://i.ibb.co/wyY6Lf0/106.png',
'https://i.ibb.co/4NV5X0P/107.png',
'https://i.ibb.co/mRvDy7q/108.png',
'https://i.ibb.co/LSMH9K0/109.png',
'https://i.ibb.co/XSZ5t1d/11.png',
'https://i.ibb.co/Qd9BWZg/110.png',
'https://i.ibb.co/SBLpVQW/111.png',
'https://i.ibb.co/JygTbYf/112.png',
'https://i.ibb.co/fGTgvTr/113.png',
'https://i.ibb.co/Ydyxwdm/114.png',
'https://i.ibb.co/3fLtKWy/Patrick-by-cocopry-256px-3.gif',
'https://i.ibb.co/31Xgrnr/Patrick-by-cocopry-256px-4.gif',
'https://i.ibb.co/C25nxxv/Patrick-by-cocopry-256px-5.gif',
'https://i.ibb.co/v49dwzC/Patrick-by-cocopry-256px-6.gif',
'https://i.ibb.co/HqnNBTt/Patrick-by-cocopry-256px-7.gif',
'https://i.ibb.co/hHfhPMK/Patrick-by-cocopry-256px-8.gif',
'https://i.ibb.co/B3XNkjQ/Patrick-by-cocopry-256px-9.gif'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dad.webp', '', m)
}
handler.help = ['patrick']
handler.tags = ['sticker', 'fun']
handler.command = /^patrick$/i

module.exports = handler
