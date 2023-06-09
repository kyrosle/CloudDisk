import ExhibitionComp from '@/components/exhibitionComp';
import MenuComp from '@/components/menuComp';
import PathComp from '@/components/pathComp';
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <h1>
        <div>
          <PathComp path='xxxxx' />
          <div className="flex w-full"  >
            <div className="bg-base-300 rounded-box place-items-center" style={{ height: '71vh', width: "20vw" }}>
              <MenuComp />
            </div>
            <div className="divider divider-horizontal" />
            <div className="card bg-base-300 rounded-box" style={{ height: '71vh', width: '82vw' }}>
              <ExhibitionComp />
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}
