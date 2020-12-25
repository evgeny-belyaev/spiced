import { SpicedDatabase } from "../site/components/database/spicedDatabase"
import { UrlBuilder } from "../site/components/urlBuilder"
import { TokenEncryptor } from "../site/components/TokenEncryptor"

const urls: string[] = [
    "https://fendersslack.herokuapp.com/",
    "http://ruby.org.au/",
    "http://devanz.co/",
    "http://view-source-radboats.herokuapp.com/",
    "https://slackpass.io/wpaustralia",
    "http://techbelgium.io/",
    "https://brasildotnet.herokuapp.com/",
    "http://slack.androiddevbr.org/",
    "https://torontojs.slack.com/messages/C0649AUFL/",
    "http://yvrdev.herokuapp.com/",
    "http://www.startup604.com/application",
    "https://vanvr-signup.herokuapp.com/",
    "http://www.devschile.cl/",
    "http://slack.devdk.org/",
    "https://slack.lyontechhub.org/",
    "https://web-hh-slackin.herokuapp.com/",
    "http://berlinjs.org/",
    "http://webdevs.xyz/",
    "https://fradev.herokuapp.com/",
    "http://www.berlintechs.org/",
    "http://slack.stratux.me/",
    "https://codemash-slack.herokuapp.com/",
    "https://thefestivals.herokuapp.com/",
    "https://slack-openfoodfacts.herokuapp.com/",
    "https://coinality.com/",
    "http://joinworkremotely.com/",
    "https://join.wefa.st/",
    "http://community.redoxengine.com/",
    "http://javascript-devs.herokuapp.com/",
    "http://cinereelists.com/wp-login.php?action=slack-invitation",
    "https://slack.radiant.dj/",
    "https://rdioloversslackin.herokuapp.com/",
    "https://cfs-slack.forsanders.com/",
    "https://sfbrigade-slackin.herokuapp.com/",
    "https://codebar.io/",
    "http://events.ourrevolution.com/join-us-on-slack",
    "https://www.strongtowns.org/discussion-board",
    "https://codefordc.org/joinslack.html",
    "https://slack-signup.creativecommons.org/",
    "https://slackin.yunity.org/",
    "http://slack.codecorps.org/",
    "http://www.slackdads.com/",
    "http://cannaslack.herokuapp.com/",
    "https://slack.opencollective.com/",
    "http://slacking.herokuapp.com/",
    "https://thespokenword.herokuapp.com/",
    "http://community.emccode.com/",
    "https://www.getpostman.com/slack-invite",
    "https://landing.jobs/slack",
    "https://slackpass.io/boagworld",
    "http://slack.clientexec.rocks/",
    "http://psychedelicchat.com/",
    "https://mbtv-chat.signup.team/",
    "http://travelerschat.com/",
    "http://kingdombuilders.io/slack/",
    "http://slack.techreformation.com/",
    "https://www.townhallchat.com/join/T0KTBQWK0/",
    "https://blacksintechnology.typeform.com/to/ZyRYG2",
    "https://www.wowza.com/slack?utm_content=36605764&utm_medium=social&utm_source=twitter",
    "http://video-dev.org/",
    "https://christine85.typeform.com/to/gw9HF4",
    "http://forritaraspjall.net/",
    "https://slackin-itc.herokuapp.com/",
    "http://milanojs.herokuapp.com/",
    "http://noders.com/",
    "http://hashtag700.com/slack-700/",
    "http://chat.javascriptmx.com/",
    "http://slack.gdljs.com/",
    "https://codersmexico.herokuapp.com/",
    "http://slack.javascript.org.nz/",
    "http://slack.ruby.nz/",
    "http://magiccitytech.org/",
    "https://slack.open-austin.org/",
    "https://bostondevops-invites.herokuapp.com/",
    "https://jsla-slackin.herokuapp.com/",
    "https://denverdevs.org/",
    "http://slack.softwarecraftsmanship.org/",
    "http://nycdevs.org/",
    "http://suncoast.io/",
    "http://midwestdevchat.com/",
    "http://knoxdevs.com/",
    "http://tech404.io/",
    "http://www.dctechslack.com/",
    "http://slack.dfwstartupcommunity.com/",
    "https://reichrobert.typeform.com/to/V0WnZf",
    "https://slackpass.io/techseattle",
    "https://www.sendgrowth.com/psl",
    "http://slack.techlahoma.org/",
    "http://www.startupiowachat.com/",
    "http://slack.beta.nyc/",
    "http://seattlehacks.herokuapp.com/",
    "https://hackgreenville.typeform.com/to/sBMjCF",
    "http://www.memphistechnology.org/blog/2015/05/23/join-memtech-on-slack-chat/",
    "http://slack.baltimoretech.org/",
    "http://parkland-slackin.herokuapp.com/"
]

