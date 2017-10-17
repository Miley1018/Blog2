import React,{Component} from 'react';
import { reduxForm, Field } from 'redux-form'; 
import {createPost} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class PostsNew extends Component{
  renderField(field){
    const {meta:{touched,error}} = field;
    return (
      <div>
        <label>{field.label}</label>
        <input type='text' {...field.input}></input>
        <div>{touched?error:''}</div>
      </div>
    ) 
  }
  onSubmit(values){
    this.props.createPost(values,()=>{
      this.props.history.push('/')
    })
  }
  render(){
    const {handleSubmit}=this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
            label='Title For Post'
            name="title"
            component={this.renderField}
            placeholder="Title"
        />
        <Field 
            label='Categories'
            name="categories"
            component={this.renderField}
            placeholder="Type in categories"
        />
        <Field 
            label='Post Content'
            name="content"
            component={this.renderField}
            placeholder="Type in content"
        />
        <button type='submit'>Submit</button>
      
      </form>
    );
  }
}

function validate(values){
  const errors={}
  if(!values.title){
    errors.title='Required'
  }else if (values.title.length<3){
    errors.title="Must be 3 letters or more"
  }
  if (!values.categories){
    errors.categories='Required'
  }
  if (!values.content){
    errors.content='Required'
  }
  return errors
}

export default reduxForm({form:'postsNew',validate})(connect(null,createPost)(PostsNew));