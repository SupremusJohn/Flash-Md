const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/fichetest');


france(
  {
    nomCom: 'fichetest👤',
    categorie: 'RPSS'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
          𝐂𝐑𝐏𝐒 𝐑𝐎𝐋𝐈𝐒𝐓𝐄
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

*👤 𝗜𝗗 𝗥𝗼𝗹𝗶𝘀𝘁𝗲 :* ${data.e1}
*♨️ 𝗗𝗶𝘃𝗶𝘀𝗶𝗼𝗻 :* ${data.e2}
*⚜️ 𝗦𝘁𝗮𝘁𝘂𝘁 :* ${data.e3}

░░░░░░░░░░░░░░░░░
═════════════════
*🔥 𝗪𝗶𝘀𝗵 :* ${data.e4}/𝐉
*🧘‍♂️ 𝗦𝗮𝗴𝗲 :* ${data.e5}/𝐉
*🏆 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻 :* ${data.e6}
*😎 𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘀𝘁𝗲 :* ${data.e7}🌟
*🏅 𝗠𝗮𝗶𝘁𝗿𝗲 :* ${data.e8}
*👺 𝗗𝗶𝗰𝘁𝗮𝘁𝗲𝘂𝗿 :* ${data.e9}𝐓1𝐂
*🧠 𝗤𝗶 :* ${data.e10}
*🤠 𝗔𝗱𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗿 :* ${data.e11}
*🌝 𝗛𝗲𝗿𝗼 :* ${data.e12}𝐀𝐖
*💯 𝗟𝗲𝗴𝗲𝗻𝗱 :* ${data.e13}
░░░░░░░░░░░░░░░░░
═════════════════
*👊 𝗙𝗶𝗴𝗵𝘁 :* 𝗩 : ${data.e14} 𝗗 : ${data.e15}
*🏅 𝗧𝗢𝗣 3 :* ${data.e16}
*🎭 𝗦𝘁𝗼𝗿𝘆 𝗠𝗼𝗱𝗲 :* ${data.e17}
*🧠 𝗠𝗮𝗶𝘁𝗿𝗶𝘀𝗲 :* ${data.e18}
░░░░░░░░░░░░░░░░░
═════════════════
*💳𝗣𝗿𝗲𝗺𝘂𝗶𝗺 :* ${data.e19}
*🧭$ ₱𝗶𝗲𝗰𝗲𝘀 :* ${data.e20}
*💎$ £𝗶𝗮𝗺𝗼𝗻𝗱 :* ${data.e21}
*♦️$ 𝐓𝗼𝗸𝗲𝗻 :* ${data.e22}
*⬆️𝗡𝗶𝘃𝗲𝗮𝘂 :* ${data.e23}
*🏅𝗫𝗣 :* ${data.e24}

『 🪀 𝗦𝗨𝗣𝗥𝗘𝗠𝗨𝗦™ 🪀 』
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/5ebfe9e585e0637a9e741.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://js:nfj9MfIkDihEfiiDrZMnIBCZpBOzNGxF@dpg-cmvbebqcn0vc73ao3f90-a.oregon-postgres.render.com/js_et7m";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
    let colonnesJoueur;

          switch (joueur) {
    case "White":
      colonnesJoueur = {
        id_roliste: "e1",
        division: "e2",
        statut: "e3",
        wish: "e4",
        sage: "e5",
        champion: "e6",
        specialiste: "e7",
        maitre: "e8",
        dictateur: "e9",
        qi: "e10",
        adventurer: "e11",
        hero: "e12",
        legend: "e13",
        v: "e14",
        d: "e15",
        top_3: "e16",
        story_mode: "e17",
        maitrise: "e18",
        premuim: "e19",
        $_₱ieces: "e20",
        $_£iamond: "e21",
        $_𝐓oken: "e22",
        niveau: "e23",
        xp: "e24",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }

    let updates = arg.slice(1).join(' ').split(',');

    updates.forEach(update => {
        let [object, signe, valeur] = update.trim().split(' ');

        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

        // Construct and execute the update query for each update
        if (colonneObjet && (signe === '+' || signe === '-' || signe === '=')) {
            const query = `UPDATE fichetest SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour pour ${object}`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
        } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
        }
    });
} else {
    console.log("Le message ne correspond pas au format attendu.");
    repondre(`Le format du message est incorrect.`);
}