const titles: string[] = [
    "Fende.rs",
    "Ruby Australia",
    "DEVANZ (Developers of AU & NZ + friends)",
    "View Source",
    "WP Australia",
    "TechBelgium",
    "Brasil .NET",
    "Android Dev BR",
    "Toronto JS",
    "Vancouver Developers",
    "Startup604",
    "Vancouver VR Community",
    "DevsChile",
    "Devdk",
    "LyonTechHub",
    "Web-hh",
    "BerlinJS",
    "Webdevs.xyz",
    "Frankfurt Developers",
    "Berlin Techs",
    "Stratux ADS-B",
    "Codemash",
    "Festivals",
    "Open Food Facts",
    "Coinality",
    "Remote Work",
    "We Fast",
    "Redox",
    "We Learn JS",
    "Cinereelists",
    "Radiant Music",
    "Rdio Lovers",
    "Coders For Sanders",
    "Code for San Fracisco (sfbrigade)",
    "Codebar",
    "Our Revolution Local Organizing",
    "Strong Towns",
    "Code for DC",
    "Creative Commons",
    "Yunity",
    "Code Corps",
    "SlackDads",
    "CannaSlack",
    "OpenCollective",
    "Charged",
    "The Spoken Word",
    "EMC {code} Community",
    "Postman",
    "Landing Jobs",
    "Boagworld",
    "Clientexec",
    "Psychedelic Chat",
    "MBTV",
    "Travellers Chat (AirBNB Hosts)",
    "Kingdom Builders",
    "Tech Reformation",
    "Hikers & Backpackers",
    "Blacks In Technology",
    "#Livestreaming",
    "Video-dev",
    "WriterHangout",
    "Forritarar",
    "Irish Tech Community",
    "Italia JS",
    "Noders",
    "#700",
    "JavascriptMX",
    "GDLJS",
    "Coders Mexico",
    "JavaScript New Zealand",
    "Ruby NZ Members Slack",
    "Magic City Tech",
    "Open Austin",
    "Boston DevOps",
    "Js.la",
    "Denver Devs",
    "Software Craftsmanship",
    "NYC Devs",
    "Suncoast Developers Guild",
    "Mid West Dev Chat",
    "KnoxDevs",
    "TECH404",
    "DCTech",
    "DFWStartupCommunity",
    "NewTech Colorado",
    "Seattle Tech Community",
    "Philadelphia Startup Leaders",
    "Techlahoma",
    "Startup Iowa Chat",
    "BetaNYC",
    "Seattle Hacks",
    "HackGreenville",
    "#Memtech",
    "Baltimore Tech",
    "The Parkland"
]

async function run(): Promise<void> {
    const db = new SpicedDatabase()
    const creatorEmail = "radmir@roxot.com"
    const creatorId = db.getUserId(creatorEmail)
    const creator = await db.getUserById(creatorId)

    if (!creator || creator.emailAddress != creatorEmail) {
        throw new Error(`Cant find creator user ${creatorEmail}`)
    }

    console.log(`User is ${creator.firstName}`)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const invitations: string[] = []
    const urlBuilder = new UrlBuilder(new TokenEncryptor())

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i]
        const title = titles[i]

        const communityId = await db.createCommunity({
            title: title,
            publicLink: url,
            creatorUserId: creatorId,
            typeFormResponseId: `auto_batch1_${i}`
        })

        await db.createMember(communityId, creatorId)

        invitations.push(urlBuilder.getCommunityInvitationUrl(communityId))
    }

    console.log("===================")
    console.log(invitations.join("\n"))
    console.log("===================")
}


export default run()