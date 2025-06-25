import React from "react";

function About() {
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
      maxWidth: "700px",
      margin: "0 auto",
    },
    aboutBox: {
      backgroundColor: "#222",
      borderRadius: "10px",
      padding: "24px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
      marginTop: "24px",
      textAlign: "center",
    },
    description: {
      fontSize: "16px",
      color: "#ccc",
      marginTop: "12px",
      lineHeight: 1.7,
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
        <h1 style={styles.title}>About Game Zone</h1>
      </header>
      <main style={styles.main}>
        <div
          style={{ ...styles.aboutBox, marginTop: "32px", textAlign: "left" }}
        >
          <h2 style={{ textAlign: "center" }}>ข้อมูลเกมยอดนิยม</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "24px" }}>
              <strong>Valorant</strong>: เกมยิงปืน FPS แนววางแผนจาก Riot Games
              ที่เน้นกลยุทธ์และความแม่นยำ มีตัวละครหลากหลายพร้อมสกิลเฉพาะตัว
            </li>
            <li style={{ marginBottom: "24px" }}>
              <strong>League of Legends</strong>: เกม MOBA
              ระดับโลกที่มีการแข่งขันสูง
              ผู้เล่นต้องร่วมมือกันวางแผนและใช้ทักษะเพื่อเอาชนะฝ่ายตรงข้าม
            </li>
            <li style={{ marginBottom: "24px" }}>
              <strong>Teamfight Tactics</strong>:
              เป็นเกมแนว Auto Battler หรือ กลยุทธ์ต่อสู้อัตโนมัติ.
              ผู้เล่นจะจัดทีมตัวละครจากเกม League of Legends และให้พวกเขาต่อสู้กันเองโดยอัตโนมัติ. เป้าหมายคือการเป็นผู้เล่นคนสุดท้ายที่เหลือรอด.
            </li>
            <li style={{ marginBottom: "24px" }}>
              <strong>Wuthering Waves</strong>: เป็นเกมแนว Action RPG แบบ Open World หรือก็คือ เกมสวมบทบาทแนวแอคชั่นที่มีโลกเปิดให้สำรวจ.
              ตัวเกมมีองค์ประกอบของเกมแนว กาชา (gacha) และเน้นการต่อสู้ที่รวดเร็วและเร้าใจ. 
            </li>
            <li>
              <strong>Genshin Impact</strong>: เกม Action RPG
              กราฟิกสวยงามในโลกแฟนตาซี มีระบบสำรวจและเนื้อเรื่องเข้มข้น
              พร้อมตัวละครให้สะสมมากมาย
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default About;
