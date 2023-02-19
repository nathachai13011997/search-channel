const lists = [
    { id: "tcp", title: "Tech / ComputerProgramming" },
    { id: "ms", title: "Movie Spoilers" },
    { id: "cm", title: "Comic / Manga" },
    // { id: 4, title: "BoxIcons" },
  ];


const tech = [
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJX_EaiVU1rOBQ9eYXI7ktbBW8IimFVs8T6sEs-7nQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@9arm.",
        name: "9arm"
    },
    {
        img: "https://yt3.googleusercontent.com/MIvTfOpw6XLvcr6htCazvx7XX49BqV0xH1OlUHJ0tnfVRF-giro0IKyf-5gPEjeEXVJu38vCtA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@PatiphanPhengpao",
        name: "Patiphan Phengpao"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWiJd12FCsNfF_SUwfRxMXEC8WUklKmFxvQ7Yai=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@CMDevChannel",
        name: "CMDev"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVD2GWqb9nTS4FT0lhS0ynmcUjiEDk4YuZguxTP=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Zinglecode",
        name: "Zinglecode"
    },
    {
        img: "https://yt3.googleusercontent.com/FjPY1z4Zb6NURkwH7VuHGORi2epZpM9DDdDEKIxpkpUCTUK7x2p9zPDV8zKUmBifOel0zyQifw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@devnolife",
        name: "devnolife"
    },
    {
        img: "https://yt3.googleusercontent.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@SonnySangha",
        name: "Sonny Sangha"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@LamaDev",
        name: "Lama Dev"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUiV0fFUTTa1sIUSxkGOkN40spUznl4FaH1gTmTGQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@CoderOne",
        name: "CoderOne"
    },
    {
        img: "https://yt3.googleusercontent.com/K_bSg2vpcTQApQIbPQQDyHwtZnY6WwoAftepa9I-NH3sEk7SU989rYLKlMfIODdLlwiL4NDFmg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@edubaba",
        name: "Edubaba"
    },
    {
        img: "https://yt3.googleusercontent.com/kXyR8Aa32KXnZWVdkAFUYK5utM752kSJPHGtYiJ4ev6BmdFHi-dl1EFbI3TogmHBjszwc7m2=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@TechWorldwithNana",
        name: "TechWorld with Nana"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVYvguXmWtrlZrhtttcdcHlitx_qOBnq2DvXgUfCg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCNeKBV5RuU7B62xp0NiLjKw",
        name: "Geekboots"
    },
    {
        img: "https://yt3.googleusercontent.com/Wj7IFZd5WSn5gvAdoXLziW4mzavvHQLuKiz8umI276cYWz88721GHsdI-FU_3zFZh9b6f8EQlME=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@DevahoyOfficial",
        name: "Devahoy"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUWfeLWpNhR1CniUjdSR34g0_1Dh5SJnPfotwes=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@TomDoesTech",
        name: "TomDoesTech"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVAo0noVwvdlKcBuO0EW3fgqwoPk7W-Sg61kgjmEw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@dekcode2824",
        name: "Dek Code"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@freecodecamp",
        name: "freeCodeCamp.org"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXBk2t4hVfTbgqHuulw8g7aQuf8EDIslTMce58tOQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@LINEDevelopersThailand",
        name: "LINE Developers Thailand"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUo-5yfPxhI93FkERlSacmTZiCmk2yEvSg-WKLz=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@PasaComputer",
        name: "PasaComputer"
    },
    {
        img: "https://yt3.googleusercontent.com/hNOVjhkJn_4XPxYnzNKhUJxfs0yqjmkkzVzafXi7qKq2NnPlIEh1MCzcDoW1muWUDfc81dQqtw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@SaKKosama",
        name: "SaKKo sama"
    },
    {
        img: "https://yt3.googleusercontent.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@PedroTechnologies",
        name: "PedroTech"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWmrEKWR94wUIM-L0Hj5Ek2IzbUyKXAYJW8F3Aoow=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@iosonotan1989",
        name: "IOsonoTAN"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUsQQjiLDhYmWL0qraFKjWn0Qn_VdXwTQRz3yL0sg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@OnlineTutorialsYT",
        name: "Online Tutorials"
    },
    {
        img: "https://yt3.googleusercontent.com/UX6jCv50wO0pr4cCEIsyOPvCvv1Z9sq0beCuZWHBuLKGtCyJviUFCuGiWte6Tq4lBj88icWJ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@melivecode",
        name: "หมีไลฟ์โค้ด - Me Live Code"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXuW9iBbNOoL4BB0NBZ5WbzPq-e1VdrBVnprBI8OA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@prasertcbs",
        name: "prasertcbs"
    },
    {
        img: "https://yt3.googleusercontent.com/FZinRYfqDbshphfr0c5J1k9m1oACUHKSOCAczIORcOEWeTFMTBXxCVB4chcMnePpdRg--XbB8A=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Rangsiman1993",
        name: "Nutt Rangsiman"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXUoCfGDYWkU8b-L7ItN5PG6WCfIcCg0iJXQApzIw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ChromeDevs",
        name: "Google Chrome Developers"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJU3-BhZPj24EP1iIs8Rq2NOaSdzjtCePLExLgXU=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@bluebill1049",
        name: "Beier Luo"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUUOa0zwnz4BmrdAe0ZvJIGxbS8b62t-AFMz_4sFw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@rocketseat",
        name: "Rocketseat"
    },
    {
        img: "https://yt3.googleusercontent.com/kEkiA8Fhpi6ExXROamDCNoqXsLOCYGL4jjBzCBqdA5_NVNh90FUhK2jawvg8Eu63dQxI8dSG=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ScalableScripts",
        name: "Scalable Scripts"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWKECC6bBkV2_b1SLiYk828XPJt-11L4njHm9ko=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Techcast/featured",
        name: "Techcast"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWI8xWYHzOM15DrYi9pRTccWjgAzcuDiatNYKac8g=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@GaryJennings",
        name: "Gary Jennings"
    },
    {
        img: "https://yt3.googleusercontent.com/zTLJVXrUEsKch_4gngY6CrTrYXa0W7T-ZlQ1Dhu_16GhkYD7GxIyzDLH6VPSLd7O0GbSLlvBGw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ApolloGraphQL",
        name: "Apollo GraphQL"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXPl_0YZ2Mh5hU-8QcrJSQdlCo4y2-3h4lDF1l3hg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@jittat",
        name: "Jittat Fakcharoenphol"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXQ4ml2UfJDINl63x31Q3ywmWl5dHZP5ardx-09=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@KongRuksiamOfficial",
        name: "KongRuksiam Official"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUrW7R1xpoeHQ5bmPyKuSGOW4ESOC2x6wb5Vyrr=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@amateurcoder6031",
        name: "AmateurCoder"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVa3V2IaJYaGfqQhLvHfUzet2RX-QF9IwSiSpFrUA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ServetGulnaroglu",
        name: "Servet Gulnaroglu"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJV0oqI59o3rTGdjJnqA1gBX4d8I39zFxx3a_XBu=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@jomaoppa",
        name: "Joma Tech"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUSZ7xEzptvNzOVYrGUGfSbSqFoo7ZofvYabrPajzE=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@clem",
        name: "Clément Mihailescu"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVU53z__BrVjS2N11KcgeQh4-CbITpa1f8jfVoNGw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@tmwilliamlin168",
        name: "William Lin"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXev2NIsDYSbxtF7rhC4IaUr8B6MiGw1B5plnmPug=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@BroCodez",
        name: "Bro Code"
    },
]

