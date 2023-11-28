import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import MainLayout from "@/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

// Website metadata
export const metadata = {
  title: "Travel and Tour",
  description: "Your best travel choice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: 0, margin: 0 }}>
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
