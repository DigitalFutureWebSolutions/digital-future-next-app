// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="UTF-8" />
                    <meta name="language" content="en"></meta>
                    {/* Add your global stylesheets here */}
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/venobox.min.css" />
                    <link rel="stylesheet" href="/assets/css/animate.min.css" />
                    <link rel="stylesheet" href="/assets/css/keyframe-animation.css" />
                    <link rel="stylesheet" href="/assets/css/odometer.min.css" />
                    <link rel="stylesheet" href="/assets/css/nice-select.css" />
                    <link rel="stylesheet" href="/assets/css/swiper.min.css" />
                    <link rel="stylesheet" href="/assets/css/main.css" />
                    <link rel="stylesheet" href="/assets/css/carouselTicker.css" />
                    <link rel="stylesheet" href="/assets/css/main.css.map" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
