import Navbar from "./navbar";
import Footer from "./footer";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200" style={{ height: "auto", width: "100vw" }}>
        <div className="hero-content text-center">
          <div className="artboard" style={{ width: "auto", height: "auto" }}>
            {children}
          </div>
        </div>
      </div >
      <div style={{ left: '0', right: '0', position: 'absolute' }}>
        <Footer />
      </div>
    </div>
  )

}