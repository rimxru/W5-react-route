import React from "react";

const initialProducts = [
  {
    game: "Valorant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2EZd4corLGSkCj53idrJnB8xnOD8KlAFOQ&s",
    items: [
      {
        name: "VCT x 100T Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/100T-1024x576.jpg",
      },
      {
        name: "VCT25 x PRX Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/PRX-1024x576.jpg",
      },
      {
        name: "VCT x SEN Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/SEN-1024x576.jpg",
      },
      {
        name: "VCT x GEN Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/GEN-1024x576.jpg",
      },
      {
        name: "VCT x Cloud9 Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/C9-1024x576.jpg",
      },
      {
        name: "VCT x Evil Geniuses Classic",
        image:
          "https://admin.esports.gg/wp-content/uploads/2024/02/EG-1024x576.jpg",
      },
      {
        name: "VCT x FURIA Classic",
        image: "https://admin.esports.gg/wp-content/uploads/2024/02/FUR-1024x576.jpg",
      },
      {
        name: "VCT x G2 Esports Classic",
        image: "https://admin.esports.gg/wp-content/uploads/2024/02/G2-1024x576.jpg",
      },
      {
        name: "VCT x Leviatán Classic",
        image: "https://admin.esports.gg/wp-content/uploads/2024/02/LEV-1024x576.jpg",
      },
      {
        name: "VCT x KOI Classic",
        image: "https://admin.esports.gg/wp-content/uploads/2024/02/KOI-1024x576.jpg",
      },
    ],
  },
  {
    game: "League of Legends",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/75de3cbd3816ca43b8ea74788d0de09a8900f1a4-1280x720.jpg",
    items: [
      {
        name: "Risen Legend Vayne",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwecfaJbDEi8ol5eX_KKLMANzICG9X_DTgeQ&s",
      },
      {
        name: "Prestige Spirit Blossom Lux",
        image:
          "https://preview.redd.it/prestige-spirit-blossom-lux-splash-art-v0-m6nlhgqihzue1.jpeg?width=4096&format=pjpg&auto=webp&s=c70f743cf73550adadb0574bb30e09a6d14d12a3",
      },
      {
        name: "Masked Justice Yone",
        image:
          "https://preview.redd.it/new-splash-art-for-masked-justice-yone-v0-4d06zty8wche1.jpeg?auto=webp&s=d4da21ec1f4fd2ecbf0d7b63b8ef5f7d0c7ef01c",
      },
      {
        name: "K/DA ALL OUT Seraphine Indie",
        image:
          "https://turbosmurfs.gg/storage/splash/Seraphine_1.jpg",
      },
      {
        name: "Elementalist Lux",
        image:
          "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7548539/elementalistlu.jpg?quality=90&strip=all&crop=5.76171875,0,88.4765625,100",
      },
      {
        name: "DJ Sona",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw7F3x5AsXLIHO73ZnVEZHsny0JkgXCe0wQ&s",
      },
      {
        name: "Battle Academia Xayah",
        image: "https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters/xayah/skins/skin57/images/xayah_splash_centered_57.skins_xayah_skin57.jpg",
      },
      {
        name: "Heavenscale Lee Sin",
        image: "https://turbosmurfs.gg/storage/splash/LeeSin_51.jpg",
      },
      {
        name: "Broken Covenant Riven",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_55.jpg",
      },
      {
        name: "Faerie Queen Karma",
        image: "https://turbosmurfs.gg/storage/splash/Karma_54.jpg",
      },
    ],
  },
  {
    game: "Teamfight Tactics",
    image:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/b73db1e6cf4c92e8e3550fc20a5b124f802a8165-1920x1080.jpg",
    items: [
      {
        name: "Unbound Garen",
        image:
          "https://preview.redd.it/god-king-garen-unbound-splash-art-v0-m75qd37danxe1.png?auto=webp&s=d8513e35d738f9f0eb391e11dc619d0630a0ce0e",
      },
      {
        name: "Unbound Jhin",
        image:
          "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/f4cca23ce0db875c4ba1b869aaeaea77669f72e3f90acac905f5b99b6ca19a16.jpg",
      },
      {
        name: "Unbound Jinx",
        image: "https://preview.redd.it/arcane-jinx-unbound-splash-art-v0-h5si3v03340e1.jpeg?auto=webp&s=23678b54635da183737b0122d710f7835885374f",
      },
      {
        name: "Unbound Vayne",
        image: "https://pbs.twimg.com/media/GmPAi6mWoAAPA4q?format=jpg&name=small",
      },
      {
        name: "Unbound Warwick",
        image: "https://64.media.tumblr.com/e5803bb007e2276cd0c0e3f8ac90a053/1ab01fba55ada351-4d/s500x750/5add249363926060c9a53a2b155005cd0a6d3db0.png",
      },
      {
        name: "Chibi Kai'Sa",
        image: "https://i.ytimg.com/vi/WHEFlQ7_n8o/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHSCYAC0AWKAgwIABABGFggNih_MA8=&rs=AOn4CLCbAmVs9mZfk5J5wttcUVLyisWYMg",
      },
      {
        name: "Chibi Briar",
        image: "https://preview.redd.it/chibi-briar-revealed-for-the-new-tft-pass-v0-xw9tum6f5xze1.jpeg?width=640&crop=smart&auto=webp&s=5fab4edc6555ad667595f9bd73977e0e43fbc96b",
      },
      {
        name: "chibi irelia porcelain",
        image: "https://preview.redd.it/chibi-porcelain-irelia-splash-art-v0-za79btnkbg3e1.jpeg?auto=webp&s=cd16d0a8a44440fa4854b941bbcd3ad61a550393",
      },
      {
        name: "Chibi Sona",
        image: "https://64.media.tumblr.com/624bc8323a7057ab4fc710d9e7351c20/604b8c6327f88377-22/s1280x1920/985a1b474e96550c4e8a92379e513422f8a0e627.jpg",
      },
      {
        name: "Chibi Kayle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMGKj8WPilnK35KBumXmKHusUec1k2GL84A&s",
      },
    ],
  },
  {
    game: "Wuthering Waves",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/wuthering-waves-2-1-wuwa-21-when-release-date-time-update-maintenance-ends-come-out-phoebe-cover.jpg",
    items: [
      {
        name: "Cantarella",
        image:
          "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/03/wuthering-waves-cantarella-resonance-liberation-animation-with-resonance-mark-shining-1.jpg?q=70&fit=contain&w=1200&h=628&dpr=1",
      },
      {
        name: "Changli",
        image:
          "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/07/wuthering-waves-changli-intimidating-face-closeup.jpg",
      },
      {
        name: "Cartethyia",
        image:
          "https://www.pockettactics.com/wp-content/sites/pockettactics/2025/05/wuthering-waves-cartethyia.jpg",
      },
      {
        name: "Camellya",
        image: "https://i.redd.it/can-someone-explain-the-relationship-between-rover-and-v0-inj0a6rmg2ee1.jpg?width=720&format=pjpg&auto=webp&s=feb5882b883381222e90c22b23710b9747687c08",
      },
      {
        name: "Iuno",
        image: "https://techwiser.com/wp-content/uploads/2025/05/2-2-1024x576.webp",
      },
      {
        name: "Phoebe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptcBIfn-bo3SZ2fPz930wMb3Ae9Ev8zdHhg&s",
      },
      {
        name: "The Shorekeeper",
        image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3084,h_1734,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/video_games/01j8pxjwp99h55vn3a3k.jpg",
      },
      {
        name: "Zani",
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/wuthering-waves-zani-male-rover-story-trailer.jpg",
      },
      {
        name: "Zhezhi",
        image: "https://cdn2.unrealengine.com/wuthering-waves-zhezhi-1200x675-25f8158bf918.jpg",
      },
      {
        name: "Jinhsi",
        image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/06/wuthering-waves-jinhsi-cool-angle-looking-back.jpg",
      },
    ],
  },
  {
    game: "Genshin Impact",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCosYimJUeJAe4ACxzoDXscZSVAFzdEYlFGQ&s",
    items: [
      {
        name: "Arlecchino",
        image:
          "https://www.tacter.com/_next/image?url=http%3A%2F%2Fcontent.tacter.com%2Fpublic%2Fguides%2Fd9c1f509-8098-481a-a8b7-1dd9be91b538%2F2b75a322-c702-44bc-9e55-e1858df02d15.jpg&w=3840&q=75",
      },
      {
        name: "Clorinde",
        image:
          "https://assetsio.gnwcdn.com/genshin-impact-clorinde-build.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      },
      {
        name: "Eula",
        image:
          "https://s.isanook.com/ga/0/ud/220/1102289/eu_6.jpg?ip/crop/w670h402/q80/jpg",
      },
      {
        name: "Furina",
        image: "https://img.4gamers.com.tw/ckfinder-th/image2/auto/2023-11/Furina-Genshin-Impact-Wallpaper-HD-451231413r1311231-231109-214640.png?versionId=HtB8ohqpA1ekA.JCi2gw5YLLbIb_95NA",
      },
      {
        name: "Ganyu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU355x5wOofNdZFvT1C1EwHv4u3GNVFJGtNQ&s",
      },
      {
        name: "Hu Tao",
        image: "https://s.isanook.com/ga/0/ud/218/1093665/hutao(3).jpg?ip/crop/w670h402/q80/jpg",
      },
      {
        name: "Raiden Shogun",
        image: "https://www.cyberpowerpc.com/blog/w/wp-content/uploads/2021/09/genshin-impact-raiden-shogun.jpg",
      },
      {
        name: "Skirk",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/genshin-impact-57-leaks-skirk-signature-weapon-details.jpg",
      },
      {
        name: "Shenhe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iUQ7sGgTrF1TCFJ_zEuUTDIkEv2XDruRXQ&s",
      },
      {
        name: "Nilou",
        image: "https://s.isanook.com/ga/0/ud/231/1157945/nilou_7.jpg?ip/resize/w728/q80/jpg",
      },
    ],
  },
];

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#111",
    color: "white",
    minHeight: "100vh",
    padding: "0",
    margin: "0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    backgroundColor: "#1f1f1f",
    borderBottom: "2px solid #444",
  },
  logo: {
    width: "100px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "6px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  main: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  productBox: {
    backgroundColor: "#222",
    borderRadius: "10px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
    marginTop: "24px",
    marginBottom: "32px",
    display: "flex",
    alignItems: "flex-start",
    gap: "24px",
  },
  gameImage: {
    width: "140px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
  },
  gameTitle: {
    color: "#ffb300",
    fontSize: "20px",
    marginBottom: "12px",
  },
  itemList: {
    paddingLeft: "20px",
    margin: 0,
  },
  item: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#eee",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  itemImage: {
    maxWidth: "140px",
    maxHeight: "140px",
    width: "140px",
    height: "140px",
    objectFit: "contain",
    borderRadius: "14px",
    background: "#333",
    boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
    display: "block",
  },
};

function Product() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://i.pinimg.com/736x/fc/31/f4/fc31f4c895945dc96b3bb51932e4832c.jpg"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Recommended products for each game</h1>
      </header>
      <main style={styles.main}>
        {initialProducts.map((product) => (
          <div key={product.game} style={styles.productBox}>
            <img
              src={product.image}
              alt={product.game}
              style={styles.gameImage}
            />
            <div style={{ flex: 1 }}>
              <div style={styles.gameTitle}>{product.game}</div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: 16,
                }}
              >
                {product.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 170,
                      marginBottom: 18,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.itemImage}
                    />
                    <div
                      style={{
                        width: "140px",
                        fontSize: 15,
                        textAlign: "center",
                        marginTop: 12,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Product;
