## React JS

##JSX

It’s called JSX, and it is a Javascript XML syntax transform. This lets you write HTML-ish tags in your Javascript. 
I say HTML-ish because there are a couple gotchas. You are really just writing XML based object representations.

## component
- This is the basic structure for a component.
var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});
