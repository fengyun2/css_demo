/*
* @Author: fengyun2
* @Date:   2016-05-29 10:53:22
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-29 20:53:34
*/

'use strict';

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

/* Example1: */

/*function render(count)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
  }*/

/*function render() {
  return h('h1.fun', {
    href: '#',
    onclick: function (e) {
      alert('you are 1,000,000th visitor!');
      e.preventDefault();
    },
    style: {
      'font-family': 'Comic Sans MS'
    }
  }, 'click here to win a prize');
}
*/

/*var obj = {
  a: 'Apple',
  b: 'Banana',
  c: 'Cherry',
  d: 'Durian',
  e: 'Elder Berry'
};
function render() {
  return h('table',
    [h('tr', [h('th', {style: {'background-color': '#2f2', 'padding': '5px 10px', 'border-radius': '4px'}}, 'letter'), h('th', {style: {'background-color': '#2f2', 'padding': '5px 10px', 'border-radius': '4px'}}, 'fruit')]),
    Object.keys(obj).map(function (k) {
      return h('tr',
        [h('th', k),
                h('td', obj[k])]
        );
    })]
    );
}*/

/*var leftNode = h('div.foo#bar',[
  h('span', 'some text'),
  h('input', {type: 'text', value: 'foo'})
  ]);

var rightNode = h('text');

var patches = diff(leftNode, rightNode);
console.log(patches);
*/



/*var count = 0;

var tree = render();
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

setInterval(function () {
  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);
*/

var leftNode = h('div');
var rightNode = h('div',
  [
  h('span',
  {
    'style':
    {
      key: 'primary key',
      namespace: 'http://www.baidu.com',
      ev-click: function (ev) {
        alert(ev);
      },
      'background-color': '#2f2', 'padding': '5px 10px', 'border-radius': '4px', 'color': '#fff'
    }
  }, '环境好呀!')
  ]
  );

// render the left node to DOM node
var rootNode = createElement(leftNode);
document.body.appendChild(rootNode);

// update the DOM with the results of a diff
var patches = diff(leftNode, rightNode);
patch(rootNode, patches);

console.log(patches);
