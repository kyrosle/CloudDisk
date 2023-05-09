import FileComp from '@/components/fileComp';
import FolderComp from '@/components/folderComp';
import Head from 'next/head'

export default function Index() {
  var a: number[] = new Array();
  for (var i = 0; i < 50; i++) {
    a.push(i);
  }
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <h1>
        <div style={{ width: "95vw", height: "80vh" }}>
          <div className="flex w-full" style={{ height: "80vh" }} >
            <div className="bg-base-300 rounded-box place-items-center" style={{ width: "10vw", overflowY: 'scroll' }}>
              <ul className="menu">
                {a.map((item, index) => <li key={index}><a>Item {item}</a></li>)}
              </ul>
            </div>
            <div className="divider divider-horizontal" />
            <div className="card bg-base-300 rounded-box" style={{ height: '80vh', width: '80vw' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
                {a.map((item, index) => <FileComp key={index} />)}
                {a.map((item, index) => <FolderComp key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}
