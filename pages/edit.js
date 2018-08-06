import Form from  '../containers/form';
import Layout from '../components/layout'


export default class extends React.Component{

  state ={
    item: ''
  }

  static async getInitialProps({ query }){
    let idBook = query.id
    let req = await fetch
    (`https://fakerestapi.azurewebsites.net/api/books/${idBook}`)
    let json = await req.json()
    return { book: json }
  }

  render(){
    return(
      <Layout>
        <div>
          <Form
            type = "update"
            item={this.props.book}
          />
        </div>
      </Layout>
    )
  }
}
