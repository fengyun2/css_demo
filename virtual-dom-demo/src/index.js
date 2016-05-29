/*
* @Author: fengyun2
* @Date:   2016-05-29 10:53:22
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-29 14:31:50
*/

'use strict';

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


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

function render() {
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

var count = 0;

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
