var Product = React.createClass({
  render: function(){
    return(
	 <div>
        <p>Android - 199$</p>
		<button>Buy</button>
	 </div>
      );
  }
});

React.render( <Product/>, document.getElementById("root"));
