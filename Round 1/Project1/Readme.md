## React JS

##JSX

It’s called JSX, and it is a Javascript XML syntax transform. This lets you write HTML-ish tags in your Javascript. 
I say HTML-ish because there are a couple gotchas. You are really just writing XML based object representations.

## component

- This is the basic structure for a component.

    
```js var MyComponent = React.createClass({
        render: function(){  return ( <h1>Hello, world!</h1>);
        }
    });
```

## renders
- After creating a class we can render it to our document like so:

```js
    - ReactDOM.render(
         <MyComponent/>,
         document.getElementById('myDiv')
         );
```

## Props

When we use our defined components, we can add attributes called props. These attributes are available in our component as this.props and can be used in our render method to render dynamic data:


```js var MyComponent = React.createClass({
         render: function(){
          return (
            <h1>Hello, {this.props.name}!</h1>
            );
          }
});

ReactDOM.render(<MyComponent name="Handsome" />, document.getElementById('myDiv')
```

## instalation
```html
<!-- The core React library -->
<script src="https://fb.me/react-15.0.1.js"></script>
<!-- The ReactDOM Library -->
<script src="https://fb.me/react-dom-15.0.1.js"></script>
```
