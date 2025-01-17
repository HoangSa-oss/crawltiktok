import Queue from 'bull';

const queueComment = new Queue('queueUserCrawlApi','redis://127.0.0.1:6379')
import schemacomment from './schema/schemacomment.js';

const urlVdideo = [
    "https://www.tiktok.com/@reviewieltsvn",
    "https://www.tiktok.com/@comehomevietnam",
    "https://www.tiktok.com/@gomallvietnam",
    "https://www.tiktok.com/@sieuthigo.bigc",
    "https://www.tiktok.com/@gohypermarket",
    "https://www.tiktok.com/@htl3456",
    "https://www.tiktok.com/@wechoice",
    "https://www.tiktok.com/@namlonggroup_nl",
    "https://www.tiktok.com/@hoangmaichung.com",
    "https://www.tiktok.com/@baoxaydung.com.vn",
    "https://www.tiktok.com/@lamminhchanhlmc",
    "https://www.tiktok.com/@topenvn",
    "https://www.tiktok.com/@meeytv",
    "https://www.tiktok.com/@namthuong0608",
    "https://www.tiktok.com/@hoahauhoanvuvietnam.com",
    "https://www.tiktok.com/@misscosmo.official",
    "https://www.tiktok.com/@uni.network",
    "https://www.tiktok.com/@ahauthuytien",
    "https://www.tiktok.com/@thaonhileofficial",
    "https://www.tiktok.com/@hoang.tranvietbao",
    "https://www.tiktok.com/@lalaanh52",
    "https://www.tiktok.com/@truongthanhdiem_miss",
    "https://www.tiktok.com/@kieuhang_leeki.model",
    "https://www.tiktok.com/@buixuanhanh_",
    "https://www.tiktok.com/@haeun.9899",
    "https://www.tiktok.com/@trannhuyennn",
    "https://www.tiktok.com/@larry1303",
    "https://www.tiktok.com/@lannguyen_ajc",
    "https://www.tiktok.com/@hang_nga_hn",
    "https://www.tiktok.com/@mc_giang_ngoc",
    "https://www.tiktok.com/ngocmintmint",
    "https://www.tiktok.com/@hellen1998",
    "https://www.tiktok.com/@lethituyetnhi.0906",
    "https://www.tiktok.com/@hoangnhung0503",
    "https://www.tiktok.com/@minh.minhquyenn",
    "https://www.tiktok.com/@minksinger",
    "https://www.tiktok.com/@thanhthanhh.99",
    "https://www.tiktok.com/@blum8899",
    "https://www.tiktok.com/@thecalmthao",
    "https://www.tiktok.com/@miraclewoc",
    "https://www.tiktok.com/@wendynguyen39",
    "https://www.tiktok.com/@thuybui698",
    "https://www.tiktok.com/@yquan71.96",
    "https://www.tiktok.com/@qycha_",
    "https://www.tiktok.com/@thientrang.trieu",
    "https://www.tiktok.com/@huynhdaodiemtrinh",
    "https://www.tiktok.com/@yen_584",
    "https://www.tiktok.com/@diem_quyn",
    "https://www.tiktok.com/@uniqlovn?lang=vi-VN",
    "https://www.tiktok.com/@o2o.bdsnews",
    "https://www.tiktok.com/@o2o.nhadep",
    "https://www.tiktok.com/@o2o.thocusin",
    "https://www.tiktok.com/@skodavietnam",
    "https://www.tiktok.com/@giaohangtietkiem",
    "https://www.tiktok.com/@ghn.official",
    "https://www.tiktok.com/@tuyendung.ghnhanoi",
    "https://www.tiktok.com/@myngoc0717",
    "https://www.tiktok.com/@quang_shiper",
    "https://www.tiktok.com/@andjkzb",
    "https://www.tiktok.com/@kinhdoanhbaton",
    "https://www.tiktok.com/@tui_shipper_ne",
    "https://www.tiktok.com/@tech.ghn",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@giaohangtietkiem",
    "https://www.tiktok.com/@ghtk_c2c",
    "https://www.tiktok.com/@nguoi_ghtk",
    "https://www.tiktok.com/@tuyendung_ghtkmienbac",
    "https://www.tiktok.com/@genzsaleghtk",
    "https://www.tiktok.com/@hotrotaotaikhoan.ghtk",
    "https://www.tiktok.com/@33333lliott",
    "https://www.tiktok.com/@tuyendungxteamhn",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@jntexpressvn",
    "https://www.tiktok.com/@jnt.kvnamtrungbo",
    "https://www.tiktok.com/@jthanoi.office",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@jnt.kvnamtrungbo",
    "https://www.tiktok.com/@jntexpressbacninh",
    "https://www.tiktok.com/@jt.hcm",
    "https://www.tiktok.com/@tuyendungjtexpressvn",
    "https://www.tiktok.com/@jnthanoi",
    "https://www.tiktok.com/@moitinhsonggio",
    "https://www.tiktok.com/@hieu_spx_50h14053",
    "https://www.tiktok.com/@tuyendung.spx.vn",
    "https://www.tiktok.com/@hungpt.19",
    "https://www.tiktok.com/@shopeexpress.com",
    "https://www.tiktok.com/@tuyendungspx",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@bestexpress_vietnam",
    "https://www.tiktok.com/@bestexpress2905",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@bestexpressgodauha",
    "https://www.tiktok.com/@phatcuong102",
    "https://www.tiktok.com/@btdday00",
    "https://www.tiktok.com/@halinh77677777",
    "https://www.tiktok.com/@best_express88",
    "https://www.tiktok.com/@best.express_bmt",
    "https://www.tiktok.com/@bestexpress7",
    "https://www.tiktok.com/@viettelpost.official",
    "https://www.tiktok.com/@viettelpostbte",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@viettelpost.service",
    "https://www.tiktok.com/@viettelpostofficial",
    "https://www.tiktok.com/@viettelpostvungtau",
    "https://www.tiktok.com/@viettelpostcantho",
    "https://www.tiktok.com/@viettelpostdanang43",
    "https://www.tiktok.com/@buutaviettelpost",
    "https://www.tiktok.com/@chuyennhaviettelpost123",
    "https://www.tiktok.com/@viettelpost.bgg",
    "https://www.tiktok.com/@viettelpostankhanh",
    "https://www.tiktok.com/@viettelpostbackan",
    "https://www.tiktok.com/@bdvn.vietnampost",
    "https://www.tiktok.com/@bdst.vnpost",
    "https://www.tiktok.com/@vietnampostlogistics",
    "https://www.tiktok.com/@ecomchannel",
    "https://www.tiktok.com/@buudiennamdinh",
    "https://www.tiktok.com/@vietnampostgiaohanggiare",
    "https://www.tiktok.com/@gocbucxuc",
    "https://www.tiktok.com/@buudienvietnam",
    "https://www.tiktok.com/@btmarketsvn?lang=vi-VN",
    "https://www.tiktok.com/@londonexvietnam",
    "https://www.tiktok.com/@comehomevietnam",
    "https://www.tiktok.com/@viechannel.music",
    "https://www.tiktok.com/@thefacevietnamofficial",
    "https://www.tiktok.com/@thenewmentorofficial",
    "https://www.tiktok.com/@thenewmenly",
    "https://www.tiktok.com/@hanhtrinhrucroofficial",
    "https://www.tiktok.com/@shopee_vn",
    "https://www.tiktok.com/@paulaschoice.vn",
    "https://www.tiktok.com/@seriinreview",
    "https://www.tiktok.com/@banker.vn",
    "https://www.tiktok.com/@homecreditvn",
    "https://www.tiktok.com/@halinhofficial",
    "https://www.tiktok.com/@extrim.vn",
    "https://www.tiktok.com/@chmarkets_vietnam",
    "https://www.tiktok.com/@lpltrade",
    "https://www.tiktok.com/@amtradexvn",
    "https://www.tiktok.com/@racfxvietnam?lang=en",
    "https://www.tiktok.com/@dexinvesting",
    "https://www.tiktok.com/@neotrades_vietnam",
    "https://www.tiktok.com/@langnhincuocsong.new",
    "https://www.tiktok.com/@vivumuasam",
    "https://www.tiktok.com/@lam_tam_than",
    "https://www.tiktok.com/@chatxam",
    "https://www.tiktok.com/@autopro.hongheard",
    "https://www.tiktok.com/@pingpongpingponggo",
    "https://www.tiktok.com/@caubedibitishunter",
    "https://www.tiktok.com/@giaohangnhanh_official",
    "https://www.tiktok.com/@giaohangtietkiem",
    "https://www.tiktok.com/@jntexpressvn",
    "https://www.tiktok.com/@bestexpress_vietnam",
    "https://www.tiktok.com/@viettelpost.official",
    "https://www.tiktok.com/@bdvn.vietnampost",
    "https://www.tiktok.com/@halinhofficial?lang=vi-VN",
    "https://www.tiktok.com/@locashopvn",
    "https://www.tiktok.com/@dautucunglocamos",
    "https://www.tiktok.com/@joinlocamos",
    "https://www.tiktok.com/@c2vietnam.official",
    "https://www.tiktok.com/@cafekinhte2023",
    "https://www.tiktok.com/@cafebiz.official",
    "https://www.tiktok.com/@cafetaichinh2023",
    "https://www.tiktok.com/@hoanmydongnai",
    "https://www.tiktok.com/@bobbyvietnam.official",
    "https://www.tiktok.com/@bobbyvn.official",
    "https://www.tiktok.com/@moony.vietnam",
    "https://www.tiktok.com/@alphatradinghubvn?lang=vi-VN",
    "https://www.tiktok.com/@btmarketsvn?lang=vi-VN",
    "https://www.tiktok.com/@londonexvietnam",
    "https://www.tiktok.com/@vieon.show",
    "https://www.tiktok.com/@vieon.official",
    "https://www.tiktok.com/@house.n.home",
    "https://www.tiktok.com/@kenh14official",
    "https://www.tiktok.com/@kenh14disoisaodi?lang=en",
    "https://www.tiktok.com/@afamilyshowbiz?lang=en",
    "https://www.tiktok.com/@afamilyngaylucnay?lang=en",
    "https://www.tiktok.com/@sohahome",
    "https://www.tiktok.com/@cafef_official",
    "https://www.tiktok.com/@gamek.vn",
    "https://www.tiktok.com/@genk.vn",
    "https://www.tiktok.com/@kinglive.vn",
    "https://www.tiktok.com/@vanlawelaxhai",
    "https://www.tiktok.com/@mutex_official",
    "https://www.tiktok.com/@happynestvn",
    "https://www.tiktok.com/@kocvietnam2023",
    "https://www.tiktok.com/@kenh14official",
    "https://www.tiktok.com/@apimuicothe.vn",
    "https://www.tiktok.com/@chikky.tiemanngon",
    "https://www.tiktok.com/@meenatural.vn",
    "https://www.tiktok.com/@droppiithuongmai",
    "https://www.tiktok.com/@droppii.com.vn",
    "https://www.tiktok.com/@droppii_official",
    "https://www.tiktok.com/@droppii.business",
    "https://www.tiktok.com/@kinhdoanh_4.0",
    "https://www.tiktok.com/@droppii.biz",
    "https://www.tiktok.com/@droppii.life",
    "https://www.tiktok.com/@droppii.teller",
    "https://www.tiktok.com/@droppiiofficialvn",
    "https://www.tiktok.com/@duongdeofficial",
    "https://www.tiktok.com/@nguoilamtech69",
    "https://www.tiktok.com/@hukochi69",
    "https://www.tiktok.com/@dotrenmangreview",
    "https://www.tiktok.com/@khongthevo",
    "https://www.tiktok.com/@hoanganhlamgido",
    "https://www.tiktok.com/@hieubkfm",
    "https://www.tiktok.com/@yeuapple",
    "https://www.tiktok.com/@haigiangvideo",
    "https://www.tiktok.com/@tom.chutrue",
    "https://www.tiktok.com/@maru1697",
    "https://www.tiktok.com/@khoingong",
    "https://www.tiktok.com/@reviewtanglai",
    "https://www.tiktok.com/@thanhthattha0312",
    "https://www.tiktok.com/@tonyphungrv",
    "https://www.tiktok.com/@vatvostudio",
    "https://www.tiktok.com/@nambeoreview",
    "https://www.tiktok.com/@vinhvatvofake",
    "https://www.tiktok.com/@khoingong",
    "https://www.tiktok.com/@tuanngocday",
    "https://www.tiktok.com/@adminkhaofficial",
    "https://www.tiktok.com/@damduc.review",
    "https://www.tiktok.com/@jppro.vn",
    "https://www.tiktok.com/@fxmillsvn",
    "https://www.tiktok.com/@tuktukthaibistro",
    "https://www.tiktok.com/@suadaunanhnumber1soya",
    "https://www.tiktok.com/@nhathuocpharmacity",
    "https://www.tiktok.com/@haidilaovietnam",
    "https://www.tiktok.com/@fxmillsvn",
    "https://www.tiktok.com/@jppro.vn",
    "https://www.tiktok.com/@cafef_official",
    "https://www.tiktok.com/@reviewdulich",
    "https://www.tiktok.com/@tapchinguoixaydung",
    "https://www.tiktok.com/@kenhtintuctv",
    "https://www.tiktok.com/@vietnamnet.vn",
    "https://www.tiktok.com/@vtvcab.xahoi",
    "https://www.tiktok.com/@fptplay.bongdaviet",
    "https://www.tiktok.com/@fptbongda",
    "https://www.tiktok.com/@fptplay.bongro",
    "https://www.tiktok.com/@fmusic.official",
    "https://www.tiktok.com/@fgiaitri",
    "https://www.tiktok.com/@giaolothoigian_fptplay",
    "https://www.tiktok.com/@tuyendungfpttelecom",
    "https://www.tiktok.com/@startalkvn",
    "https://www.tiktok.com/@meiimei2x",
    "https://www.tiktok.com/@kinhmatanna",
    "https://www.tiktok.com/@meizkhumm",
    "https://www.tiktok.com/@tunpham97",
    "https://www.tiktok.com/@tundaily",
    "https://www.tiktok.com/@fwd.vn",
    "https://www.tiktok.com/@nestbyaianef",
    "https://www.tiktok.com/@aia_exchange",
    "https://www.tiktok.com/@aia.vietnam",
    "https://www.tiktok.com/@generalivietnam",
    "https://www.tiktok.com/@dai.ichi.life_hottrend?lang=en",
    "https://www.tiktok.com/@prudentialvietnam?lang=en",
    "https://www.tiktok.com/@prudentialvncareers?lang=en",
    "https://www.tiktok.com/@sunlifevietnam",
    "https://www.tiktok.com/@centralretailvietnam",
    "https://www.tiktok.com/@my_little_ielts_corner ",
    "https://www.tiktok.com/@review.ielts",
    "https://www.tiktok.com/@topsmarketvietnam",
    "https://www.tiktok.com/@banker.vn",
"https://www.tiktok.com/@bankwork",
"https://www.tiktok.com/@cakebyvpbank",
"https://www.tiktok.com/@cauchuyennganhang",
"https://www.tiktok.com/@creditnguyen228",
"https://www.tiktok.com/@gkfxprimevn",
"https://www.tiktok.com/@mbbank.official",
"https://www.tiktok.com/@myvibofficial",
"https://www.tiktok.com/@techcombankofficial",
"https://www.tiktok.com/@thucchienforex",
"https://www.tiktok.com/@timodigitalbank",
"https://www.tiktok.com/@tpbank_official",
"https://www.tiktok.com/@vpbankofficial",
"https://www.tiktok.com/@_mr.pips_",
"https://www.tiktok.com/@beyondervn",
"https://www.tiktok.com/@cafef_official",
"https://www.tiktok.com/@caflem7",
"https://www.tiktok.com/@danhgiasangiaodichfx",
"https://www.tiktok.com/@dautuvangforex",
"https://www.tiktok.com/@decao.junioreal",
"https://www.tiktok.com/@dforex111",
"https://www.tiktok.com/@emilyng_official",
"https://www.tiktok.com/@giaodichforex",
"https://www.tiktok.com/@jennyfxvn",
"https://www.tiktok.com/@jojooone",
"https://www.tiktok.com/@kenhtintuctv",
"https://www.tiktok.com/@kietfxtrading",
"https://www.tiktok.com/@lamiinhday",
"https://www.tiktok.com/@louiephamfxvn",
"https://www.tiktok.com/@mr.pips_forextrading",
"https://www.tiktok.com/@mrpipslivestream",
"https://www.tiktok.com/@namlonggroup_nlg",
"https://www.tiktok.com/@onhaxemshow",
"https://www.tiktok.com/@phamquynhanh248",
"https://www.tiktok.com/@reviewdulich",
"https://www.tiktok.com/@smcrecapvn",
"https://www.tiktok.com/@sungroupofficial",
"https://www.tiktok.com/@sunseeshowbiz",
"https://www.tiktok.com/@supermom.vietnam",
"https://www.tiktok.com/@tapchinguoixaydung",
"https://www.tiktok.com/@thaotrangcasi",
"https://www.tiktok.com/@vietnamnet.vn",
"https://www.tiktok.com/@vtvcab.xahoi",
"https://www.tiktok.com/@vutrutaichinh",
"https://www.tiktok.com/@yeah1.giaitri",
"https://www.tiktok.com/@yeah1.show",
"https://www.tiktok.com/@yeah1.trending",

]

// if(urlPost.length ==0){
for(let i=0;i<urlVdideo.length;i++){
   
    // const urlPost = await schemacomment.find({author:`${urlVdideo[i]}`})
    // console.log(urlPost.length)
    // if(urlPost==0){
        queueComment.add({author:`${urlVdideo[i]}`})
        console.log(`author:${urlVdideo[i]}`)
    // }
}

// await queueComment.obliterate({ force: true });