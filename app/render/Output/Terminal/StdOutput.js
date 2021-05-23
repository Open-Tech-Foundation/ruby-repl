import * as Anser from 'anser';

export default function StdOutput({ output }) {
  if (!output) return null;
  console.log(output);
  const htmlStr = Anser.ansiToHtml(output);
  const markupStr = { __html: htmlStr };
  return <div dangerouslySetInnerHTML={markupStr} />;
}
