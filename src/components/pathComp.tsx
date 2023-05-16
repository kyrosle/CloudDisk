interface PathProp {
  path: string;
}
const PathComp: React.FunctionComponent<PathProp> = ({ path }) => {
  return (
    // "/Home/D1/D2" 
    <div style={{ textAlign: 'center' }}>
      <div className="text-sm breadcrumbs" style={{ display: 'inline-block' }} >
        <ul>
          <li><a>Home</a></li>
          <li><a>Documents</a></li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  )
}

export default PathComp;