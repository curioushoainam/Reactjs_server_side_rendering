var React = require('react');
var ReactDOM = require('react-dom');

class Note extends React.Component{	
	constructor(props){
		super(props);
		this.del = this.del.bind(this);
	}
	del(){
		this.props.rmv(this.props.ind);
	}
	render(){
		return(
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.del}>Delete</button>
			</div>
		)		
	}
}

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			arr: ["Nodejs","React","HTML","JS"]
		}
		this.del = this.del.bind(this);
	}
	
	del(index){
		this.state.arr.splice(index,1);
		this.setState(this.state);
	}

	render(){
		return(
			<div>
			{
				this.state.arr.map((item, ind)=>{
					return <Note key={ind} ind={ind} rmv={this.del} >{item}</Note>
				})
				
			}
			</div>
		)
	}
}

ReactDOM.render(
	<List />
	,document.getElementById('root')
)