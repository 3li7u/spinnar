import { createEl } from "./utilities.js";

// Render Spinner Component
export function getSpinnerComponent(spinner) {
  return createEl({
    tagName: 'div',
    attrs: [{ key: 'class', value: 'col' }],
    content: [{
      tagName: 'div',
      attrs: [{ key: 'class', value: 'spinner-container' }],
      content: [{
        tagName: 'div',
        attrs: [{ key: 'class', value: `spinner ${spinner.className}` }],
        content: spinner.innerContent ? spinner.innerContent.map(inner => ({
          tagName: 'div',
          attrs: [{ key: 'class', value: inner.className }],
          content: ''
        })) : '',
      },
      {
        tagName: 'p',
        attrs: [{ key: 'class', value: 'spinner-title' }],
        content: spinner.name,
      }]
    }]
  });
}

// Render Modal Component
export function getModalComponent(spinner, cssCode) {
  return createEl({
    tagName: 'div',
    attrs: [{ key: 'class', value: 'overlay' }],
    content: [{
      tagName: 'div',
      attrs: [{ key: 'class', value: 'modal' }],
      content: [{
        tagName: 'div',
        attrs: [{ key: 'class', value: 'header' }],
        content: [{
          tagName: 'h4',
          content: spinner.name
        },
        {
          tagName: 'div',
          attrs: [{ key: 'class', value: 'close' }],
          content: [{ tagName: 'i', attrs: [{ key: 'class', value: 'fa-solid fa-close' }], content: '' }]
        }]
      }, {
        tagName: 'div',
        attrs: [{ key: 'class', value: 'main' }],
        content: [{
          tagName: 'div',
          attrs: [{ key: 'class', value: 'col preview' }],
          content: [{ tagName: 'h5', content: 'Preview' }, {
            tagName: 'div',
            attrs: [{ key: 'class', value: `spinner ${spinner.className}` }],
            content: spinner.innerContent ? spinner.innerContent.map(inner => ({
              tagName: 'div',
              attrs: [{ key: 'class', value: inner.className }],
              content: ''
            })) : '',
          }]
        }, {
          tagName: 'div',
          attrs: [{ key: 'class', value: 'col codes' }],
          content: [{ tagName: 'h5', content: 'HTML' }, {
            tagName: 'div',
            attrs: [{ key: 'class', value: 'code' }],
            content: [{
              tagName: 'pre',
              content: `<div class="spinner ${spinner.className}">${spinner.innerContent ? spinner.innerContent.map(inner => `<div class="${inner.className}"></div>`).toString().split(',').join('') : ''}</div>`
            }]
          }, { tagName: 'h5', content: 'CSS' }, {
            tagName: 'div',
            attrs: [{ key: 'class', value: 'code' }],
            content: [{ tagName: 'pre', content: cssCode }]
          }]
        }]
      }]
    }]
  });
};