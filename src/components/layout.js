import React from "react"
import Header from '../components/header';
import Footer from "../components/footer";
import "../styles/stylesheet.css"
import * as layoutStyles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.content}>
        <Header />
        <main className={layoutStyles.container}>
            {children}
        </main>
      <Footer />
    </div>
  )
}