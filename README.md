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

const dataHeader = {
  "text": "Heading 2",
  "level": 2
}

export const Heading () => <Header data={dataHeader} />;
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
    className: "styled-iframe",
    rel: "nofollower",
    sandbox: "allow-fullscreen"
  }
  header: {
    className: "lead"
  },
  image: {
    className: "img-fluid",
    actionsClassNames: {
      stretched: 'image-block--stretched',
      withBorder: 'image-block--with-border',
      withBackground: 'image-block--with-background',
    }
  },
  list: {
    className: "unstyled-list"
  },
  paragraph: {
    className: "lead"
  },
  quote: {
    className: "block-quote",
    actionsClassNames: {
    alignment: 'text-align-{alignment}', // This is a substitution placeholder: left or center.
  }
  },
  table: {
    className: "table"
  }
}} />
```

Above you have all allowed properties for each renderer.

So, in theory, any CSS framework (such as Bootstrap) can work seamlessly with this library as long as you pass the correct properties.

## Custom Renderers

You can provide your own custom renderers or replace the default ones by passing a `renderers` object to the `Blocks`.

```tsx
const Checklist = ({
  data, className = ""
}: {
  data: {[s:string]: any}
  className?: string
}) => {

  return (
    <>
      {data?.items.map((item, i) => (
        <p key={i}>
          <label>
            <input type="checkbox" /> {ReactHtmlParser(item)}
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

## Inspiration

- [EditorJS-React-Renderer](https://github.com/BomdiZane/EditorJS-React-Renderer) but without opinated inline styles.
