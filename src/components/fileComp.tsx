import { DocumentIcon } from "@heroicons/react/24/outline";

interface FileCompProp {
  key: number
}

const FileComp: React.FunctionComponent<FileCompProp> = ({ key }) => {
  return (
    <div key={key} style={{ width: '10vw', height: '10vh', padding: '10px' }}>
      <div style={{ textAlign: 'center' }} >
        <DocumentIcon className="h-12 w-12 text-gray-500" style={{ display: 'inline-block' }} />
      </div>
      <span>File</span>
    </div>
  )
}

export default FileComp;

