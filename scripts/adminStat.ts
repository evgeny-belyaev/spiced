import { CommunitiesIds, Community, User } from "../site/components/database/types"

type Members = {
    byUserId: NodeJS.Dict<boolean>
}

type TimeSpan = {
    byCommunityId: NodeJS.Dict<Members>,
    communitiesIds: NodeJS.Dict<boolean>
}

type Db = {
    v1: {
        communities: {
            byId: NodeJS.Dict<Community>,
            byTypeFormResponseId: NodeJS.Dict<string>,
            ids: CommunitiesIds,
            lastId: number
        },
        members: {
            byCommunityId: NodeJS.Dict<{ byUserId: NodeJS.Dict<boolean> }>
        },
        optIns: {
            byTimeSpanId: NodeJS.Dict<TimeSpan>
        },
        users: {
            byEmail: NodeJS.Dict<User>
        },
        matched: unknown,
        matches: unknown,

    }
}

const db: Db = {
    "v1" : {
        "communities" : {
            "byId" : {
                "112766" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackpass.io/recruitinginnovators",
                    "title" : "Recruiting Innovators HQ",
                    "typeFormResponseId" : "auto_batch0_18"
                },
                "359495" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://communautes-toulouse.herokuapp.com/",
                    "title" : "Communautés Toulouse",
                    "typeFormResponseId" : "auto_batch0_1"
                },
                "678062" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://marsbased.com/startups/",
                    "title" : "Startup Barcelona",
                    "typeFormResponseId" : "auto_batch0_41"
                },
                "02jUf2" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://levelup-slackin.herokuapp.com/",
                    "title" : "Level Up Tutorials",
                    "typeFormResponseId" : "auto_batch0_11"
                },
                "035qD73" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://join.wefa.st/",
                    "title" : "We Fast",
                    "typeFormResponseId" : "auto_batch1_26"
                },
                "08Sp80" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.devschile.cl/",
                    "title" : "DevsChile",
                    "typeFormResponseId" : "auto_batch1_12"
                },
                "0aFaae" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://ruby.org.au/",
                    "title" : "Ruby Australia",
                    "typeFormResponseId" : "auto_batch1_1"
                },
                "0bPK6d" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack.cryptofr.com/",
                    "title" : "CryptoFR",
                    "typeFormResponseId" : "auto_batch0_3"
                },
                "0eY_D37" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.javascript.org.nz/",
                    "title" : "JavaScript New Zealand",
                    "typeFormResponseId" : "auto_batch1_69"
                },
                "0f73D99" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.strongtowns.org/discussion-board",
                    "title" : "Strong Towns",
                    "typeFormResponseId" : "auto_batch1_36"
                },
                "10d_84" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://nashdev.com/",
                    "title" : "NashDev",
                    "typeFormResponseId" : "auto_batch0_28"
                },
                "10dhDca" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.techreformation.com/",
                    "title" : "Tech Reformation",
                    "typeFormResponseId" : "auto_batch1_55"
                },
                "10hHD26" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://midwestdevchat.com/",
                    "title" : "Mid West Dev Chat",
                    "typeFormResponseId" : "auto_batch1_79"
                },
                "10m1Df5" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://travelerschat.com/",
                    "title" : "Travellers Chat (AirBNB Hosts)",
                    "typeFormResponseId" : "auto_batch1_53"
                },
                "11aSD12" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://denverdevs.org/",
                    "title" : "Denver Devs",
                    "typeFormResponseId" : "auto_batch1_75"
                },
                "11hs45" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://devanz.co/",
                    "title" : "DEVANZ (Developers of AU & NZ + friends)",
                    "typeFormResponseId" : "auto_batch1_2"
                },
                "13R1D12" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://mbtv-chat.signup.team/",
                    "title" : "MBTV",
                    "typeFormResponseId" : "auto_batch1_52"
                },
                "13yRD5b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://thespokenword.herokuapp.com/",
                    "title" : "The Spoken Word",
                    "typeFormResponseId" : "auto_batch1_45"
                },
                "15ryDcb" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackpass.io/techseattle",
                    "title" : "Seattle Tech Community",
                    "typeFormResponseId" : "auto_batch1_85"
                },
                "1707Dcf" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://blacksintechnology.typeform.com/to/ZyRYG2",
                    "title" : "Blacks In Technology",
                    "typeFormResponseId" : "auto_batch1_57"
                },
                "184C39" : {
                    "creatorUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4",
                    "publicLink" : "https://www.linkedin.com/groups/122612/",
                    "title" : "Software as a Service - SaaS - Group",
                    "typeFormResponseId" : "tpm5hm5igw3fh4qitpm3mk8ykx8b0wwd"
                },
                "1aFsD3a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.memphistechnology.org/blog/2015/05/23/join-memtech-on-slack-chat/",
                    "title" : "#Memtech",
                    "typeFormResponseId" : "auto_batch1_92"
                },
                "1aNq2e" : {
                    "creatorUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4",
                    "publicLink" : "https://www.facebook.com/groups/barcelonaexpatsgroup",
                    "title" : "Barcelona Expats",
                    "typeFormResponseId" : "vhl3rpkckkoqktcnbvhlksspsx7uxq58"
                },
                "1eTI6b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.designdk.org/",
                    "title" : "DesignDK",
                    "typeFormResponseId" : "auto_batch0_5"
                },
                "21nND8a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://kingdombuilders.io/slack/",
                    "title" : "Kingdom Builders",
                    "typeFormResponseId" : "auto_batch1_54"
                },
                "24HxDee" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://chat.javascriptmx.com/",
                    "title" : "JavascriptMX",
                    "typeFormResponseId" : "auto_batch1_66"
                },
                "2529c0" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.ismrm.org/2017-annual-meeting-exhibition/2017-annual-meeting-slack-team-join-request/",
                    "title" : "ISMRM 2017",
                    "typeFormResponseId" : "auto_batch0_19"
                },
                "25g837" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://techbelgium.io/",
                    "title" : "TechBelgium",
                    "typeFormResponseId" : "auto_batch1_5"
                },
                "26Mn50" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://berlinjs.org/",
                    "title" : "BerlinJS",
                    "typeFormResponseId" : "auto_batch1_16"
                },
                "291OD3b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.dfwstartupcommunity.com/",
                    "title" : "DFWStartupCommunity",
                    "typeFormResponseId" : "auto_batch1_83"
                },
                "2dSoD55" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://milanojs.herokuapp.com/",
                    "title" : "Italia JS",
                    "typeFormResponseId" : "auto_batch1_63"
                },
                "2e3844" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackpass.io/wpaustralia",
                    "title" : "WP Australia",
                    "typeFormResponseId" : "auto_batch1_4"
                },
                "2e7p3b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.startup604.com/application",
                    "title" : "Startup604",
                    "typeFormResponseId" : "auto_batch1_10"
                },
                "2f-YD64" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://community.emccode.com/",
                    "title" : "EMC {code} Community",
                    "typeFormResponseId" : "auto_batch1_46"
                },
                "30dx34" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://akeneopim-ug.herokuapp.com/",
                    "title" : "Akeneo PIM User Group",
                    "typeFormResponseId" : "auto_batch0_25"
                },
                "30it60" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://swedish-slack-invite.herokuapp.com/",
                    "title" : "Swedish",
                    "typeFormResponseId" : "auto_batch0_2"
                },
                "33KLDa8" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://cinereelists.com/wp-login.php?action=slack-invitation",
                    "title" : "Cinereelists",
                    "typeFormResponseId" : "auto_batch1_29"
                },
                "34BA11" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.stratux.me/",
                    "title" : "Stratux ADS-B",
                    "typeFormResponseId" : "auto_batch1_20"
                },
                "34oK7b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.bcneng.net/",
                    "title" : "BcnEng",
                    "typeFormResponseId" : "auto_batch0_4"
                },
                "36I8D24" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://parkland-slackin.herokuapp.com/",
                    "title" : "The Parkland",
                    "typeFormResponseId" : "auto_batch1_94"
                },
                "389p27" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://vanvr-signup.herokuapp.com/",
                    "title" : "Vancouver VR Community",
                    "typeFormResponseId" : "auto_batch1_11"
                },
                "39RdD53" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://landing.jobs/slack",
                    "title" : "Landing Jobs",
                    "typeFormResponseId" : "auto_batch1_48"
                },
                "3c3G7d" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://web-hh-slackin.herokuapp.com/",
                    "title" : "Web-hh",
                    "typeFormResponseId" : "auto_batch1_15"
                },
                "3eA-D1f" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://community.redoxengine.com/",
                    "title" : "Redox",
                    "typeFormResponseId" : "auto_batch1_27"
                },
                "407U3b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://malearncodingslack.herokuapp.com/",
                    "title" : "Learncoding",
                    "typeFormResponseId" : "auto_batch0_10"
                },
                "44dZf6" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://talk.coffee/",
                    "title" : "Talk Coffee",
                    "typeFormResponseId" : "auto_batch0_14"
                },
                "46-7D4a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.townhallchat.com/join/T0KTBQWK0/",
                    "title" : "Hikers & Backpackers",
                    "typeFormResponseId" : "auto_batch1_56"
                },
                "49OUaa" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://playwellspace.herokuapp.com/",
                    "title" : "Play Well",
                    "typeFormResponseId" : "auto_batch0_12"
                },
                "49ZjD60" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://tech404.io/",
                    "title" : "TECH404",
                    "typeFormResponseId" : "auto_batch1_81"
                },
                "49lZDfe" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackpass.io/boagworld",
                    "title" : "Boagworld",
                    "typeFormResponseId" : "auto_batch1_49"
                },
                "4a2QD8f" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://christine85.typeform.com/to/gw9HF4",
                    "title" : "WriterHangout",
                    "typeFormResponseId" : "auto_batch1_60"
                },
                "4dJ2D90" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.codecorps.org/",
                    "title" : "Code Corps",
                    "typeFormResponseId" : "auto_batch1_40"
                },
                "4dMA48" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.berlintechs.org/",
                    "title" : "Berlin Techs",
                    "typeFormResponseId" : "auto_batch1_19"
                },
                "4e4Z96" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://friends.hasgeek.com/",
                    "title" : "Friends of HasGeek",
                    "typeFormResponseId" : "auto_batch0_13"
                },
                "4ev1f7" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack-integrate.herokuapp.com/",
                    "title" : "Digital Nomads",
                    "typeFormResponseId" : "auto_batch0_15"
                },
                "4fb6D4f" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.softwarecraftsmanship.org/",
                    "title" : "Software Craftsmanship",
                    "typeFormResponseId" : "auto_batch1_76"
                },
                "521tDa4" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://codebar.io/",
                    "title" : "Codebar",
                    "typeFormResponseId" : "auto_batch1_34"
                },
                "53Kzf8" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackin.community.metaebene.me/",
                    "title" : "ME Community",
                    "typeFormResponseId" : "auto_batch0_23"
                },
                "54O3D0b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://codefordc.org/joinslack.html",
                    "title" : "Code for DC",
                    "typeFormResponseId" : "auto_batch1_37"
                },
                "57Ke19" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://pdx-startups-slack.herokuapp.com",
                    "title" : "PDX Startups",
                    "typeFormResponseId" : "auto_batch0_36"
                },
                "583b27" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://view-source-radboats.herokuapp.com/",
                    "title" : "View Source",
                    "typeFormResponseId" : "auto_batch1_3"
                },
                "5a6Jc7" : {
                    "creatorUserId" : "07a697d94087a8575494e440ff7c9a655d369ee24149d439263903d5ecb98a92",
                    "publicLink" : "https://www.facebook.com/groups/673149593140166",
                    "title" : "Programmatic Advertising & Ad Ops Professionals",
                    "typeFormResponseId" : "ky754cspvmrc4yy9gky75a9olyg7q81s"
                },
                "60prDab" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://sfbrigade-slackin.herokuapp.com/",
                    "title" : "Code for San Fracisco (sfbrigade)",
                    "typeFormResponseId" : "auto_batch1_33"
                },
                "60qo3c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack-invite.nylas.com/",
                    "title" : "Nylas",
                    "typeFormResponseId" : "auto_batch0_24"
                },
                "61AlD70" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://rdioloversslackin.herokuapp.com/",
                    "title" : "Rdio Lovers",
                    "typeFormResponseId" : "auto_batch1_31"
                },
                "63mVb3" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://webperformance.herokuapp.com/",
                    "title" : "Webperformance",
                    "typeFormResponseId" : "auto_batch0_6"
                },
                "66r2D31" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.slackdads.com/",
                    "title" : "SlackDads",
                    "typeFormResponseId" : "auto_batch1_41"
                },
                "67JDD9a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack-openfoodfacts.herokuapp.com/",
                    "title" : "Open Food Facts",
                    "typeFormResponseId" : "auto_batch1_23"
                },
                "6bDUD90" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.getpostman.com/slack-invite",
                    "title" : "Postman",
                    "typeFormResponseId" : "auto_batch1_47"
                },
                "6bYS90" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.swiftde.net/",
                    "title" : "SwiftDE",
                    "typeFormResponseId" : "auto_batch0_32"
                },
                "6cvwcb" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://sportsgeekhq.com/slack",
                    "title" : "SportsBiz",
                    "typeFormResponseId" : "auto_batch0_31"
                },
                "6dOIDa2" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackin.yunity.org/",
                    "title" : "Yunity",
                    "typeFormResponseId" : "auto_batch1_39"
                },
                "6e55b2" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slackin.louisville.io/",
                    "title" : "Louisville.IO",
                    "typeFormResponseId" : "auto_batch0_38"
                },
                "708Waa" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.datalook.io/",
                    "title" : "Data Look (#openimpact)",
                    "typeFormResponseId" : "auto_batch0_27"
                },
                "74k5Dbf" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://knoxdevs.com/",
                    "title" : "KnoxDevs",
                    "typeFormResponseId" : "auto_batch1_80"
                },
                "76WRDe4" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack.opencollective.com/",
                    "title" : "OpenCollective",
                    "typeFormResponseId" : "auto_batch1_43"
                },
                "7agN21" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackpass.io/shenomads",
                    "title" : "SheNomads",
                    "typeFormResponseId" : "auto_batch0_16"
                },
                "7bOxD38" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.gdljs.com/",
                    "title" : "GDLJS",
                    "typeFormResponseId" : "auto_batch1_67"
                },
                "7biSD82" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://jsla-slackin.herokuapp.com/",
                    "title" : "Js.la",
                    "typeFormResponseId" : "auto_batch1_74"
                },
                "7cWP5f" : {
                    "creatorUserId" : "6b6136179662d8069f5e5eca5c199c6988e989ede07af3e263c0814e4d29e993",
                    "publicLink" : "",
                    "title" : "AdOps",
                    "typeFormResponseId" : "veoqdt0lgpvosw0lveoqdzevwuf9wsrj"
                },
                "7czqD51" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://joinworkremotely.com/",
                    "title" : "Remote Work",
                    "typeFormResponseId" : "auto_batch1_25"
                },
                "7eiTd8" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://fendersslack.herokuapp.com/",
                    "title" : "Fende.rs",
                    "typeFormResponseId" : "auto_batch1_0"
                },
                "84JYbf" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://frenchdesigners.club/",
                    "title" : "French Designers Club",
                    "typeFormResponseId" : "auto_batch0_8"
                },
                "863JD85" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://coinality.com/",
                    "title" : "Coinality",
                    "typeFormResponseId" : "auto_batch1_24"
                },
                "88dbD17" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.baltimoretech.org/",
                    "title" : "Baltimore Tech",
                    "typeFormResponseId" : "auto_batch1_93"
                },
                "88qX62" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://musicprodslack.herokuapp.com/",
                    "title" : "Music Production",
                    "typeFormResponseId" : "auto_batch0_20"
                },
                "89B9D5e" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.wowza.com/slack?utm_content=36605764&utm_medium=social&utm_source=twitter",
                    "title" : "#Livestreaming",
                    "typeFormResponseId" : "auto_batch1_58"
                },
                "89th06" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://pigsquadslack.herokuapp.com/",
                    "title" : "PIGSquad",
                    "typeFormResponseId" : "auto_batch0_17"
                },
                "8dH_D34" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.ruby.nz/",
                    "title" : "Ruby NZ Members Slack",
                    "typeFormResponseId" : "auto_batch1_70"
                },
                "8fQyDc6" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.sendgrowth.com/psl",
                    "title" : "Philadelphia Startup Leaders",
                    "typeFormResponseId" : "auto_batch1_86"
                },
                "8fgQ75" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.responsive.org/",
                    "title" : "ResponsiveOrg",
                    "typeFormResponseId" : "auto_batch0_22"
                },
                "90Ev46" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://torontojs.slack.com/messages/C0649AUFL/",
                    "title" : "Toronto JS",
                    "typeFormResponseId" : "auto_batch1_8"
                },
                "90ur4c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://genart.herokuapp.com/",
                    "title" : "Generative art",
                    "typeFormResponseId" : "auto_batch0_0"
                },
                "91mm90" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://codemash-slack.herokuapp.com/",
                    "title" : "Codemash",
                    "typeFormResponseId" : "auto_batch1_21"
                },
                "94m069" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://bombay.typeform.com/to/DXpsPi",
                    "title" : "Build in Bombay",
                    "typeFormResponseId" : "auto_batch0_42"
                },
                "95MkDcc" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.techlahoma.org/",
                    "title" : "Techlahoma",
                    "typeFormResponseId" : "auto_batch1_87"
                },
                "972c02" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.nyctechslack.com/",
                    "title" : "NYCTech",
                    "typeFormResponseId" : "auto_batch0_34"
                },
                "98nn73" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://webdevs.xyz/",
                    "title" : "Webdevs.xyz",
                    "typeFormResponseId" : "auto_batch1_17"
                },
                "9d4cD4d" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://nycdevs.org/",
                    "title" : "NYC Devs",
                    "typeFormResponseId" : "auto_batch1_77"
                },
                "9esq8b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.reddit.com/r/adops/",
                    "title" : "AdOps Tinder",
                    "typeFormResponseId" : "i6ww1iz6zbzarigwzi6ww1z7mgftn8bh"
                },
                "9f0ZD3b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.clientexec.rocks/",
                    "title" : "Clientexec",
                    "typeFormResponseId" : "auto_batch1_50"
                },
                "9fHYcb" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.sv.co/about/slack",
                    "title" : "V.CO Public Slack",
                    "typeFormResponseId" : "auto_batch0_9"
                },
                "aaUTaf" : {
                    "creatorUserId" : "446db69a62ac6dd0b3044eb5595850ef4cd828fa0e398251780f01977f850878",
                    "publicLink" : "",
                    "title" : "SF Bay Area Womxn in Games",
                    "typeFormResponseId" : "n6kspoaq6y9k9iig3p8dnn6kspo63j5e"
                },
                "aasCD2f" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://javascript-devs.herokuapp.com/",
                    "title" : "We Learn JS",
                    "typeFormResponseId" : "auto_batch1_28"
                },
                "ablSDdd" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://bostondevops-invites.herokuapp.com/",
                    "title" : "Boston DevOps",
                    "typeFormResponseId" : "auto_batch1_73"
                },
                "adyw6a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://rusdevs.herokuapp.com/",
                    "title" : "RussianDevs",
                    "typeFormResponseId" : "auto_batch0_30"
                },
                "afi2D16" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://cannaslack.herokuapp.com/",
                    "title" : "CannaSlack",
                    "typeFormResponseId" : "auto_batch1_42"
                },
                "b3tMD98" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://magiccitytech.org/",
                    "title" : "Magic City Tech",
                    "typeFormResponseId" : "auto_batch1_71"
                },
                "b5DaD82" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://seattlehacks.herokuapp.com/",
                    "title" : "Seattle Hacks",
                    "typeFormResponseId" : "auto_batch1_90"
                },
                "b7wRD67" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slacking.herokuapp.com/",
                    "title" : "Charged",
                    "typeFormResponseId" : "auto_batch1_44"
                },
                "b9bQD9c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://forritaraspjall.net/",
                    "title" : "Forritarar",
                    "typeFormResponseId" : "auto_batch1_61"
                },
                "baDE1c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.devdk.org/",
                    "title" : "Devdk",
                    "typeFormResponseId" : "auto_batch1_13"
                },
                "baaXD8e" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://video-dev.org/",
                    "title" : "Video-dev",
                    "typeFormResponseId" : "auto_batch1_59"
                },
                "bdyODbc" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://reichrobert.typeform.com/to/V0WnZf",
                    "title" : "NewTech Colorado",
                    "typeFormResponseId" : "auto_batch1_84"
                },
                "bf906b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://nitech.herokuapp.com/",
                    "title" : "Northern Ireland Tech & Design",
                    "typeFormResponseId" : "auto_batch0_40"
                },
                "c1ql23" : {
                    "creatorUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4",
                    "publicLink" : "https://www.facebook.com/groups/intjobsparis",
                    "title" : "International Jobs In Paris",
                    "typeFormResponseId" : "fx6fepupbjjhssaabfx6fepuicyvprtm"
                },
                "c3cKDc2" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack-signup.creativecommons.org/",
                    "title" : "Creative Commons",
                    "typeFormResponseId" : "auto_batch1_38"
                },
                "c6Yy55" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://tech256.com/#invite",
                    "title" : "Tech256",
                    "typeFormResponseId" : "auto_batch0_43"
                },
                "c6lA78" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://fradev.herokuapp.com/",
                    "title" : "Frankfurt Developers",
                    "typeFormResponseId" : "auto_batch1_18"
                },
                "c8Lgd8" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack.lyontechhub.org/",
                    "title" : "LyonTechHub",
                    "typeFormResponseId" : "auto_batch1_14"
                },
                "caquD44" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://thefestivals.herokuapp.com/",
                    "title" : "Festivals",
                    "typeFormResponseId" : "auto_batch1_22"
                },
                "ccotDd0" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://events.ourrevolution.com/join-us-on-slack",
                    "title" : "Our Revolution Local Organizing",
                    "typeFormResponseId" : "auto_batch1_35"
                },
                "cdNW03" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://anthropologists1.herokuapp.com/",
                    "title" : "AnthroHangout",
                    "typeFormResponseId" : "auto_batch0_26"
                },
                "cfESbe" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://mohikan-slackin.herokuapp.com/",
                    "title" : "Mohikan",
                    "typeFormResponseId" : "auto_batch0_33"
                },
                "cfLe5d" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://chicagotech.herokuapp.com/",
                    "title" : "Chicago Tech",
                    "typeFormResponseId" : "auto_batch0_35"
                },
                "d1BH14" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://startupberlin.co/",
                    "title" : "Startup Berlin",
                    "typeFormResponseId" : "auto_batch0_37"
                },
                "d5_k88" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://lemonaid.io/",
                    "title" : "LemonAid",
                    "typeFormResponseId" : "auto_batch0_45"
                },
                "d5aLDab" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack.radiant.dj/",
                    "title" : "Radiant Music",
                    "typeFormResponseId" : "auto_batch1_30"
                },
                "d6txDbd" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://noders.com/",
                    "title" : "Noders",
                    "typeFormResponseId" : "auto_batch1_64"
                },
                "d8Xfa2" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://brasildotnet.herokuapp.com/",
                    "title" : "Brasil .NET",
                    "typeFormResponseId" : "auto_batch1_6"
                },
                "d8fxD5d" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://codersmexico.herokuapp.com/",
                    "title" : "Coders Mexico",
                    "typeFormResponseId" : "auto_batch1_68"
                },
                "dafBd1" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://www.grasswire.com/about-us/",
                    "title" : "Grasswire Newsroom",
                    "typeFormResponseId" : "auto_batch0_46"
                },
                "ddKv29" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.androiddevbr.org/",
                    "title" : "Android Dev BR",
                    "typeFormResponseId" : "auto_batch1_7"
                },
                "de4k5c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackin.pyladies.com/",
                    "title" : "PyLadies",
                    "typeFormResponseId" : "auto_batch0_44"
                },
                "dfCl5b" : {
                    "creatorUserId" : "c8ac9459defd0b73b72229e68577acbc4f4c3efecda69ef300eb8632639d2fb1",
                    "publicLink" : "https://reddit.com/",
                    "title" : "AdOps Reddit",
                    "typeFormResponseId" : "cs9qbrmaasrruevvlbp7bycs9qbrmpiv"
                },
                "dfcj40" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://charlestontechslack.herokuapp.com/",
                    "title" : "Charleston Tech Slack",
                    "typeFormResponseId" : "auto_batch0_39"
                },
                "e2Pp73" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://yvrdev.herokuapp.com/",
                    "title" : "Vancouver Developers",
                    "typeFormResponseId" : "auto_batch1_9"
                },
                "e3bL42" : {
                    "creatorUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4",
                    "publicLink" : "https://www.facebook.com/groups/375377619569605/",
                    "title" : "English Speakers in Paris",
                    "typeFormResponseId" : "8hb056q08c6e4jwnr0kn8hb0y2lrlzcg"
                },
                "e4szD56" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slackin-itc.herokuapp.com/",
                    "title" : "Irish Tech Community",
                    "typeFormResponseId" : "auto_batch1_62"
                },
                "e9JTD1e" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://slack.beta.nyc/",
                    "title" : "BetaNYC",
                    "typeFormResponseId" : "auto_batch1_89"
                },
                "eaJQ07" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://redditentrepreneur.herokuapp.com/",
                    "title" : "Reddit Entrepreneur",
                    "typeFormResponseId" : "auto_batch0_21"
                },
                "eaXxD1b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://hashtag700.com/slack-700/",
                    "title" : "#700",
                    "typeFormResponseId" : "auto_batch1_65"
                },
                "ecbMf4" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://phillydev.herokuapp.com/",
                    "title" : "Phillydev",
                    "typeFormResponseId" : "auto_batch0_29"
                },
                "efvaD2b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://hackgreenville.typeform.com/to/sBMjCF",
                    "title" : "HackGreenville",
                    "typeFormResponseId" : "auto_batch1_91"
                },
                "f0DR6a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://frontendlondon-slack.herokuapp.com/",
                    "title" : "Frontend London",
                    "typeFormResponseId" : "auto_batch0_7"
                },
                "f3PfDba" : {
                    "creatorUserId" : "1e663df09ab759f6a93918a8585b4e17b2ecf5782bd4896e1c4ed9372a366c9b",
                    "publicLink" : "",
                    "title" : "Seattle Business Owners",
                    "typeFormResponseId" : "tdeag10qhy2rtdeagwp75izgh0ozxg5y"
                },
                "f6HwD7b" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://slack.open-austin.org/",
                    "title" : "Open Austin",
                    "typeFormResponseId" : "auto_batch1_72"
                },
                "f8CiD55" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.startupiowachat.com/",
                    "title" : "Startup Iowa Chat",
                    "typeFormResponseId" : "auto_batch1_88"
                },
                "faWCa3" : {
                    "creatorUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4",
                    "publicLink" : "https://www.reddit.com/r/projectmanagement/",
                    "title" : "Reddit Project Management",
                    "typeFormResponseId" : "w0hsgpjvx74g0d1w09i2wv8sxk43u5om"
                },
                "fdK1D4c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://psychedelicchat.com/",
                    "title" : "Psychedelic Chat",
                    "typeFormResponseId" : "auto_batch1_51"
                },
                "fdWrD8c" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "https://cfs-slack.forsanders.com/",
                    "title" : "Coders For Sanders",
                    "typeFormResponseId" : "auto_batch1_32"
                },
                "feQeDee" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://suncoast.io/",
                    "title" : "Suncoast Developers Guild",
                    "typeFormResponseId" : "auto_batch1_78"
                },
                "ff60D1a" : {
                    "creatorUserId" : "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0",
                    "publicLink" : "http://www.dctechslack.com/",
                    "title" : "DCTech",
                    "typeFormResponseId" : "auto_batch1_82"
                }
            },
            "byTypeFormResponseId" : {
                "8hb056q08c6e4jwnr0kn8hb0y2lrlzcg" : "e3bL42",
                "auto_batch0_0" : "90ur4c",
                "auto_batch0_1" : "359495",
                "auto_batch0_10" : "407U3b",
                "auto_batch0_11" : "02jUf2",
                "auto_batch0_12" : "49OUaa",
                "auto_batch0_13" : "4e4Z96",
                "auto_batch0_14" : "44dZf6",
                "auto_batch0_15" : "4ev1f7",
                "auto_batch0_16" : "7agN21",
                "auto_batch0_17" : "89th06",
                "auto_batch0_18" : "112766",
                "auto_batch0_19" : "2529c0",
                "auto_batch0_2" : "30it60",
                "auto_batch0_20" : "88qX62",
                "auto_batch0_21" : "eaJQ07",
                "auto_batch0_22" : "8fgQ75",
                "auto_batch0_23" : "53Kzf8",
                "auto_batch0_24" : "60qo3c",
                "auto_batch0_25" : "30dx34",
                "auto_batch0_26" : "cdNW03",
                "auto_batch0_27" : "708Waa",
                "auto_batch0_28" : "10d_84",
                "auto_batch0_29" : "ecbMf4",
                "auto_batch0_3" : "0bPK6d",
                "auto_batch0_30" : "adyw6a",
                "auto_batch0_31" : "6cvwcb",
                "auto_batch0_32" : "6bYS90",
                "auto_batch0_33" : "cfESbe",
                "auto_batch0_34" : "972c02",
                "auto_batch0_35" : "cfLe5d",
                "auto_batch0_36" : "57Ke19",
                "auto_batch0_37" : "d1BH14",
                "auto_batch0_38" : "6e55b2",
                "auto_batch0_39" : "dfcj40",
                "auto_batch0_4" : "34oK7b",
                "auto_batch0_40" : "bf906b",
                "auto_batch0_41" : "678062",
                "auto_batch0_42" : "94m069",
                "auto_batch0_43" : "c6Yy55",
                "auto_batch0_44" : "de4k5c",
                "auto_batch0_45" : "d5_k88",
                "auto_batch0_46" : "dafBd1",
                "auto_batch0_5" : "1eTI6b",
                "auto_batch0_6" : "63mVb3",
                "auto_batch0_7" : "f0DR6a",
                "auto_batch0_8" : "84JYbf",
                "auto_batch0_9" : "9fHYcb",
                "auto_batch1_0" : "7eiTd8",
                "auto_batch1_1" : "0aFaae",
                "auto_batch1_10" : "2e7p3b",
                "auto_batch1_11" : "389p27",
                "auto_batch1_12" : "08Sp80",
                "auto_batch1_13" : "baDE1c",
                "auto_batch1_14" : "c8Lgd8",
                "auto_batch1_15" : "3c3G7d",
                "auto_batch1_16" : "26Mn50",
                "auto_batch1_17" : "98nn73",
                "auto_batch1_18" : "c6lA78",
                "auto_batch1_19" : "4dMA48",
                "auto_batch1_2" : "11hs45",
                "auto_batch1_20" : "34BA11",
                "auto_batch1_21" : "91mm90",
                "auto_batch1_22" : "caquD44",
                "auto_batch1_23" : "67JDD9a",
                "auto_batch1_24" : "863JD85",
                "auto_batch1_25" : "7czqD51",
                "auto_batch1_26" : "035qD73",
                "auto_batch1_27" : "3eA-D1f",
                "auto_batch1_28" : "aasCD2f",
                "auto_batch1_29" : "33KLDa8",
                "auto_batch1_3" : "583b27",
                "auto_batch1_30" : "d5aLDab",
                "auto_batch1_31" : "61AlD70",
                "auto_batch1_32" : "fdWrD8c",
                "auto_batch1_33" : "60prDab",
                "auto_batch1_34" : "521tDa4",
                "auto_batch1_35" : "ccotDd0",
                "auto_batch1_36" : "0f73D99",
                "auto_batch1_37" : "54O3D0b",
                "auto_batch1_38" : "c3cKDc2",
                "auto_batch1_39" : "6dOIDa2",
                "auto_batch1_4" : "2e3844",
                "auto_batch1_40" : "4dJ2D90",
                "auto_batch1_41" : "66r2D31",
                "auto_batch1_42" : "afi2D16",
                "auto_batch1_43" : "76WRDe4",
                "auto_batch1_44" : "b7wRD67",
                "auto_batch1_45" : "13yRD5b",
                "auto_batch1_46" : "2f-YD64",
                "auto_batch1_47" : "6bDUD90",
                "auto_batch1_48" : "39RdD53",
                "auto_batch1_49" : "49lZDfe",
                "auto_batch1_5" : "25g837",
                "auto_batch1_50" : "9f0ZD3b",
                "auto_batch1_51" : "fdK1D4c",
                "auto_batch1_52" : "13R1D12",
                "auto_batch1_53" : "10m1Df5",
                "auto_batch1_54" : "21nND8a",
                "auto_batch1_55" : "10dhDca",
                "auto_batch1_56" : "46-7D4a",
                "auto_batch1_57" : "1707Dcf",
                "auto_batch1_58" : "89B9D5e",
                "auto_batch1_59" : "baaXD8e",
                "auto_batch1_6" : "d8Xfa2",
                "auto_batch1_60" : "4a2QD8f",
                "auto_batch1_61" : "b9bQD9c",
                "auto_batch1_62" : "e4szD56",
                "auto_batch1_63" : "2dSoD55",
                "auto_batch1_64" : "d6txDbd",
                "auto_batch1_65" : "eaXxD1b",
                "auto_batch1_66" : "24HxDee",
                "auto_batch1_67" : "7bOxD38",
                "auto_batch1_68" : "d8fxD5d",
                "auto_batch1_69" : "0eY_D37",
                "auto_batch1_7" : "ddKv29",
                "auto_batch1_70" : "8dH_D34",
                "auto_batch1_71" : "b3tMD98",
                "auto_batch1_72" : "f6HwD7b",
                "auto_batch1_73" : "ablSDdd",
                "auto_batch1_74" : "7biSD82",
                "auto_batch1_75" : "11aSD12",
                "auto_batch1_76" : "4fb6D4f",
                "auto_batch1_77" : "9d4cD4d",
                "auto_batch1_78" : "feQeDee",
                "auto_batch1_79" : "10hHD26",
                "auto_batch1_8" : "90Ev46",
                "auto_batch1_80" : "74k5Dbf",
                "auto_batch1_81" : "49ZjD60",
                "auto_batch1_82" : "ff60D1a",
                "auto_batch1_83" : "291OD3b",
                "auto_batch1_84" : "bdyODbc",
                "auto_batch1_85" : "15ryDcb",
                "auto_batch1_86" : "8fQyDc6",
                "auto_batch1_87" : "95MkDcc",
                "auto_batch1_88" : "f8CiD55",
                "auto_batch1_89" : "e9JTD1e",
                "auto_batch1_9" : "e2Pp73",
                "auto_batch1_90" : "b5DaD82",
                "auto_batch1_91" : "efvaD2b",
                "auto_batch1_92" : "1aFsD3a",
                "auto_batch1_93" : "88dbD17",
                "auto_batch1_94" : "36I8D24",
                "cs9qbrmaasrruevvlbp7bycs9qbrmpiv" : "dfCl5b",
                "fx6fepupbjjhssaabfx6fepuicyvprtm" : "c1ql23",
                "i6ww1iz6zbzarigwzi6ww1z7mgftn8bh" : "9esq8b",
                "ky754cspvmrc4yy9gky75a9olyg7q81s" : "5a6Jc7",
                "n6kspoaq6y9k9iig3p8dnn6kspo63j5e" : "aaUTaf",
                "tdeag10qhy2rtdeagwp75izgh0ozxg5y" : "f3PfDba",
                "tpm5hm5igw3fh4qitpm3mk8ykx8b0wwd" : "184C39",
                "veoqdt0lgpvosw0lveoqdzevwuf9wsrj" : "7cWP5f",
                "vhl3rpkckkoqktcnbvhlksspsx7uxq58" : "1aNq2e",
                "w0hsgpjvx74g0d1w09i2wv8sxk43u5om" : "faWCa3"
            },
            "ids" : {
                "112766" : true,
                "359495" : true,
                "678062" : true,
                "02jUf2" : true,
                "035qD73" : true,
                "08Sp80" : true,
                "0aFaae" : true,
                "0bPK6d" : true,
                "0eY_D37" : true,
                "0f73D99" : true,
                "10d_84" : true,
                "10dhDca" : true,
                "10hHD26" : true,
                "10m1Df5" : true,
                "11aSD12" : true,
                "11hs45" : true,
                "13R1D12" : true,
                "13yRD5b" : true,
                "15ryDcb" : true,
                "1707Dcf" : true,
                "184C39" : true,
                "1aFsD3a" : true,
                "1aNq2e" : true,
                "1eTI6b" : true,
                "21nND8a" : true,
                "24HxDee" : true,
                "2529c0" : true,
                "25g837" : true,
                "26Mn50" : true,
                "291OD3b" : true,
                "2dSoD55" : true,
                "2e3844" : true,
                "2e7p3b" : true,
                "2f-YD64" : true,
                "30dx34" : true,
                "30it60" : true,
                "33KLDa8" : true,
                "34BA11" : true,
                "34oK7b" : true,
                "36I8D24" : true,
                "389p27" : true,
                "39RdD53" : true,
                "3c3G7d" : true,
                "3eA-D1f" : true,
                "407U3b" : true,
                "44dZf6" : true,
                "46-7D4a" : true,
                "49OUaa" : true,
                "49ZjD60" : true,
                "49lZDfe" : true,
                "4a2QD8f" : true,
                "4dJ2D90" : true,
                "4dMA48" : true,
                "4e4Z96" : true,
                "4ev1f7" : true,
                "4fb6D4f" : true,
                "521tDa4" : true,
                "53Kzf8" : true,
                "54O3D0b" : true,
                "57Ke19" : true,
                "583b27" : true,
                "5a6Jc7" : true,
                "60prDab" : true,
                "60qo3c" : true,
                "61AlD70" : true,
                "63mVb3" : true,
                "66r2D31" : true,
                "67JDD9a" : true,
                "6bDUD90" : true,
                "6bYS90" : true,
                "6cvwcb" : true,
                "6dOIDa2" : true,
                "6e55b2" : true,
                "708Waa" : true,
                "74k5Dbf" : true,
                "76WRDe4" : true,
                "7agN21" : true,
                "7bOxD38" : true,
                "7biSD82" : true,
                "7cWP5f" : true,
                "7czqD51" : true,
                "7eiTd8" : true,
                "84JYbf" : true,
                "863JD85" : true,
                "88dbD17" : true,
                "88qX62" : true,
                "89B9D5e" : true,
                "89th06" : true,
                "8dH_D34" : true,
                "8fQyDc6" : true,
                "8fgQ75" : true,
                "90Ev46" : true,
                "90ur4c" : true,
                "91mm90" : true,
                "94m069" : true,
                "95MkDcc" : true,
                "972c02" : true,
                "98nn73" : true,
                "9d4cD4d" : true,
                "9esq8b" : true,
                "9f0ZD3b" : true,
                "9fHYcb" : true,
                "aaUTaf" : true,
                "aasCD2f" : true,
                "ablSDdd" : true,
                "adyw6a" : true,
                "afi2D16" : true,
                "b3tMD98" : true,
                "b5DaD82" : true,
                "b7wRD67" : true,
                "b9bQD9c" : true,
                "baDE1c" : true,
                "baaXD8e" : true,
                "bdyODbc" : true,
                "bf906b" : true,
                "c1ql23" : true,
                "c3cKDc2" : true,
                "c6Yy55" : true,
                "c6lA78" : true,
                "c8Lgd8" : true,
                "caquD44" : true,
                "ccotDd0" : true,
                "cdNW03" : true,
                "cfESbe" : true,
                "cfLe5d" : true,
                "d1BH14" : true,
                "d5_k88" : true,
                "d5aLDab" : true,
                "d6txDbd" : true,
                "d8Xfa2" : true,
                "d8fxD5d" : true,
                "dafBd1" : true,
                "ddKv29" : true,
                "de4k5c" : true,
                "dfCl5b" : true,
                "dfcj40" : true,
                "e2Pp73" : true,
                "e3bL42" : true,
                "e4szD56" : true,
                "e9JTD1e" : true,
                "eaJQ07" : true,
                "eaXxD1b" : true,
                "ecbMf4" : true,
                "efvaD2b" : true,
                "f0DR6a" : true,
                "f3PfDba" : true,
                "f6HwD7b" : true,
                "f8CiD55" : true,
                "faWCa3" : true,
                "fdK1D4c" : true,
                "fdWrD8c" : true,
                "feQeDee" : true,
                "ff60D1a" : true
            },
            "lastId" : 7493
        },
        "matched" : {
            "byCommunityId" : {
                "5a6Jc7" : {
                    "byUserId" : {
                        "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : {
                            "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : {
                            "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                },
                "84JYbf" : {
                    "byUserId" : {
                        "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : {
                            "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : {
                            "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                },
                "9esq8b" : {
                    "byUserId" : {
                        "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : {
                            "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : {
                            "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                },
                "d1BH14" : {
                    "byUserId" : {
                        "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : {
                            "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : {
                            "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                },
                "dfCl5b" : {
                    "byUserId" : {
                        "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : {
                            "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : {
                            "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                },
                "e3bL42" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : {
                            "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : {
                            "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : {
                            "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : {
                            "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : {
                            "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : {
                                "timeSpanId" : "1607904000000"
                            }
                        },
                        "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : {
                            "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : {
                                "timeSpanId" : "1607904000000"
                            }
                        }
                    }
                }
            }
        },
        "matches" : {
            "byTimeSpanId" : {
                "1607904000000" : {
                    "byCommunityId" : {
                        "112766" : {
                            "541527cd9e4e3084856b4da6ac639bd581765634a3dcf34da4fd76bc9802b3cc" : {
                                "matchedUserId" : ""
                            }
                        },
                        "4e4Z96" : {
                            "e01c5149aaf14417633a2d3c7396aaad73f42be29b106e6ed6b788e7c241c17f" : {
                                "matchedUserId" : ""
                            }
                        },
                        "5a6Jc7" : {
                            "526ea262eecf460093c6356353fc6a022de4e0d892b7000eac20f163e384c6c4" : {
                                "matchedUserId" : ""
                            },
                            "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : {
                                "matchedUserId" : "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6"
                            },
                            "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : {
                                "matchedUserId" : "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32"
                            }
                        },
                        "7cWP5f" : {
                            "de9ea7854dedf1a31d657819143e3a9816246f2abab0745e4d83e83fbe88d0f3" : {
                                "matchedUserId" : ""
                            }
                        },
                        "84JYbf" : {
                            "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : {
                                "matchedUserId" : "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6"
                            },
                            "5369f064d9fa4067a26d6b60e95e5f2029761e1a33f41f7ff5708d1e59dd1ce8" : {
                                "matchedUserId" : ""
                            },
                            "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : {
                                "matchedUserId" : "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8"
                            }
                        },
                        "90ur4c" : {
                            "f5ddf93b72d9171a10886c24c2d25b9af2b212f9e185996bea4c2f19d58e5969" : {
                                "matchedUserId" : ""
                            }
                        },
                        "972c02" : {
                            "4ecf89b6dff0b8eceaac3bdf5975824107de79bd7384dcb61f3d9a3f3bff4600" : {
                                "matchedUserId" : ""
                            }
                        },
                        "9esq8b" : {
                            "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : {
                                "matchedUserId" : "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2"
                            },
                            "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : {
                                "matchedUserId" : "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5"
                            }
                        },
                        "d1BH14" : {
                            "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : {
                                "matchedUserId" : "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665"
                            },
                            "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : {
                                "matchedUserId" : "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78"
                            }
                        },
                        "dfCl5b" : {
                            "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : {
                                "matchedUserId" : "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c"
                            },
                            "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : {
                                "matchedUserId" : "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471"
                            }
                        },
                        "e3bL42" : {
                            "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : {
                                "matchedUserId" : "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc"
                            },
                            "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : {
                                "matchedUserId" : "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6"
                            },
                            "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : {
                                "matchedUserId" : "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4"
                            },
                            "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : {
                                "matchedUserId" : "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8"
                            },
                            "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : {
                                "matchedUserId" : "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c"
                            },
                            "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : {
                                "matchedUserId" : "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf"
                            }
                        },
                        "eaJQ07" : {
                            "56c8878dc387169342e38df2d88b1226fa2dc954afddb466e1ff59ddfb5f319b" : {
                                "matchedUserId" : ""
                            }
                        }
                    },
                    "communityIds" : {
                        "112766" : true,
                        "4e4Z96" : true,
                        "5a6Jc7" : true,
                        "7cWP5f" : true,
                        "84JYbf" : true,
                        "90ur4c" : true,
                        "972c02" : true,
                        "9esq8b" : true,
                        "d1BH14" : true,
                        "dfCl5b" : true,
                        "e3bL42" : true,
                        "eaJQ07" : true
                    }
                }
            }
        },
        "members" : {
            "byCommunityId" : {
                "112766" : {
                    "byUserId" : {
                        "541527cd9e4e3084856b4da6ac639bd581765634a3dcf34da4fd76bc9802b3cc" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "359495" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "678062" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "02jUf2" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "035qD73" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "08Sp80" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "0aFaae" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "0bPK6d" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "0eY_D37" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "0f73D99" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "10d_84" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "10dhDca" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "10hHD26" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "10m1Df5" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "11aSD12" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "11hs45" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "13R1D12" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "13yRD5b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "15ryDcb" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "1707Dcf" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "184C39" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                    }
                },
                "1aFsD3a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "1aNq2e" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                    }
                },
                "1eTI6b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "21nND8a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "24HxDee" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "2529c0" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "25g837" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "26Mn50" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "291OD3b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "2dSoD55" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "2e3844" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "2e7p3b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "2f-YD64" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "30dx34" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "30it60" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "33KLDa8" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "34BA11" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "34oK7b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "36I8D24" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "389p27" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "39RdD53" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "3c3G7d" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "3eA-D1f" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "407U3b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "44dZf6" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "46-7D4a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "49OUaa" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "49ZjD60" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "49lZDfe" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4a2QD8f" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4dJ2D90" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4dMA48" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4e4Z96" : {
                    "byUserId" : {
                        "e01c5149aaf14417633a2d3c7396aaad73f42be29b106e6ed6b788e7c241c17f" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4ev1f7" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "4fb6D4f" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "521tDa4" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "53Kzf8" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "54O3D0b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "57Ke19" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "583b27" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "5a6Jc7" : {
                    "byUserId" : {
                        "07a697d94087a8575494e440ff7c9a655d369ee24149d439263903d5ecb98a92" : true,
                        "526ea262eecf460093c6356353fc6a022de4e0d892b7000eac20f163e384c6c4" : true,
                        "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : true,
                        "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : true
                    }
                },
                "60prDab" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "60qo3c" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "61AlD70" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "63mVb3" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "66r2D31" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "67JDD9a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "6bDUD90" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "6bYS90" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "6cvwcb" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "6dOIDa2" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "6e55b2" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "708Waa" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "74k5Dbf" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "76WRDe4" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "7agN21" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "7bOxD38" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "7biSD82" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "7cWP5f" : {
                    "byUserId" : {
                        "6b6136179662d8069f5e5eca5c199c6988e989ede07af3e263c0814e4d29e993" : true,
                        "de9ea7854dedf1a31d657819143e3a9816246f2abab0745e4d83e83fbe88d0f3" : true
                    }
                },
                "7czqD51" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "7eiTd8" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "84JYbf" : {
                    "byUserId" : {
                        "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : true,
                        "5369f064d9fa4067a26d6b60e95e5f2029761e1a33f41f7ff5708d1e59dd1ce8" : true,
                        "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "863JD85" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "88dbD17" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "88qX62" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "89B9D5e" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "89th06" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "8dH_D34" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "8fQyDc6" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "8fgQ75" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "90Ev46" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "90ur4c" : {
                    "byUserId" : {
                        "f5ddf93b72d9171a10886c24c2d25b9af2b212f9e185996bea4c2f19d58e5969" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "91mm90" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "94m069" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "95MkDcc" : {
                    "byUserId" : {
                        "9cc9a6acb2a4933228566746940970049795c0bfed6c43d38f70f6612d573030" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "972c02" : {
                    "byUserId" : {
                        "4ecf89b6dff0b8eceaac3bdf5975824107de79bd7384dcb61f3d9a3f3bff4600" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "98nn73" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "9d4cD4d" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "9esq8b" : {
                    "byUserId" : {
                        "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : true,
                        "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "9f0ZD3b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "9fHYcb" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "aaUTaf" : {
                    "byUserId" : {
                        "446db69a62ac6dd0b3044eb5595850ef4cd828fa0e398251780f01977f850878" : true
                    }
                },
                "aasCD2f" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "ablSDdd" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "adyw6a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "afi2D16" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "b3tMD98" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "b5DaD82" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "b7wRD67" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "b9bQD9c" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "baDE1c" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "baaXD8e" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "bdyODbc" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "bf906b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "c1ql23" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                    }
                },
                "c3cKDc2" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "c6Yy55" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "c6lA78" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "c8Lgd8" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "caquD44" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "ccotDd0" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "cdNW03" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "cfESbe" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "cfLe5d" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d1BH14" : {
                    "byUserId" : {
                        "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : true,
                        "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d5_k88" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d5aLDab" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d6txDbd" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d8Xfa2" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "d8fxD5d" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "dafBd1" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "ddKv29" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "de4k5c" : {
                    "byUserId" : {
                        "446db69a62ac6dd0b3044eb5595850ef4cd828fa0e398251780f01977f850878" : true,
                        "4e174f1e5570ee65d8b15081c83e08c70dd5f878b62782c85435b5c16bcc40bb" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "dfCl5b" : {
                    "byUserId" : {
                        "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : true,
                        "56fec98e80f95ff9921d38efde847432a50778813ac5312cd56bf23a8baa596f" : true,
                        "87c9fa06347fd6d2a9338ed7349090fd59f2f7ec4c67953bc0e319c94b1c6748" : true,
                        "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : true,
                        "c8ac9459defd0b73b72229e68577acbc4f4c3efecda69ef300eb8632639d2fb1" : true
                    }
                },
                "dfcj40" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "e2Pp73" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "e3bL42" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true,
                        "3559a5c509e4c78b01bf796934627b8bf75110a73544648250f629f8a0aa6729" : true,
                        "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : true,
                        "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : true,
                        "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : true,
                        "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : true,
                        "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : true
                    }
                },
                "e4szD56" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "e9JTD1e" : {
                    "byUserId" : {
                        "b93e95b0c94bf5478191a3d58feb346f2710faadfc8083f6c367ab80e2524fba" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "eaJQ07" : {
                    "byUserId" : {
                        "56c8878dc387169342e38df2d88b1226fa2dc954afddb466e1ff59ddfb5f319b" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "eaXxD1b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "ecbMf4" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "efvaD2b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "f0DR6a" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "f3PfDba" : {
                    "byUserId" : {
                        "1e663df09ab759f6a93918a8585b4e17b2ecf5782bd4896e1c4ed9372a366c9b" : true
                    }
                },
                "f6HwD7b" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "f8CiD55" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "faWCa3" : {
                    "byUserId" : {
                        "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                    }
                },
                "fdK1D4c" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "fdWrD8c" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "feQeDee" : {
                    "byUserId" : {
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                },
                "ff60D1a" : {
                    "byUserId" : {
                        "45c417321bcb0d4e3d67e3c85d3810220170a66ec35425227fc3839bd631b739" : true,
                        "69b74b1dcb6a072c13f9d2afcefd956bc9f353b159db352ae26d7f7aace71704" : true,
                        "ec63544fadb7e2d004885bab9031b3f988c82866f3070125c9828fa9a97a957c" : true,
                        "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : true
                    }
                }
            }
        },
        "optIns" : {
            "byTimeSpanId" : {
                "1607904000000" : {
                    "byCommunityId" : {
                        "112766" : {
                            "byUserId" : {
                                "541527cd9e4e3084856b4da6ac639bd581765634a3dcf34da4fd76bc9802b3cc" : true
                            }
                        },
                        "4e4Z96" : {
                            "byUserId" : {
                                "e01c5149aaf14417633a2d3c7396aaad73f42be29b106e6ed6b788e7c241c17f" : true
                            }
                        },
                        "5a6Jc7" : {
                            "byUserId" : {
                                "526ea262eecf460093c6356353fc6a022de4e0d892b7000eac20f163e384c6c4" : true,
                                "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : true,
                                "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : true
                            }
                        },
                        "7cWP5f" : {
                            "byUserId" : {
                                "6b6136179662d8069f5e5eca5c199c6988e989ede07af3e263c0814e4d29e993" : false,
                                "de9ea7854dedf1a31d657819143e3a9816246f2abab0745e4d83e83fbe88d0f3" : true
                            }
                        },
                        "84JYbf" : {
                            "byUserId" : {
                                "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : true,
                                "5369f064d9fa4067a26d6b60e95e5f2029761e1a33f41f7ff5708d1e59dd1ce8" : true,
                                "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : true
                            }
                        },
                        "90ur4c" : {
                            "byUserId" : {
                                "f5ddf93b72d9171a10886c24c2d25b9af2b212f9e185996bea4c2f19d58e5969" : true
                            }
                        },
                        "972c02" : {
                            "byUserId" : {
                                "4ecf89b6dff0b8eceaac3bdf5975824107de79bd7384dcb61f3d9a3f3bff4600" : true
                            }
                        },
                        "9esq8b" : {
                            "byUserId" : {
                                "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : true,
                                "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : true
                            }
                        },
                        "d1BH14" : {
                            "byUserId" : {
                                "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : true,
                                "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : true
                            }
                        },
                        "dfCl5b" : {
                            "byUserId" : {
                                "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : true,
                                "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : true
                            }
                        },
                        "e3bL42" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true,
                                "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : true,
                                "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : true,
                                "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : true,
                                "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : true,
                                "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : true
                            }
                        },
                        "eaJQ07" : {
                            "byUserId" : {
                                "56c8878dc387169342e38df2d88b1226fa2dc954afddb466e1ff59ddfb5f319b" : true
                            }
                        }
                    },
                    "communitiesIds" : {
                        "112766" : true,
                        "4e4Z96" : true,
                        "5a6Jc7" : true,
                        "7cWP5f" : true,
                        "84JYbf" : true,
                        "90ur4c" : true,
                        "972c02" : true,
                        "9esq8b" : true,
                        "d1BH14" : true,
                        "dfCl5b" : true,
                        "e3bL42" : true,
                        "eaJQ07" : true
                    }
                },
                "1608508800000" : {
                    "byCommunityId" : {
                        "112766" : {
                            "byUserId" : {
                                "541527cd9e4e3084856b4da6ac639bd581765634a3dcf34da4fd76bc9802b3cc" : true
                            }
                        },
                        "184C39" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                            }
                        },
                        "1aNq2e" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                            }
                        },
                        "4e4Z96" : {
                            "byUserId" : {
                                "e01c5149aaf14417633a2d3c7396aaad73f42be29b106e6ed6b788e7c241c17f" : true
                            }
                        },
                        "5a6Jc7" : {
                            "byUserId" : {
                                "07a697d94087a8575494e440ff7c9a655d369ee24149d439263903d5ecb98a92" : true,
                                "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : true
                            }
                        },
                        "7cWP5f" : {
                            "byUserId" : {
                                "6b6136179662d8069f5e5eca5c199c6988e989ede07af3e263c0814e4d29e993" : false
                            }
                        },
                        "84JYbf" : {
                            "byUserId" : {
                                "5369f064d9fa4067a26d6b60e95e5f2029761e1a33f41f7ff5708d1e59dd1ce8" : false
                            }
                        },
                        "95MkDcc" : {
                            "byUserId" : {
                                "9cc9a6acb2a4933228566746940970049795c0bfed6c43d38f70f6612d573030" : true
                            }
                        },
                        "972c02" : {
                            "byUserId" : {
                                "4ecf89b6dff0b8eceaac3bdf5975824107de79bd7384dcb61f3d9a3f3bff4600" : true
                            }
                        },
                        "c1ql23" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                            }
                        },
                        "d1BH14" : {
                            "byUserId" : {
                                "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : true,
                                "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : true
                            }
                        },
                        "de4k5c" : {
                            "byUserId" : {
                                "446db69a62ac6dd0b3044eb5595850ef4cd828fa0e398251780f01977f850878" : true,
                                "4e174f1e5570ee65d8b15081c83e08c70dd5f878b62782c85435b5c16bcc40bb" : true
                            }
                        },
                        "dfCl5b" : {
                            "byUserId" : {
                                "56fec98e80f95ff9921d38efde847432a50778813ac5312cd56bf23a8baa596f" : true,
                                "87c9fa06347fd6d2a9338ed7349090fd59f2f7ec4c67953bc0e319c94b1c6748" : true,
                                "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : true
                            }
                        },
                        "e3bL42" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true,
                                "3559a5c509e4c78b01bf796934627b8bf75110a73544648250f629f8a0aa6729" : true,
                                "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : true
                            }
                        },
                        "e9JTD1e" : {
                            "byUserId" : {
                                "b93e95b0c94bf5478191a3d58feb346f2710faadfc8083f6c367ab80e2524fba" : true
                            }
                        },
                        "faWCa3" : {
                            "byUserId" : {
                                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : true
                            }
                        },
                        "ff60D1a" : {
                            "byUserId" : {
                                "45c417321bcb0d4e3d67e3c85d3810220170a66ec35425227fc3839bd631b739" : true,
                                "69b74b1dcb6a072c13f9d2afcefd956bc9f353b159db352ae26d7f7aace71704" : true,
                                "ec63544fadb7e2d004885bab9031b3f988c82866f3070125c9828fa9a97a957c" : true
                            }
                        }
                    },
                    "communitiesIds" : {
                        "112766" : true,
                        "184C39" : true,
                        "1aNq2e" : true,
                        "4e4Z96" : true,
                        "5a6Jc7" : true,
                        "95MkDcc" : true,
                        "972c02" : true,
                        "c1ql23" : true,
                        "d1BH14" : true,
                        "de4k5c" : true,
                        "dfCl5b" : true,
                        "e3bL42" : true,
                        "e9JTD1e" : true,
                        "faWCa3" : true,
                        "ff60D1a" : true
                    }
                }
            }
        },
        "users" : {
            "byEmail" : {
                "07a697d94087a8575494e440ff7c9a655d369ee24149d439263903d5ecb98a92" : {
                    "emailAddress" : "anita.rusetskaya@gmail.com",
                    "firstName" : "Anita",
                    "lastName" : "Rusetskaya",
                    "phoneNumber" : "+79819861819",
                    "website" : "https://www.facebook.com/arafelll"
                },
                "1e663df09ab759f6a93918a8585b4e17b2ecf5782bd4896e1c4ed9372a366c9b" : {
                    "emailAddress" : "russell@russellmorganconsulting.com",
                    "firstName" : "Russell",
                    "lastName" : "Morgan",
                    "phoneNumber" : "+19208409906",
                    "website" : "https://www.linkedin.com/in/russelljohnmorgan/"
                },
                "203e4f7ae0a87b1f8b3003876085304ba21b3b223849e849f2952561195ebc78" : {
                    "emailAddress" : "chirag2120787@gmail.com",
                    "firstName" : "Chirag",
                    "lastName" : "Bansal",
                    "phoneNumber" : "+4915110033869",
                    "website" : "https://www.linkedin.com/in/chirag-bansal-599040a4/"
                },
                "219fa2af4cffb07ca9b59c5a8e79a680e882b122630dc987509d493bf2571df4" : {
                    "emailAddress" : "arafell7@gmail.com",
                    "firstName" : "Anita",
                    "lastName" : "Rusetskaya",
                    "phoneNumber" : "+79819861819",
                    "website" : ""
                },
                "26c0827efe4ac93b53a45f6f396734a7339418617f6bfe4e6b9cc7fd091373f5" : {
                    "emailAddress" : "ashwiny1980@gmail.com",
                    "firstName" : "Axwin",
                    "lastName" : "Thapliyal",
                    "phoneNumber" : "+917506040902",
                    "website" : ""
                },
                "3559a5c509e4c78b01bf796934627b8bf75110a73544648250f629f8a0aa6729" : {
                    "emailAddress" : "kalyan.jambavathi@gmail.com",
                    "firstName" : "Kalyan Ram J",
                    "lastName" : "Jambavathi",
                    "phoneNumber" : "+33778628060",
                    "website" : "https://www.linkedin.com/in/kalyan-ram-jambavathi-ba0a673b/"
                },
                "3d4ce75ec11b0668b17769add934566de75378bb0872b35174d3f2e9aa7737e8" : {
                    "emailAddress" : "mloffroy@adviso.ca",
                    "firstName" : "Morgane",
                    "lastName" : "Morguy",
                    "phoneNumber" : "+14383881165",
                    "website" : "https://www.linkedin.com/in/morgane-loffroy-digital-marketing/"
                },
                "3df047adad09e435a07d5f5bb4e0556aa864cdc39ffb74b3d78b0f8150b85665" : {
                    "emailAddress" : "mcj@mcj.de",
                    "firstName" : "Michael",
                    "lastName" : "Jaeger",
                    "phoneNumber" : "+491721409174",
                    "website" : "https://www.linkedin.com/in/michael-c-jaeger-b896922/"
                },
                "446db69a62ac6dd0b3044eb5595850ef4cd828fa0e398251780f01977f850878" : {
                    "emailAddress" : "catiegutierrez@gmail.com",
                    "firstName" : "Catie",
                    "lastName" : "Gutierrez",
                    "phoneNumber" : "+14084728347",
                    "website" : "http://linkedin.com/in/catiegutierrez"
                },
                "45c417321bcb0d4e3d67e3c85d3810220170a66ec35425227fc3839bd631b739" : {
                    "emailAddress" : "harrisj22412@hocking.edu",
                    "firstName" : "Jalen",
                    "lastName" : "Harris",
                    "phoneNumber" : "+16149377182",
                    "website" : "https://www.linkedin.com/mwlite/in/jalen-harris-8925a0126"
                },
                "4d1d7d21ba8cb7e50a36e18cfdb7be94eb359261f9dfee03febaab3a3aed7471" : {
                    "emailAddress" : "gourav.chindlur@tercept.com",
                    "firstName" : "Gourav",
                    "lastName" : "Chindlur",
                    "phoneNumber" : "+919916327821",
                    "website" : "https://www.linkedin.com/in/gouravchindlur/"
                },
                "4e174f1e5570ee65d8b15081c83e08c70dd5f878b62782c85435b5c16bcc40bb" : {
                    "emailAddress" : "pax.margret@tutanota.com",
                    "firstName" : "Pax",
                    "lastName" : "Williams",
                    "phoneNumber" : "+17788770897",
                    "website" : "https://github.com/paxcodes"
                },
                "4ecf89b6dff0b8eceaac3bdf5975824107de79bd7384dcb61f3d9a3f3bff4600" : {
                    "emailAddress" : "Amina1502@gmail.com",
                    "firstName" : "Aminat",
                    "lastName" : "Puebla",
                    "phoneNumber" : "+12013559240",
                    "website" : "https://www.linkedin.com/in/aminat-puebla/"
                },
                "5068f0b65b16ef1d191aee34f246cba42d6d5a130f82c3a927a4f47f77eabe0c" : {
                    "emailAddress" : "pankaj.rathi@iscparis.com",
                    "firstName" : "Pankaj",
                    "lastName" : "Kumar",
                    "phoneNumber" : "+33753689945",
                    "website" : "https://m.facebook.com/pankaj.rathi1?ref=bookmarks"
                },
                "526ea262eecf460093c6356353fc6a022de4e0d892b7000eac20f163e384c6c4" : {
                    "emailAddress" : "valeriya.finogeeva@gmail.com",
                    "firstName" : "Valeriya",
                    "lastName" : "Finogeeva",
                    "phoneNumber" : "+61420899095",
                    "website" : "http://linkedin.com/in/valeriyaf"
                },
                "5369f064d9fa4067a26d6b60e95e5f2029761e1a33f41f7ff5708d1e59dd1ce8" : {
                    "emailAddress" : "emilie.krasi@gmail.com",
                    "firstName" : "Emilie",
                    "lastName" : "Krasi",
                    "phoneNumber" : "+33666684655",
                    "website" : "https://www.linkedin.com/in/emiliekrasi/"
                },
                "541527cd9e4e3084856b4da6ac639bd581765634a3dcf34da4fd76bc9802b3cc" : {
                    "emailAddress" : "maxrollinger@gmail.com",
                    "firstName" : "Max",
                    "lastName" : "Rollinger",
                    "phoneNumber" : "+17816974081",
                    "website" : "https://www.linkedin.com/in/maxrollinger"
                },
                "56c8878dc387169342e38df2d88b1226fa2dc954afddb466e1ff59ddfb5f319b" : {
                    "emailAddress" : "pixelfiesta@gmail.com",
                    "firstName" : "Yogesh",
                    "lastName" : "Bhagchandani",
                    "phoneNumber" : "+919892578910",
                    "website" : "https://www.linkedin.com/in/yogesh-enterprise-ux"
                },
                "56fec98e80f95ff9921d38efde847432a50778813ac5312cd56bf23a8baa596f" : {
                    "emailAddress" : "kirill@protected.media",
                    "firstName" : "Kirill Yurchenko",
                    "lastName" : "greatUX",
                    "phoneNumber" : "+13478891233",
                    "website" : "https://www.linkedin.com/in/kirillyurchenko/"
                },
                "69b74b1dcb6a072c13f9d2afcefd956bc9f353b159db352ae26d7f7aace71704" : {
                    "emailAddress" : "alexmakumbi15@gmail.com",
                    "firstName" : "Alex",
                    "lastName" : "Mr",
                    "phoneNumber" : "+17038538960",
                    "website" : "https://www.linkedin.com/in/alexmakumbi/"
                },
                "6b6136179662d8069f5e5eca5c199c6988e989ede07af3e263c0814e4d29e993" : {
                    "emailAddress" : "michael.wirth@simplaex.com",
                    "firstName" : "Michael",
                    "lastName" : "Wirth",
                    "phoneNumber" : "+31655559314",
                    "website" : "https://www.linkedin.com/in/michael-wirth-190653170/"
                },
                "74fde8c3556700343384832ad149712139bec313da1b920300282e68b3cf86dc" : {
                    "emailAddress" : "simrannihalanii@gmail.com",
                    "firstName" : "Simran Nihalani",
                    "lastName" : "Nihalani",
                    "phoneNumber" : "+919619295529",
                    "website" : "https://www.facebook.com/simran.nihalani"
                },
                "87c9fa06347fd6d2a9338ed7349090fd59f2f7ec4c67953bc0e319c94b1c6748" : {
                    "emailAddress" : "elena.b.villarreal@gmail.com",
                    "firstName" : "Leni",
                    "lastName" : "Villarreal",
                    "phoneNumber" : "+16467717343",
                    "website" : "https://www.linkedin.com/in/leni-villarreal-24042a54/"
                },
                "8a967e4d94f2af0164038d0678f881be0a723b7b16ec3c429dddf74ca1321a32" : {
                    "emailAddress" : "chokitwong@gmail.com",
                    "firstName" : "Alexz",
                    "lastName" : "Wong",
                    "phoneNumber" : "+85268505016",
                    "website" : "https://linkedin.com/alexzwong"
                },
                "9308e5dab95b329fd13503355bc9d16400f836302df9b329b26817d2c5ecb74c" : {
                    "emailAddress" : "nils@assertcom.de",
                    "firstName" : "Nils",
                    "lastName" : "Lind",
                    "phoneNumber" : "+31619244433",
                    "website" : ""
                },
                "9cc9a6acb2a4933228566746940970049795c0bfed6c43d38f70f6612d573030" : {
                    "emailAddress" : "jeromy@lukenbaugh.com",
                    "firstName" : "Jeromy",
                    "lastName" : "Lukenbaugh",
                    "phoneNumber" : "+14057594609",
                    "website" : "http://twitter.com/jeromyokc"
                },
                "afbbe2d444906925de5c944d1d8a8ad14f94ec2397cf53b6f605bcca61f24fdf" : {
                    "emailAddress" : "snhrohilla0007@gmail.com",
                    "firstName" : "Sneha",
                    "lastName" : "Rohilla",
                    "phoneNumber" : "+33754043265",
                    "website" : "https://sneharohilla.facebook.com"
                },
                "b93e95b0c94bf5478191a3d58feb346f2710faadfc8083f6c367ab80e2524fba" : {
                    "emailAddress" : "ashira.mawji@gmail.com",
                    "firstName" : "Ashira",
                    "lastName" : "Mawji",
                    "phoneNumber" : "+19178875447",
                    "website" : "https://www.linkedin.com/in/ashira-mawji/"
                },
                "bbc018e5e78a46ddc06cb6e9f950449aa6ee9aa378c3183284ffdbf6a30e9fd6" : {
                    "emailAddress" : "michal.laurynow@ringieraxelspringer.pl",
                    "firstName" : "Michał",
                    "lastName" : "Laurynów",
                    "phoneNumber" : "+48662280599",
                    "website" : "https://www.linkedin.com/in/michallaurynow"
                },
                "c6bdf2d4a07256af06785275a758f8f0d5072218a47e9d4108abf278230f5de2" : {
                    "emailAddress" : "jacobs@primis.tech",
                    "firstName" : "Jacob",
                    "lastName" : "Simkovich",
                    "phoneNumber" : "+972542633417",
                    "website" : "https://www.linkedin.com/in/jacob-simkovich-41398610/"
                },
                "c8ac9459defd0b73b72229e68577acbc4f4c3efecda69ef300eb8632639d2fb1" : {
                    "emailAddress" : "contact@tmixed.com",
                    "firstName" : "Alex",
                    "lastName" : "Mitch",
                    "phoneNumber" : "+12015555555",
                    "website" : "https://fff.com"
                },
                "cda0a3dd6f7be965e11e7ce121a2fb185b2e34f3808789856b91653ae80a45f6" : {
                    "emailAddress" : "vibhortuli1905@gmail.com",
                    "firstName" : "Vibhor tuli",
                    "lastName" : "Tuli",
                    "phoneNumber" : "+33755890948",
                    "website" : "https://vibhortuli.com"
                },
                "d970122e367ad16cfff4cbfc08aadf62d0371ea65a82b57202f3768c403166d8" : {
                    "emailAddress" : "deveshrajpal14@gmail.com",
                    "firstName" : "Devesh",
                    "lastName" : "Rajpal",
                    "phoneNumber" : "+33769319090",
                    "website" : ""
                },
                "de8807735936b1017256c4d02ce133313558c31d5d903ee0c24b1e28e058f0b6" : {
                    "emailAddress" : "m.bouhjar@bureau42.fr",
                    "firstName" : "Mehdi",
                    "lastName" : "Bouhjar",
                    "phoneNumber" : "+33672566624",
                    "website" : "https://www.instagram.com/mehdibouhjar/"
                },
                "de9ea7854dedf1a31d657819143e3a9816246f2abab0745e4d83e83fbe88d0f3" : {
                    "emailAddress" : "jesse@simplaex.com",
                    "firstName" : "Jesse",
                    "lastName" : "Bondar",
                    "phoneNumber" : "+4915208340970",
                    "website" : ""
                },
                "e01c5149aaf14417633a2d3c7396aaad73f42be29b106e6ed6b788e7c241c17f" : {
                    "emailAddress" : "ved.harish3@gmail.com",
                    "firstName" : "Harish",
                    "lastName" : "Ved",
                    "phoneNumber" : "+917275799969",
                    "website" : "https://www.linkedin.com/in/vedharish"
                },
                "ec63544fadb7e2d004885bab9031b3f988c82866f3070125c9828fa9a97a957c" : {
                    "emailAddress" : "morris.tonimarie@gmail.com",
                    "firstName" : "Tonimarie",
                    "lastName" : "Morris",
                    "phoneNumber" : "+15402941474",
                    "website" : "https://www.linkedin.com/in/tonimarie-morris-50a010104/"
                },
                "f5ddf93b72d9171a10886c24c2d25b9af2b212f9e185996bea4c2f19d58e5969" : {
                    "emailAddress" : "jordan@tomocgroup.com",
                    "firstName" : "Jordan",
                    "lastName" : "Sanford",
                    "phoneNumber" : "+14438000927",
                    "website" : "https://www.linkedin.com/in/jordancsanford/"
                },
                "fbbdd2151e76c7a6d197e82d114e6bd54ed55c005d582fc02dfc3ed684dfa1c0" : {
                    "emailAddress" : "radmir@roxot.com",
                    "firstName" : "Alex",
                    "lastName" : "Tix",
                    "phoneNumber" : "+79110280367",
                    "website" : "https://www.facebook.com/profile.php?id=100011849850776"
                }
            }
        }
    }
}




// eslint-disable-next-line @typescript-eslint/no-unused-vars
function members() {
    const communitiesIds = Object.keys(db.v1.communities.ids)

    for (const communityId of communitiesIds) {
        const community = db.v1.communities.byId[communityId]
        if (!community) {
            continue
        }

        const members = db.v1.members.byCommunityId[communityId]
        if (!members) {
            continue
        }

        const membersIds = Object.keys(members.byUserId)

        if (membersIds.length > 1) {
            console.log(`Title: ${community.title}, membersCount=${membersIds.length}`)
        }
    }

}

function optins(timeSpanId: string) {
    const communitiesIds = Object.keys(db.v1.communities.ids)

    for (const communityId of communitiesIds) {
        const community = db.v1.communities.byId[communityId]
        if (!community) {
            console.log("ERROR community")
            continue
        }

        const timeSpan = db.v1.optIns.byTimeSpanId[timeSpanId]
        if (!timeSpan) {
            console.log("ERROR timespan")
            continue
        }


        const optins = timeSpan.byCommunityId[communityId]
        if (!optins) {
            // console.log(`No opt-ins for ${community.title}`)
            continue
        }

        const membersIds = Object.keys(optins.byUserId)

        for (const membersId of membersIds) {
            const user = db.v1.users.byEmail[membersId]
            if (!user) {
                console.log("ERROR user")
                continue
            }

            const yes = optins.byUserId[membersId] === true
            const no = optins.byUserId[membersId] === false

            if (yes) {
                console.log(`${community.title}\t\t${user.emailAddress} YES`)
            }

            if (no) {
                console.log(`${community.title}\t\t${user.emailAddress} NO`)
            }
        }

        console.log("")


        // const members = db.v1.members.byCommunityId[communityId]
        // if (!members) {
        //     continue
        // }
        //
        // const membersIds = Object.keys(members.byUserId)
        //
        // if (membersIds.length > 1) {
        //     console.log(`Title: ${community.title}, membersCount=${membersIds.length}`)
        // }
    }

}

export default optins("1608508800000")