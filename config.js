module.exports = {
    app: {
        token: 'MTA0NTc1NzU0ODg0Nzk2MDE3OA.GD7o_W.WWG-1_ggrbXXzPOTbQRAsaKf2h92k1CdLx620c',
        playing: 'Code.',
        global: true,
        guild: '1040664139716116561'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
