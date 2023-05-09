import { FolderIcon } from "@heroicons/react/24/outline";

interface FolderCompProp {
  key: number
}

const FolderComp: React.FunctionComponent<FolderCompProp> = ({ key }) => {
  return (
    <div key={key} style={{ width: '10vw', height: '10vh', padding: '10px' }}>
      <div style={{ textAlign: 'center' }} >
        < FolderIcon className="h-12 w-12 text-gray-500" style={{ display: 'inline-block' }} />
      </div>
      <span>Folder</span>
    </div>
  )
}

export default FolderComp;