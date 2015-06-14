var React = require('react');
var D3PieChart = require('./js/Web Components/pie.react');

var data = [
    {name: "Apples", count: 10},
    {name: "Oranges", count: 20},
    {name: "Bananas", count: 5},
    {name: "Blueberries", count: 42},
    {name: "mangoes ", count: 29}  
];
React.render(
<D3PieChart data={data} title="Sample Fruits"/>, 
    document.body);