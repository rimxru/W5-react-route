import React from "react";

function Home() {
  const games = [
    {
      name: "Valorant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2EZd4corLGSkCj53idrJnB8xnOD8KlAFOQ&s",
      description: "เกมยิงปืน FPS แนววางแผนจาก Riot Games",
    },
    {
      name: "League of Legends",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/75de3cbd3816ca43b8ea74788d0de09a8900f1a4-1280x720.jpg",
      description: "เกม MOBA ยอดฮิต ที่มีการแข่งขันระดับโลก",
    },
    {
      name: "Teamfight Tactics",
      image:
        "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/b73db1e6cf4c92e8e3550fc20a5b124f802a8165-1920x1080.jpg",
      description: "เป็นเกมแนว Auto Battler หรือ กลยุทธ์ต่อสู้อัตโนมัติ.",
    },
    {
      name: "Wuthering Waves",
      image:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/wuthering-waves-2-1-wuwa-21-when-release-date-time-update-maintenance-ends-come-out-phoebe-cover.jpg",
      description:
        "เป็นเกมแนว Action RPG แบบ Open World หรือก็คือ เกมสวมบทบาทแนวแอคชั่นที่มีโลกเปิดให้สำรวจ.",
    },
    {
      name: "Genshin Impact",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCosYimJUeJAe4ACxzoDXscZSVAFzdEYlFGQ&s",
      description: "เกมแนว Action RPG กราฟิกสวย เล่นฟรี",
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
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#222",
      padding: "12px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "6px",
    },
    description: {
      fontSize: "14px",
      marginTop: "8px",
      color: "#ccc",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://i.pinimg.com/736x/fc/31/f4/fc31f4c895945dc96b3bb51932e4832c.jpg"
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Game Zone</h1>
      </header>

      <main style={styles.main}>
        <center>
          <h2>🎮 ยินดีต้อนรับสู่ศูนย์รวมเกมยอดนิยม!</h2>
        </center>
        <center>
          <p>
            รวมเกมยอดฮิตที่คุณไม่ควรพลาด เล่นสนุก ภาพสวย เล่นฟรี และน่าติดตาม
          </p>
        </center>
        <div style={styles.grid}>
          {games.map((game, index) => (
            <div key={index} style={styles.card}>
              <img src={game.image} alt={game.name} style={styles.image} />
              <h3>{game.name}</h3>
              <p style={styles.description}>{game.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
