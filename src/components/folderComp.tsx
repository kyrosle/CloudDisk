import { FolderIcon } from "@heroicons/react/24/outline";

const FolderComp: React.FunctionComponent = () => {
  return (
    <div style={{ width: '10vw', height: '10vh', padding: '10px' }}>
      <div style={{ textAlign: 'center' }} >
        < FolderIcon className="h-12 w-12 text-gray-500" style={{ display: 'inline-block' }} />
      </div>
      <span>Folder</span>
    </div>
  )
}

export default FolderComp;