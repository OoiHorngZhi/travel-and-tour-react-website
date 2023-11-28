"use client";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  // Combine Header and Footer with content
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
