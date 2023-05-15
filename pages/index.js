import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Makinda. I'm a software engineer and content writer. You
          can find me on Twitter and GitHub
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://as1.ftcdn.net/v2/jpg/03/92/08/14/1000_F_392081485_LpQQKSy3T5aTQsnTPoAQA6ssc45iKgRW.jpg">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className={"`${utilStyles.headingMd}${utilStyles.padding1px}`"}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
