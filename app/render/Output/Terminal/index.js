import OutputBox from './OutputBox';

export default function Terminal({ data }) {
  return data.map((output, i) => <OutputBox key={i} output={output} />);
}
