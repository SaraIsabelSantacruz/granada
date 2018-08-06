import React, { Component } from 'react';
import { Link } from '../routes'
import Book from '../components/book'

class BookList extends Component{

  state = {
    books: []
  }

  componentDidMount() {
    fetch('https://fakerestapi.azurewebsites.net/api/books')
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(books => this.setState({ books }))
  }

  onClick = (event) => {
    let element = event.target;
    let id = element.id;
    fetch(`https://fakerestapi.azurewebsites.net/api/Books/${id}`, {
      method: 'DELETE'
    })
    .catch(err => console.error(err))
    .then(() => {
      let books = this.state.books
      books.splice(id, 1)
      this.setState({
        books: books
      })
    })
  }

  render(){
    console.log(this.state.books);
    const books = this.state.books;
    return(
      <div>
        <div className="items-container">
          {
            books.map((item) => {
              return(
                <div key = {item.ID}>
                  <Link
                    route = "book"
                    params = {{
                      slug: 'book',
                      id: item.ID
                    }}
                    prefetch
                  >
                    <div className="item">
                      <Book
                        title = {item.Title}
                        publishDate = {item.PublishDate}
                        id = {item.ID}
                      />
                    </div>
                  </Link>
                  <button
                    onClick = {this.onClick}
                    id = {item.ID}
                    type = "submit"
                  >
                    Borrar
                  </button>
                </div>
              )
            })
          }
          <style jsx>{`
            .items-container{
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin: 2% auto;
              width: 85%;
            }
            .item{
              margin: 5px;
              text-align: center;
            }
            button{
              cursor:pointer;
            }
          `}</style>
        </div>
      </div>
    )
  }
}

export default BookList;
