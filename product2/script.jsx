var Product = React.createClass({
	getInitialState: function(){
		return {qty: 0};
  },
	buy: function(){
		this.setState({qty: this.state.qty + 1});
  },
  
  show: function(){
	this.props.handleShow(this.props.name);
  },
  
  
  render: function(){
    return(
		<div>
			<p>{this.props.name} - ${this.props.price}</p>
			<button onClick={this.buy}>Buy</button>
			<button onClick={this.show}>Show</button>
			<h3>Qty: {this.state.qty} item(s)</h3>
		</div>
      );
  }
});

var Total = React.createClass({
	render: function(){
		return(
			<div>
				<h3>Total Cash:</h3>
			</div>
		);
	}
});

var ProductList = React.createClass({
	showProduct: function(name){
		alert("You selected" + name);
	},
	render: function(){
	return(
		<div>
			<Product name="Android" price="121" 
			handleShow={this.showProduct}/>
			<Product name="Apple" price="123"
			handleShow={this.showProduct}/>
			<Product name="Nokia" price="369"
			handleShow={this.showProduct}/>
			<Total/>
		</div>
	);
	}

});

React.render( <ProductList/>, document.getElementById("root"));