const movieSpoilers = [
    {
        img: "https://yt3.googleusercontent.com/wCofUggYLUThN7ahBP4N3t3D-Um-Cj1aRQMH1kB2xsuUdUer7UmSuIRqSvpez7HVzp2Ihc7k=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@UANNOI1",
        name: "อ้วนน้อยซอยหนึ่ง สตูดิโอ"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJU8ii3cB7o5pN7ofQ5-5Oz4HjWZYoPlrx8_7sjX=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Caracats",
        name: "Caracat"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXchRIDuOFMXfidG6a9_gjyDN30HzWTWFjj4MjZ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@augustchannel8368",
        name: "August Channel"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWX8C_-mqN73e5-wCF3Deip-lWaRU-0WhTtbhvf=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@junkfilm3012",
        name: "Junk Film"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJU12LtlYCDc3koKnf4kzCtUXTtuCoHSHhTshajuew=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@korpennung",
        name: "คอเป็นหนัง"
    },
    {
        img: "https://yt3.googleusercontent.com/FNMsdVMgTDWeB01-Mp77Pp__4QwTMDW29WgranH4Fv1bfRkDGYl2n_fvucFS75jwM8J6ZCPhDA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@MangoMan101",
        name: "MangoMan"
    },
    {
        img: "https://yt3.googleusercontent.com/4o4bfvJgG4C924myG9gFEbQ1dvL6cL8Pa1Tihcedw3JSVwIw_QVHF7ibJ_zONBLiQbZFaP4Kf68=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@LOMO",
        name: "LOMO"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUOEplu6sWuKf2xvcckvUCTXVal3xTy7Rs2GZwM=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@nofstudio",
        name: "Nof studio"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXf61j5B45q14xMTHkNJ_DK7dC3YDw4inphELu5=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@gumpz",
        name: "Gumpz"
    },
    {
        img: "https://yt3.googleusercontent.com/4SGlCzyknZ_ckV0vT-ZoLwGhUyptqOtmePBFyEqI0A_18-tJD6qfxJlX66FdbCvFh-NfTOU_ew=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@TEDDY__TV",
        name: "TEDDY TV"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVZEzWtCQ3HDYh0uCmXhwtvXUTUYxWLB3DhKZdIFw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Just4Game",
        name: "Just4Game"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUCJUpinD-ZFmgqHcFscz8y1Ai6ueIuKecebvwQAA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@GUChannel555",
        name: "GU Channel"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJX97WQFYomtPDiB78k-jnjqbIsieNwSQatyAizc2w=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@MORBLE",
        name: "MORBLE CHANNEL"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUpo7p1vD4CGiNT6IKcnh3OcA717_ONXq0nTgOqmA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@MINUTEth",
        name: "MINUTE"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXV8nnFuh3OZG14lIjRUz4xh4j9PxGzNSc2nAWEsA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Champstudio2022",
        name: "CHAMP Studio"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXfxwqaORGURLULG0Xan-_yV4-QDLQf8lB4SceJtA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@malagorman",
        name: "MalagorMan"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXgLRvM6e2DV8z5tNX0qcNTdka-So5895dTjzbOEA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Baylibayli",
        name: "เบลีย์ เบลีย์"
    },
    {
        img: "https://yt3.googleusercontent.com/IlFaOGAC61E5VlvEwHxu6_deDcMdmEMKjNJot6eIy3HiGEMvOfHXSKerF7GQqHjLySXTzfI9Xw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@magroodman",
        name: "Magrood Man"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJU_MlvKc-GmeuFVHNA9kWkS_0-4cseoPyJ51l4whA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Dopee1984",
        name: "Dopee1984"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUrh7yhOKEP4IEvVQ63O100M8tNP6TksenNHQa17w=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Shevittidnung",
        name: "ชีวิตติดหนัง"
    },
    {
        img: "https://yt3.googleusercontent.com/Y9NaZqWEGAZ9YR_yxR7GLSz8V0uiOOylpwXMqZ1mzmiWPN4y1sCYaCSjdr9Zht5cDQSH0jP_=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@finzone",
        name: "FinZone"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUqpJnX4XvLOaVjqgkISijkThQswSVCVHS6Srjx=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@spoilspoil",
        name: "สป๊อยสปอย"
    },
    {
        img: "https://yt3.googleusercontent.com/uqYEegtY7oxKALeOreQT-yrRDyo3ULl6RLQnu5cCQzXD26acrd0c-jWAm5ue4iPgmnlRfQBwJLw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@The_FinalCut",
        name: "THE FINAL CUT"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWmU1XrhlbGubtRjKxo8C_GTUuFbXICZhDM3eMe=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@fbmovies7116",
        name: "FB Movies"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUC7BujBcpj2pQFBmValaLvUIBDFZ75FVuXtCszbA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@EngineerProduction",
        name: "วิดวะ Production"
    },
    {
        img: "https://yt3.googleusercontent.com/RBP8qIX4zvMR809FoAsNHzcykrSI8o5G8qRCknLfktGXQr5qU-BMMH34AgcMBLhGQUnhXMVBKQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@JohnHubStudio",
        name: "จอห์นฮับ สตูดิโอ"
    },
    {
        img: "https://yt3.googleusercontent.com/J2BRjg_F8YeZtR3fRAbXwzgI5YwIhBtHqleF5TaSZMx8yDEK1It5UfsXEWQBaj8CErtQVDcENg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@spoiman",
        name: "สปอยแมน"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUW6unv8yqWB9mhWfIOxGCUEEuTvbwtYEfaVn2I4g=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@Nongsek",
        name: "น้องเศก Channel"
    },
    {
        img: "https://yt3.googleusercontent.com/mA57czp7mi0SOnNGaentlUrpp52pqotuptAKfk5Cwbs_A3JYFKAV8ik0vy8G07CB0j06UI7Hbw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@user-wy4rs1xw8g",
        name: "สอง สตูดิโอ"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXv0fmVgh26JDrUPHrM6c1edJntquKUmzt2R_x00KQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@columbae_movie",
        name: "COLUMBAE"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXCbAXoGqKdJ8ifmo28LavjwAvaLa_KPRFVKe_r=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@goatbunny",
        name: "Goat & Bunny"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXd8ELuqyE24oE2d56KW4X7B2jUVDoZWs-V2TdQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@longsit1458",
        name: "นั่งยาว : longsit"
    },
]

