import Queue from 'bull';

const queueComment = new Queue('queueHashtagCrawlApi','redis://127.0.0.1:6379')

const urlVdideo = [

  

  "#VinaCapital",
  "#VCFM",
  "#abetterlifeathome",
  "#bhsgroup",
  "#bimland",
  "#buucucGHN",
  "#ChipContactless",
  "#comehomescvivocity",
  "#comehomevietnam",
  "#GHN",
  "#ghnexpress",
  "#GHNHCM",
  "#ghnhn",
  "#giaohangnhanh",
  "#goldengate",
  "#kichikichi",
  "#laithuskoda",
  "#LifeWear",
  "#londonex",
  "#MadamNu",
  "#NAPAS",
  "#NAPAS247",
  "#PNJ",
  "#Shinhanfiance",
  "#Skoda",
  "#skodavietnam",
  "#Superb_2024",
  "#tamsugiaohangcungghn",
  "#tapchitrading",
  "#taychayghn",
  "#taychaygiaohangnhanh",
  "#thunglungthanhxuan",
  "#UNIQLOHanoi",
  "#UNIQLOHCMC",
  "#UNIQLOVN",
  "#VietQR",
  "#kinhmatanna",
  "#FWDBảohiểmdễhiểu",
  "#FWDSốngđầytừhômnay",
  "#FWDSớmbảovệ",
  "#FWDBaohiemdehieu",
  "#FWDSốngdầytừhômnay",
  "#FWDSombaove",
  "#FWDCelebrateLivingStory",
  "#FWDTimetoPlay",
  "#FWDAgencyKickoff2024",
  "#TrailblazerAwards2024",
  "#FWD",
  "#EQuest",
"#A_member_of_EQuest_Education",
"#Accredited",
"#BeFinancial",
"#Cognia",
"#DogiaCapital",
"#DSH",
"#duan10B",
"#Dwight",
"#dwightschool",
"#dwightschoolhanoi",
"#DwightSchoolHanoiSparkOfGenius",
"#EQuest_Education",
"#EQuest_Education_Group",
"#EQuest_Group",
"#LanvinhHaLong",
"#vanphuinvest",

]

for(let i=0;i<urlVdideo.length;i++){
    queueComment.add({hashtag:`${urlVdideo[i]}`})
    console.log({hashtag:`${urlVdideo[i]}`})
}

// await queueComment.obliterate({ force: true });
// const a = await queueComment.count()
// console.log(a)
