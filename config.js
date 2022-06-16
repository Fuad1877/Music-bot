module.exports = {
    app: {984417036639801354
        px: 'fd88e28f1d631f8e045638489df19ce70270b64aa40b903589c422be384addce',
        token: 'OTg0NDE3MDM2NjM5ODAxMzU0.GXBkRz._RG8ywSliZQnTkEwrnfSOnkbzLkS-WgGBxGBP8',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
