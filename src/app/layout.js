"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect } from 'react'
import '../../public/assets/css/animate.min.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/responsive.css';
import '../../public/assets/css/color.css'; 
import '../../public/assets/js/lib/slick/slick.css';
import '../../public/assets/js/lib/slick/slick-theme.css';
import Script from 'next/script'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Sign from '@/components/sign'

import Register from '@/components/register'
export default function RootLayout({ children }) {
   

  return (
    <html lang="en">
      <head>
        <script src="/assets/js/jquery-3.3.1.min.js"  ></script>
        <script src="/assets/js/modernizr-3.6.0.min.js"  ></script>
        <script src="/assets/js/bootstrap.min.js"  ></script>
        <script src="/assets/js/scripts.js"  ></script>
 
        {/* Maps */}
        <script src="/assets/js/html5lightbox.js"></script>
        <script src="/assets/js/lib/slick/slick.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVwc4veKudU0qjYrLrrQXacCkDkcy3AeQ"></script>
        <script src="/assets/js/map-cluster/infobox.min.js"></script>
        <script src="/assets/js/map-cluster/markerclusterer.js"></script>
        <script src="/assets/js/map-cluster/map2.js"></script>
      </head>
      <body className={inter.className}>

        <div class="wrapper">
          <Header />
          <Sign />
          <Register />
          {children}
          <Footer />
        </div>
        
      </body>
    </html>
  )
}
