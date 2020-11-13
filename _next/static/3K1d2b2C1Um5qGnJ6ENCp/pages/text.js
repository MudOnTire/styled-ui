(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},"1LyQ":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),c=n("ZVZ0"),l=(i.a.createElement,{}),b="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(b,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Text"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Text")," is used for rendering text and paragraphs."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Text from '@trendmicro/react-styled-ui/Text';\n// or\nimport { Text } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("h3",null,"Sizes"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the corresponding font size and line height. You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"4xl"),", ",Object(c.b)("inlineCode",{parentName:"p"},"3xl"),", ",Object(c.b)("inlineCode",{parentName:"p"},"2xl"),", ",Object(c.b)("inlineCode",{parentName:"p"},"xl"),", ",Object(c.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(c.b)("inlineCode",{parentName:"p"},"md"),", ",Object(c.b)("inlineCode",{parentName:"p"},"sm"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"xs"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <Text size="4xl">\n    Four Extra Large (4XL)\n  </Text>\n  <Text size="3xl">\n    Three Extra Large (3XL)\n  </Text>\n  <Text size="2xl">\n    Two Extra Large (2XL)\n  </Text>\n  <Text size="xl">\n    Extra Large (XL)\n  </Text>\n  <Text size="lg">\n    Large (LG)\n  </Text>\n  <Text size="md">\n    Medium (MD)\n  </Text>\n  <Text size="sm">\n    Small (SM)\n  </Text>\n  <Text size="xs">\n    Extra Small (XS)\n  </Text>\n</Stack>\n')),Object(c.b)("h3",null,"Heading text"),Object(c.b)("p",null,"You can format the ",Object(c.b)("inlineCode",{parentName:"p"},"Text")," component by passing ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop and ",Object(c.b)("inlineCode",{parentName:"p"},"fontWeight")," to display a formatted Heading."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <Text size="sm" fontWeight="semibold">Heading 1</Text>\n  <Text size="md" fontWeight="semibold">Heading 2</Text>\n  <Text size="lg" fontWeight="semibold">Heading 3</Text>\n  <Text size="xl" fontWeight="semibold">Heading 4</Text>\n  <Text size="2xl" fontWeight="semibold">Heading 5</Text>\n  <Text size="3xl" fontWeight="semibold">Heading 6</Text>\n  <Text size="4xl" fontWeight="semibold">Heading 7</Text>\n</Stack>\n')),Object(c.b)("h3",null,"Formatting text"),Object(c.b)("p",null,"You can format the ",Object(c.b)("inlineCode",{parentName:"p"},"Text")," component by passing ",Object(c.b)("inlineCode",{parentName:"p"},"fontSize"),", ",Object(c.b)("inlineCode",{parentName:"p"},"lineHeight"),", or other style props."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const { colorMode } = useColorMode();\n  const bg = colorMode === \'dark\' ? \'gray:80\' : \'gray:20\';\n\n  return (\n    <Stack direction="column" spacing="4x">\n      <Text bg={bg} lineHeight="1" px="2x">\n        This is exactly the same height as the font size\n      </Text>\n      <Text bg={bg} lineHeight="normal" px="2x">\n        A normal line height is about 20% larger than the font size\n      </Text>\n      <Text bg={bg} lineHeight="base" px="2x">\n        For accessibility concerns, use a minimum value of 1.5 for <code>line-height</code> for main paragraph content\n      </Text>\n    </Stack>\n  );\n}\n')),Object(c.b)("h3",null,"Text truncation"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Text\n  overflow="hidden"\n  textOverflow="ellipsis"\n  whiteSpace="nowrap"\n  width="100%"\n>\n  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n</Text>\n')),Object(c.b)("h3",null,"The ",Object(c.b)("inlineCode",{parentName:"h3"},"as")," prop"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const TextBlock = (props) => {\n  const { colorMode } = useColorMode();\n  const borderColor = colorMode === \'dark\' ? \'gray:70\' : \'gray:20\';\n\n  return (\n    <Box px="3x" py="2x" border={1} borderColor={borderColor}>\n      <Text {...props} />\n    </Box>\n  );\n};\n\nfunction Example() {\n  return (\n    <Stack direction="column" spacing="4x" shouldWrapChildren>\n      <TextBlock as="i">Italic</TextBlock>\n      <TextBlock as="u">Underline</TextBlock>\n      <TextBlock as="abbr">Abbreviation or acronym</TextBlock>\n      <TextBlock as="cite">Citation</TextBlock>\n      <TextBlock as="del">Deleted</TextBlock>\n      <TextBlock as="em">Emphasis</TextBlock>\n      <TextBlock as="ins">Inserted</TextBlock>\n      <TextBlock as="kbd">Ctrl + C</TextBlock>\n      <TextBlock as="mark">Highlighted</TextBlock>\n      <TextBlock as="s">Strikethrough</TextBlock>\n      <TextBlock as="samp">Sample</TextBlock>\n      <TextBlock as="sup">Superscript</TextBlock>\n      <TextBlock as="sub">Subscript</TextBlock>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Text")," composes the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'4xl'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'3xl'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'2xl'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'xl'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'xs'"))))))}p.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return x}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return(a.a.createElement(b.Provider,{value:t},e.children))},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"===typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},heL0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/text",function(){return n("1LyQ")}])}},[["heL0",0,1]]]);