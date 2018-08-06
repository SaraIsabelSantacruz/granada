import React from 'react';
import { Link } from '../routes'
import Layout from '../components/layout';
import Book from '../components/book'
import 'isomorphic-fetch';

export default class extends React.Component{

  state={
    book:{}
  }

  static async getInitialProps({ query }){
    let idBook = query.id
    let req = await fetch(`https://fakerestapi.azurewebsites.net/api/books/${idBook}`)
    let json = await req.json()
    return { book: json }
  }

  componentWillMount (){
    this.setState({
      book: this.props.book
    });
  }

  render(){
    const { book } = this.state;
    return(
      <Layout
        title={book.Title, book.PublishDate}
      >
        <Book
          title = {book.Title}
          publishDate = {book.PublishDate}
          id = {book.ID}
          description = {book.Description}
          excerpt = {book.Excerpt}
          data-id = {book.ID}
        />
        <Link
          route = "edit"
          params = {
            {
            slug: 'edit',
            id:book.ID}
          }
          prefetch
        >
          <div className="btn">
            Editar
          </div>
        </Link>
        <style jsx>{`
          .btn{
            padding: 8px 22px;
            background: #DA111B;
            color: #fff;
            font-size: 17px;
            border: 1px solid black;
            cursor: pointer;
            width: 3%;
            border-radius: 15px;

        `}</style>
      </Layout>
    )
  }
}
