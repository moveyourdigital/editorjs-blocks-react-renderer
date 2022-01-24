# Editor.js Blocks React Renderer

Renders Editor.js blocks to semantic React HTML5 components. Unnopinated and flexible.

[![](https://flat.badgen.net/npm/v/editorjs-blocks-react-renderer)](https://www.npmjs.com/package/editorjs-blocks-react-renderer)
[![](https://flat.badgen.net/npm/license/editorjs-blocks-react-renderer)](https://www.npmjs.com/package/editorjs-blocks-react-renderer)
[![](https://flat.badgen.net/npm/types/editorjs-blocks-react-renderer)](https://www.npmjs.com/package/editorjs-blocks-react-renderer)

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
- SimpleImage
- Embed
- List
- NestedList
- Table
- Quote
- Delimiter
- Raw (HTML)

## Styling and optional configs

This library does not include/force any style nor inlines any styles. Before you ask, we're not supporting inline styles due to [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) requirements.

However, each renderer supports a set of props, including `className` which can be used to style each block. You just need to pass a `config` object to `Blocks` or directly to any renderer like so:

```jsx
<Blocks data={dataFromEditor} config={{
  code: {
    className: "language-js"
  },
  delimiter: {
    className: "border border-2 w-16 mx-auto"
  },
  embed: {
    className: "border-0"
  },
  header: {
    className: "font-bold"
  },
  image: {
    className: "w-full max-w-screen-md",
    actionsClassNames: {
      stretched: "w-full h-80 object-cover",
      withBorder: "border border-2",
      withBackground: "p-2",
    }
  },
  list: {
    className: "list-inside"
  },
  paragraph: {
    className: "text-base text-opacity-75",
    actionsClassNames: {
      alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
    }
  },
  quote: {
    className: "py-3 px-5 italic font-serif"
  },
  table: {
    className: "table-auto"
  }
}} />
```

The example above uses [TailwindCSS](https://tailwindcss.com/) classes, replacing the default ones, which you can find below:

```js
const defaultConfigs = {
  code: {
    className: ""
  },
  delimiter: {
    className: ""
  },
  embed: {
    className: "",
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
    className: ""
  }
}
```

So, in theory, any CSS framework can work seamlessly with this library as long as you pass the correct properties.

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
