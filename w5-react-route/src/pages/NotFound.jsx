import React from "react";

function NotFound() {
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
    width: '100px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '6px'
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    main: {
      padding: "40px 20px",
      textAlign: "center",
    },
    notFoundBox: {
      backgroundColor: "#222",
      borderRadius: "12px",
      padding: "40px 24px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
      margin: "40px auto",
      maxWidth: "480px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    notFoundImg: {
      width: "120px",
      marginBottom: "24px",
      opacity: 0.8,
    },
    notFoundText: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#ff6b6b",
      marginBottom: "12px",
    },
    description: {
      fontSize: "18px",
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
        <div style={styles.notFoundBox}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="404 Not Found"
            style={styles.notFoundImg}
          />
          <div style={styles.notFoundText}>404 Not Found</div>
          <div style={styles.description}>ขออภัย ไม่พบหน้าที่คุณต้องการ</div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
