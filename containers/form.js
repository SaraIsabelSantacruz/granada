import React, { Component } from 'react';
import {Router} from '../routes'

class Form  extends Component{

  state = {
    form:{}
  }

  sendForm = (event) => {
    event.preventDefault()
    Router.pushRoute('index')
    if(this.props.type == 'update') {
      fetch(`https://fakerestapi.azurewebsites.net/api/Books/${this.props.item.ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      })
      .catch(err => console.error(err))
      .then(res => res.json())
      .then(thing => console.log(thing))
    }
    else {
      fetch(`https://fakerestapi.azurewebsites.net/api/Books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(thing => console.log(thing))
    }
  }

  componentDidMount(){
    if(this.props.type == 'update') {
      const elements = document.querySelectorAll('.FormInput-Input');

      elements[1].value = this.props.item.ID
      elements[2].value = this.props.item.Title
      elements[3].value = this.props.item.Description
      elements[4].value = this.props.item.PageCount
      elements[5].checked = this.props.item.Excerpt
      elements[6].checked = this.props.item.PublishDate

      this.setState({
        form:{
          ID: this.props.item.ID,
          Title: this.props.item.Title,
          Description: this.props.item.Description,
          PageCount: this.props.item.PageCount,
          Excerpt: this.props.item.Excerpt,
          PublishDate: this.props.item.PublishDate
        }
      })
    }
  }

  onChange = (event) =>{
    const target = event.target;
    const name = target.name;
    this.setState({
      form:{
        ...this.state.form,
        [name]: target.value
      }
    });
  }

  render(){
    console.log(this.state.form);
    return(
      <div className="container-form">
        <div className="container-img">
          <img
            src={`http://picsum.photos/200/300/?image=${this.props.item.ID}`}
          >

          </img>
        </div>
        <form className="PostForm">
          <div className="FormInput">
            <label htmlFor="ImageURL" className="FormInput-Label">Image</label>
            <input
                type="text"
                className="FormInput-Input"
                name="ImageURL"
            />
          </div>
           <div className="FormInput">
            <label htmlFor="ID" className="FormInput-Label">ID</label>
            <input
              type="text"
              className="FormInput-Input"
              name="ID"
              onChange={(ev) => { this.setState({ form: { ...this.state.form, ID: ev.target.value } }) }}
            />
          </div>
          <div className="FormInput">
            <label htmlFor="Title" className="FormInput-Label">Title</label>
            <input
              type="text"
                className="FormInput-Input"
                name="Title"
                onChange={(ev) => { this.setState({ form: { ...this.state.form, Title: ev.target.value } }) }}
            />
          </div>
          <div className="container-numbers">
            <div className="FormInput">
              <label htmlFor="PublishDate" className="FormInput-Label">Fecha</label>
              <input
                  type="date"
                  className="FormInput-Input"
                  name="PublishDate"
                  onChange={(ev) => { this.setState({ form: { ...this.state.form, PublishDate: ev.target.value } }) }}
              />
            </div>
            <div className="FormInput">
              <label htmlFor="PageCount" className="FormInput-Label">Nº páginas</label>
              <input
                  type="text"
                  className="FormInput-Input"
                  name="PageCount"
                  onChange={(ev) => { this.setState({ form: { ...this.state.form, PageCount: ev.target.value } }) }}
              />
            </div>
          </div>
          <div className="FormInput">
            <label htmlFor="Description" className="FormInput-Label">Descripcion</label>
            <input
                type="text"
                className="FormInput-Input"
                name="Description"
                onChange={(ev) => { this.setState({ form: { ...this.state.form, Description: ev.target.value } }) }}
            />
          </div>
          <div className="FormInput Textarea">
            <label htmlFor="Excerpt" className="FormInput-Label">Extracto</label>
            <textarea
                type="text"
                className="FormInput-Input"
                name="Excerpt"
                onChange={(ev) => { this.setState({ form: { ...this.state.form, Excerpt: ev.target.value } }) }}
            />
          </div>
          <button onClick={this.sendForm} className="Form-Btn">Guardar</button>
        </form>
        <style jsx>{`
          .container-form {
            text-align: center;
            margin-top: 2%;
          }
          .container-img{
            border: 1px solid black;
            width: 200px;
            margin: auto;
            height: 300px;
          }
          .PostForm{
            width: 50%;
            margin: 5% auto;
            text-align: left;
          }
          .FormInput{
            margin:10px;
            display: flex;
            justify-content: space-between;
          }
          .FormInput input{
            width: 78%;
            display: inline-block;
            height: 20px;
            border-radius: 5px;
            text-shadow: none;
            box-shadow: none;
            border: 1px solid #8080805c;
          }
          .FormInput label{
            margin-right: 5%;
            width: 80px;
            text-align: end;
          }
          .Textarea{
            display:flex;
          }
          .Textarea textarea{
            margin: 0px;
            height: 99px;
            width: 482px;
            border-radius: 5px;
            border: 1px solid #80808069;
          }
          .container-numbers{
            display: flex;
            justify-content: space-between;
          }
          .container-numbers .FormInput{
            width:50%;
          }
          .container-numbers input{
            width:65%;
          }
          .Form-Btn{
            padding: 8px 22px;
            border-radius: 5px;
            background: #DA111B;
            color: #fff;
            font-size: 17px;
            float: right;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default Form;
