// our-domain.com/kenyatimes/worldnews

import Head from 'next/head'

const worldnews = () => {
  return (
    <div>
      <Head>
        <title>Kenya Times</title>
        <meta name="Keywords" content="news report" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <section>
          <p>Aljazeera live news coverage</p>
        <div class="column" class="row">
          <iframe
            width="900"
            height="540"
            src="https://www.youtube.com/embed/-upyPouRrB8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column" class="row">
        <p>DW live news coverage</p>
          <iframe
            width="900"
            height="540"
            src="https://www.youtube.com/embed/NjugILSG_Wo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="column" class="row">
        <p>France 24 live news coverage</p>
          <iframe
            width="900"
            height="540"
            src="https://www.youtube.com/embed/aHh8rA0hks8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <article></article>
        <aside>
       
        </aside>
      </section>
      </div>
  );
};

export default worldnews;
