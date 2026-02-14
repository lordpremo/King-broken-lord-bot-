import moment from 'moment-timezone';
import { BOT_NAME, PREFIX, OWNER_NAME, TIMEZONE } from '../config.js';

export async function handleMenu(command, args, reply) {
  if (!['menu', 'help'].includes(command)) return false;

  const now = moment().tz(TIMEZONE);
  const date = now.format('DD/MM/YYYY');
  const time = now.format('HH:mm:ss');

  const text = `
*╭─❖*
*┋ɴᴀᴍᴇ : ${BOT_NAME}*
*┋ᴅᴀᴛᴇ:* ${date}
*┋ ᴛɪᴍᴇ:* ${time}
*┋ᴘʀᴇғɪx: [ ${PREFIX} ]*
*┋ᴘʟᴜɢɪɴs ᴄᴍᴅ:* 637
*╰─❖*

> sir ${OWNER_NAME}

*search*
*╭─❖*
*┋* fullpp
*┋* blocklist
*┋* img
*┋* insult
*┋* play
*╰─❖*

*General*
*╭─❖*
*┋* owner
*┋* dev
*┋* support
*┋* url
*┋* about
*┋* broadcast
*┋* anti/delete2
*┋* antitag
*┋* telegramsc
*┋* cast2
*┋* repo
*┋* deploy
*┋* deployer
*┋* agents
*┋* getall
*┋* gay
*┋* areact
*┋* pair
*┋* ping
*┋* menu
*┋* scan
*┋* script
*┋* test
*┋* alive
*┋* poll
*┋* uptime
*┋* version
*┋* vv
*┋* wallpaper2
*┋* shazam
*╰─❖*

*trade-place*
*╭─❖*
*┋* currencylist
*┋* forex
*┋* fxstatus
*┋* fxpairs
*┋* stocktickers
*┋* fxexchange
*╰─❖*

*Weeb*
*╭─❖*
*┋* waifu
*┋* neko
*┋* shinobu
*┋* megumin
*┋* cosplay
*┋* couplepp
*╰─❖*

*Games*
*╭─❖*
*┋* guesscapital
*┋* chifumi
*┋* quizz
*┋* tictactoe
*╰─❖*

*Fun*
*╭─❖*
*┋* profile
*┋* hack
*┋* ranime
*┋* fancy
*┋* status
*┋* rank
*┋* toprank
*╰─❖*

*Other*
*╭─❖*
*┋* cad
*┋* butimg
*┋* buttxt
*┋* but
*╰─❖*

*Conversion*
*╭─❖*
*┋* url1
*┋* emomix
*┋* sticker
*┋* scrop
*┋* take
*┋* write
*┋* photo
*┋* trt
*┋* url
*╰─❖*

*Group*
*╭─❖*
*┋* add
*┋* disap-off
*┋* disap
*┋* req
*┋* disap90
*┋* reject
*┋* disap7
*┋* disap1
*┋* approve
*┋* vcf
*┋* invite
*┋* revoke
*┋* antiword
*┋* antilink-all
*┋* welcome
*┋* goodbye
*┋* antipromote
*┋* antidemote
*┋* forward
*┋* tagall
*┋* link
*┋* promote
*┋* demote
*┋* remove
*┋* del
*┋* info
*┋* antilink
*┋* antibot
*┋* group
*┋* gname
*┋* gdesc
*┋* gpp
*┋* hidetag
*┋* automute
*┋* autounmute
*┋* fkick
*┋* nsfw
*┋* kickall
*┋* tagallmembers
*┋* tagadmins
*┋* tagonline
*┋* tagoffline
*┋* tagadmin
*┋* warn
*╰─❖*

*Search*
*╭─❖*
*┋* google
*┋* imdb
*┋* movie
*┋* img
*┋* playy
*┋* play2
*┋* video2
*┋* stickersearch
*┋* define
*┋* lyrics1
*┋* weather
*╰─❖*

*Download*
*╭─❖*
*┋* apk
*┋* igdl
*┋* fbdl
*┋* tiktoklite
*┋* fbdl2
*┋* instagram
*┋* facabook
*┋* tiktok
*┋* facebook2
*╰─❖*

*Audio-Edit*
*╭─❖*
*┋* deep
*┋* bass
*┋* reverse
*┋* slow
*┋* smooth
*┋* tempo
*┋* nightcore
*╰─❖*

*Image-Edit*
*╭─❖*
*┋* shit
*┋* wasted
*┋* wanted
*┋* trigger
*┋* trash
*┋* rip
*┋* sepia
*┋* rainbow
*┋* invert
*┋* jail
*┋* affect
*┋* beautiful
*┋* blur
*┋* circle
*┋* facepalm
*┋* greyscale
*┋* joke
*╰─❖*

*Logo*
*╭─❖*
*┋* design
*┋* hacker
*┋* dragonball
*┋* naruto
*┋* didong
*┋* wall
*┋* summer
*┋* neonlight
*┋* greenneon
*┋* glitch
*┋* devil
*┋* boom
*┋* water
*┋* snow
*┋* transformer
*┋* thunder
*┋* harrypotter
*┋* cat
*┋* whitegold
*┋* lightglow
*┋* thor
*┋* neon
*┋* purple
*┋* gold
*┋* arena
*┋* incandescent
*┋* gif×1
*╰─❖*

*ai*
*╭─❖*
*┋* ai
*┋* imgai
*╰─❖*

*Reaction*
*╭─❖*
*┋* bully
*┋* cuddle
*┋* cry
*┋* hug
*┋* awoo
*┋* kiss
*┋* lick
*┋* pat
*┋* smug
*┋* bonk
*┋* yeet
*┋* blush
*┋* smile
*┋* wave
*┋* highfive
*┋* handhold
*┋* nom
*┋* bite
*┋* glomp
*┋* slap
*┋* kick
*┋* happy
*┋* wink
*┋* poke
*┋* dance
*┋* cringe
*╰─❖*
`;

  await reply(text);
  return true;
}
