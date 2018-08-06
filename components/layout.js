import React from 'react';
import Link from 'next/link';
import Head from 'next/head'

function Layout(props){
  return(
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>granada.io</title>
      </Head>
      <header></header>
      {props.children}

      <style jsx global>{`
      body {
        margin:0;
      }
    `}</style>
    <style jsx>{`
      header {
        height: 70px;
        background: #F40F47;
      }
    `}</style>
    </div>
  )
}

export default Layout;
