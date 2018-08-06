import React from 'react';
import { Link } from '../routes';
import Layout from '../components/layout'
import BookList from '../containers/booklist'
import Head from 'next/head'
import 'isomorphic-fetch'

export default class extends React.Component{

  render(){
    const { books } = this.props;
    return(
      <Layout
        title="granada"
      >
        <Link
          route = "new"
          params = {{
            slug: 'new'
          }}
          prefetch
        >
          <div className="btn">
            Crear nuevo
          </div>
        </Link>
        <BookList
        />
        <style>{`
          .btn{
            padding: 8px 22px;
            background: #fff;
            color: #000;
            font-size: 17px;
            border: 1px solid black;
            cursor: pointer;
            position: absolute;
            right: 35px;
            top: 14px;
            border-radius: 50px;
        }
        `}</style>
      </Layout>
    )
  }
}
