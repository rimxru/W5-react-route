import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center", // จัดให้อยู่ตรงกลาง
          alignItems: "center",
          gap: "28px",
          background: "#222",
          padding: "18px 48px 10px 48px", // ลด padding ด้านบนและล่าง
          borderRadius: "0 0 8px 8px", // มุมบนไม่โค้ง มุมล่างโค้ง
          margin: "0 auto", // ชิดบนสุด
          width: "100%", // ขยายเต็มความกว้าง
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          borderBottom: "2px solid #444",
        }}
      >
        <Link
          to={"/"}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px 32px", // เพิ่มขนาดปุ่มลิงก์
            borderRadius: "4px",
            transition: "background 0.2s",
            background: "#444",
          }}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px 32px",
            borderRadius: "4px",
            transition: "background 0.2s",
            background: "#444",
          }}
        >
          About
        </Link>
        <Link
          to={"/product"}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px 32px",
            borderRadius: "4px",
            transition: "background 0.2s",
            background: "#444",
          }}
        >
          Product
        </Link>
        <Link
          to={"*"}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            padding: "10px 32px",
            borderRadius: "4px",
            transition: "background 0.2s",
            background: "#444",
          }}
        >
          NotFound
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
