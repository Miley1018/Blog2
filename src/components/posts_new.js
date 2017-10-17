import React,{Component} from 'react';
import { reduxForm, Field } from 'redux-form'; 

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
  render(){
    return(
      <form>
        <Field 
            label='Title For Post'
            name="title"
            component={this.renderField}
            placeholder="Title"
        />
      </form>
    );
  }
}

export default reduxFrom({form:'postsNew'})(PostsNew);