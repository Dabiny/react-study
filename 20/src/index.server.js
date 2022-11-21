import ReactDOMServer from 'react-dom/server';

// 서버 사이드 렌더링용 엔트리 만들기 서버가 html을 만드는 과정
const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering!</div>
);

console.log(html);

