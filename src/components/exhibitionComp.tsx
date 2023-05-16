import FileComp from '@/components/fileComp';
import FolderComp from '@/components/folderComp';

const ExhibitionComp: React.FunctionComponent = () => {
  var a: number[] = new Array();
  for (var i = 0; i < 80; i++) {
    a.push(i);
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', overflowY: 'scroll' }}>
      {a.map((item, index) => {
        if (index & 1) {
          return <FileComp key={index} />;
        } else {
          return <FolderComp key={index} />;
        }
      })}
    </div>
  )
}

export default ExhibitionComp;