const comic = [
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWElHKlas1mN_Zjn-VTWdnK0skOosDzCR06oPzu=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ComicWorldDaily",
        name: "Comic World"
    },
    {
        img: "https://yt3.googleusercontent.com/dorrcZwHmufUbdBjHPBJsnRT9DKDSpbr223Lm_OcSzsSAgvlF3Puj26xzZweZx1jp9XBz722Vw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCSsH_MLwk8oGxGiPDfIAuvQ",
        name: "Comic World Story"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUpnrNOFy_8R-OxBeFgsvOLkNILM3OPSHkW15gEEQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCZWV6-xtulPhPqiGeU9rtvw",
        name: "Manga World"
    },
    {
        img: "https://yt3.googleusercontent.com/Xiiz5f0hjqu_RbUhhsb2_f7fsnVklPQb7juRg2S-qYI6JRwu50v7SJeWrqFPS-SQEGXi0TzWw2I=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCzNaMCZxVtUxfdLE3SYZdYg",
        name: "Comic World Complete"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJUtOEG2sLs7rMlxnLODxxnrqvT_s3GQ-C2WHHs6fQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@plusultraCh",
        name: "Plus Ultra"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJULaLPsj_gFo9v1HJp-ir204B1XEkXU2Q13R5ppsg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@blackmoon_th",
        name: "BlackMoon"
    },
    {
        img: "https://yt3.googleusercontent.com/WtutLg7XyoUh3IiQG0JW8q62PHKRYP1D8I2oiEJIon6RM8pBQRR47F6gU5xESyqOSb_SdU8NUw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@spoilmanga",
        name: "spoil manga"
    },
    {
        img: "https://yt3.googleusercontent.com/egV-KMugAbAg-X6DY--ilgP-q6EWUCBMMjzgLgSWnGNPn7x-OL46rFcERpCsRsuCTnNn3bqIMQ=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ComicWorldProfile",
        name: "Comic World Profile"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXCDk1C10e5HCB_Ss_guZ3rPxoowUAzgtkRYTexIg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@komnachannel6612",
        name: "KOMNA CHANNEL"
    },
    {
        img: "https://yt3.googleusercontent.com/bbbhCIkKYlzl175hHhWW_6A4ztxSPeDwtN62CrhLfSyCb52_MPPyXCu1oaByPQMkzUdEdqcF=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@liseven2916",
        name: "Li Seven2"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXbUjW3rSQqtmpncIzlywGsxGQECMoJSQrHnYglMA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@ULTRA_CHANNEL",
        name: "ULTRA CHANNEL"
    },
    {
        img: "https://yt3.googleusercontent.com/Gi9ZCjEVUAc-bvJsseRfdj2tOpPPNsRLSJzAMXfZ_VGh7Ba4OiF9bmINyXd_0rqOC-UTVeAImg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@skyheartrise",
        name: "เกิดชาตินี้พี่ต้องสปอย"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJXXm8mdLhEgKdTVuXhO5b1BBS5-hfp9mdve8MnENw=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@user-rx3eu8eu6e",
        name: "92 98"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJWA2URYp5IcYHPeLe0VPrM-pGKpmew8MxYu2ulP=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@K4l3UT0",
        name: "KaBuTo"
    },
    {
        img: "https://yt3.googleusercontent.com/QUPwlAISqx-osGI9CiWKx4P7jlAjPWUwij9t1XqJKcbM0n5EEFavU0XGcVCtgV5hPlFhfuevDn0=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@TooneyTunes",
        name: "Tooney Tunes"
    },
    {
        img: "https://yt3.googleusercontent.com/ytc/AL5GRJVFptA2pMcu_GdR9CAN4ELjZFASpgNrXr9G_7NO=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/@HEROIIVERSE",
        name: "HERO II VERSE"
    },
]

export {lists, tech, movieSpoilers, comic }