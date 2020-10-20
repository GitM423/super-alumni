import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Super Alumni</title>
        <link rel="stylesheet" href="/style.css" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
