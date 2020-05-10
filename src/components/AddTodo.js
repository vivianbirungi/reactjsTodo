import React ,{ Component} from 'react';
import PropTypes from 'prop-types';
class AddTodo extends Component {
 state = {
    title :''
 }
 onSubmit = (e) =>{
   e.preventDefault();
   this.props.addTodo(this.state.title);
   this.setState({title:''})
 }

 onChange =(e) =>{ this.setState({
  [e.target.name]: e.target.value
 });

 }
render (){
  return (
   
  <form style={{display:"flex"}} onSubmit = {this.onSubmit}>
      <input type="text" placeholder="Add todo .." name="title" style={{flex:"10", padding: "5px"}} onChange = {this.onChange} />
      
      <input type="submit" value="submit" className="btn" style={{flex:"1"}}/>
  </form>
  );
}
}
AddTodo.propTypes ={
  addTodo:PropTypes.func.isRequired,

};
export default AddTodo;
