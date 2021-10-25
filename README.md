# Editor.js Blocks React Renderer

Renders Editor.js blocks to semantic React HTML5 components. Unnopinated and flexible.

[![](https://flat.badgen.net/npm/v/editorjs-blocks-react-renderer?icon=npm)](https://www.npmjs.com/package/editorjs-blocks-react-renderer)
[![](https://flat.badgen.net/npm/license/editorjs-blocks-react-renderer)](https://www.npmjs.com/package/editorjs-blocks-react-renderer)

An unnopinated React library that renders flexible HTML5 React components from [Editor.js](https://editorjs.io/) block style data.

It follows semantic practices and without inlining styles. It's flexible enough to allow developers to include their own styles via CSS classes, which can be passed to each renderer via configuration.

This also supports server side rendering.

## Usage

Install the package via npm:
```sh
npm i -S editorjs-blocks-react-renderer
```

Import in your component:
```js
import Blocks from 'editorjs-blocks-react-renderer';
```

Use it with a [block style data](https://editorjs.io/saving-data) from Editor.js:
```jsx
export const Article = () => <Blocks data={dataFromEditor} />;
```

## Render a single block

Blocks are independent and you can import only a set of them and use them diretly:
```jsx
import { Header } from 'editorjs-react-renderer';

const dataHeader: HeaderBlockData = {
  text: "Heading 2",
  level: 2
}

export const Heading () => <Header data={dataHeader} className="text-xl" />;
```

## Internal blocks

The package ships with the following renderers, but you can include your custom ones:
- Code
- Header
- Paragraph
- Image
- Embed
- List
- Table
- Quote
- Delimiter

## Styling and optional configs

This library does not include/force any style nor inlines any styles. Before you ask, we're not supporting inline styles due to [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) requirements.

However, each renderer supports a set of props, including `className` which can be used to style each block. You just need to pass a `config` object to `Blocks` or directly to any renderer like so:

```jsx
<Blocks data={dataFromEditor} config={{
  code: {
    className: "language-js"
  },
  delimiter: {
    className: "article-hr"
  },
  embed: {
    className: "styled-iframe"
  },
  header: {
    className: "lead"
  },
  image: {
    className: "img-fluid"
  },
  list: {
    className: "unstyled-list"
  },
  paragraph: {
    className: "lead"
  },
  quote: {
    className: "block-quote"
  },
  table: {
    className: "table"
  }
}} />
```

Below are the defaults for each renderer:

```js
const defaultConfigs = {
  code: {
    className: ""
  },
  delimiter: {
    className: ""
  },
  embed: {
    className: "styled-iframe",
    rel: "noreferer nofollower external", // Generates an <a> if not able to receive an "embed" property
    sandbox: undefined
  },
  header: {
    className: ""
  },
  image: {
    className: "",
    actionsClassNames: {
      stretched: "image-block--stretched",
      withBorder: "image-block--with-border",
      withBackground: "image-block--with-background",
    }
  },
  list: {
    className: ""
  },
  paragraph: {
    className: ""
  },
  quote: {
    className: "",
    actionsClassNames: {
      alignment: "text-align-{alignment}", // This is a substitution placeholder: left or center.
    }
  },
  table: {
    className: "table"
  }
}
```

So, in theory, any CSS framework (such as Bootstrap) can work seamlessly with this library as long as you pass the correct properties.

## Custom Renderers

You can provide your own custom renderers or replace the default ones by passing a `renderers` object to the `Blocks`.

```tsx
const Checklist: RenderFn<{
  items: string[]
}> = ({
  data, className = ""
}) => {

  return (
    <>
      {data?.items.map((item, i) => (
        <p key={i} className={className}>
          <label>
            <input type="checkbox" /> {HTMLReactParser(item)}
          </label>
        </p>
      ))}
    </>
  )
}

export default () => <Blocks data={dataFromEditor} renderers={{
  checklist: Checklist
}} />
```

## Security optimization

For `embed` block, you can pass a string of Feature-Policy directives for `sandbox` to optimize for security. Take into account that services such as YouTube won't work properly if you set those settings.


## Inspiration

- [EditorJS-React-Renderer](https://github.com/BomdiZane/EditorJS-React-Renderer) but without opinated inline styles.
