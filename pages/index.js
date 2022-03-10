import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Huang. I’m a developer. You can contact me on <a href="#">Skype</a>.</p>
        <p>This is a my personal website </p>
      </section>
    </Layout>
  )
}
