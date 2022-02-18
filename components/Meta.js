import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico"></link>

        <title>{title}</title>
      </Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </>
  );
};

Meta.defaultProps = {
  title: "RampUp",
  keywords: "RampUp",
  description: "RampUp Project",
};

export default Meta;
