const Discord = require('discord.js');
const client = new Discord.Client();
const { meme } = require('memejs');
const table = require('ascii-table')

// keeps the discord bot alive
const keep_alive = require('./keep_alive.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!!cat') {
          const subReddit = ["catsvstechnology", 
                        "cats", 
                        "thecatdimension", 
                        "Kitten",
                        "kittens",
												"CatsBeingCats",
												"Catswithjobs"
                        ]

      const randomSubReddit = subReddit[Math.floor(Math.random() * subReddit.length)];


   meme(`${randomSubReddit}`, function(err, data) {
        if (err) return console.error(err);

        //puts data in the console

        const memeInfo = new table(`${randomSubReddit}`)
          .setTitle(`${randomSubReddit}`)
          .addRow("title", `${data.title}`)
          .addRow("url",  `${data.url}`)
          .addRow("author",  `${data.author}`)
          .addRow("subReddit",  `${data.subreddit}`)
          .addRow("created",  `${data.created}`)
          .addRow("created_utc",  `${data.created_utc}`)

        console.log(memeInfo.toString())

        // makes an embed for the meme information
        const memeEmbed ={
          title: `${data.title}`,
          url: `${data.url}`,
          description: `Posted by u/${data.author} \nr/${randomSubReddit}`,
          image:{
            url: `${data.url}`
          },
          timestamp: new Date(),
						footer: {
							text: 'Bot Made by Lexi#1606',
							icon_url: 'https://cdn.discordapp.com/avatars/358140374570762240/ddd5de0381ce70d3c5bca26743b18d1b.png?size=128',
					},

        }

        msg.channel.send({ embed: memeEmbed });

      })
  }
});

client.login('TOKEN');