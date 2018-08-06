import Form from  '../containers/form'
import Layout from '../components/layout'

export default class extends React.Component{
  state ={
    ID: 0
  }
  render(){
    return(
      <Layout>
        <Form
          item={this.state.ID}
        />
      </Layout>
    )
  }
}
