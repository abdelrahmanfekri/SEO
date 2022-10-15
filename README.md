This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## next-seo
 - [Installation](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#install-next-seo)
 - [SEO config file](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#add-file-next-seoconfigjs-in-the-root-directory-with-this-content)
 - [Override default App component](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#override-default-app-component-in-next-js)
 - [Override default config file](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#override-the-default-seo-config-file-in-each-page)
 - [Video openGraph](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#opengraph-video)
 - [profile openGraph](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#opengraph-profile)
 - [JSON-LD](https://github.com/abdelrahmanfekri/SEO/edit/main/README.md#json-ld-schemaorg)
    - [Recipe](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#recipe)
    - [SiteLinks Search Box](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#sitelinks-search-box)
    - [Corporate Contact](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#corporate-contact)
    - [Local Business](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#local-business)
    - [Logo](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#logo)
    - [Products](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#product)
    - [Social Profile](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#social-profile)
    - [Article](https://github.com/abdelrahmanfekri/SEO/blob/main/README.md#article)
 
## install next-seo
```shell
npm install next-seo
```
### add file "next-seo.config.js" in the root directory with this content
```js
export  default {
   title:"title for website",
   titleTemplate:"Next SEO | %s",
   defaultTitle:'Next SEO',
   description:"description of the website",
   canonical:'https://www.canonical.ie/',
   openGraph: {
      url: 'https://www.url.ie/a',
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      type:  'website',
      locale:  'en_IE',
      url:  'http://localhost:3000',
      site_name:  'SiteName',
    },
   twitter: {
      handle:  '@handle',
      site:  '@site',
      cardType:  'summary_large_image',
      },
   facebook:{
      appId: '1234567890',
      },
   additionalLinkTags:[
      {
      rel: 'icon',
      href: 'https://www.test.ie/favicon.ico',
      },
      {
      rel: 'apple-touch-icon',
      href: 'https://www.test.ie/touch-icon-ipad.jpg',
      sizes: '76x76'
      },
     {
      rel: 'preload',
      href: 'https://www.test.ie/font/sample-font.woof2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
     }]
};
```
### Override default app component in Next js
we can override the default app component in next js by create file "_app.js" then import our default SEO which will be applied for all pages 
```js
import { DefaultSeo } from  'next-seo';
import  SEO  from  '../next-seo.config';

function  MyApp({ Component, pageProps }) {

return (<>
        <DefaultSeo  {...SEO}></DefaultSeo>
        <Component  {...pageProps}  />
        </>)}
        
export  default  MyApp
```

### Override the default SEO config file in each page
```js
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <p>Simple Usage</p>
  </>
);

export default Page;
```
### OpenGraph video
```js
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Video Page Title"
      description="Description of video page"
      openGraph={{
        title: 'Open Graph Video Title',
        description: 'Description of open graph video',
        url: 'https://www.example.com/videos/video-title',
        type: 'video.movie',
        video: {
          // Multiple Open Graph actors is only available in version `7.0.2-canary.35`+ of next
          actors: [
            {
              profile: 'https://www.example.com/actors/@firstnameA-lastnameA',
              role: 'Protagonist',
            },
            {
              profile: 'https://www.example.com/actors/@firstnameB-lastnameB',
              role: 'Antagonist',
            },
          ],
          // Multiple Open Graph directors is only available in version `7.0.2-canary.35`+ of next
          directors: [
            'https://www.example.com/directors/@firstnameA-lastnameA',
            'https://www.example.com/directors/@firstnameB-lastnameB',
          ],
          // Multiple Open Graph writers is only available in version `7.0.2-canary.35`+ of next
          writers: [
            'https://www.example.com/writers/@firstnameA-lastnameA',
            'https://www.example.com/writers/@firstnameB-lastnameB',
          ],
          duration: 680000,
          releaseDate: '2022-12-21T22:04:11Z',
          // Multiple Open Graph tags is only available in version `7.0.2-canary.35`+ of next
          tags: ['Tag A', 'Tag B', 'Tag C'],
        },
        site_name: 'SiteName',
      }}
    />
    <h1>Video Page SEO</h1>
  </>
);

export default Page;
```
### OpenGraph profile
```js
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      openGraph={{
        title: 'Open Graph Profile Title',
        description: 'Description of open graph profile',
        url: 'https://www.example.com/@firstlast123',
        type: 'profile',
        profile: {
          firstName: 'First',
          lastName: 'Last',
          username: 'firstlast123',
          gender: 'female',
        },
        images: [
          {
            url: 'https://www.test.ie/images/profile.jpg',
            width: 850,
            height: 650,
            alt: 'Profile Photo',
          },
        ],
      }}
    />
    <p>Profile</p>
  </>
);

export default Page;
```
## JSON-LD (Schema.org)

### Recipe
```js
import { RecipeJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Recipe JSON-LD</h1>
    <RecipeJsonLd
      name="Party Coffee Cake"
      description="This coffee cake is awesome and perfect for parties."
      datePublished="2018-03-10"
      authorName={['Jane Blogs', 'Mary Stone']}
      prepTime="PT20M"
      cookTime="PT30M"
      totalTime="PT50M"
      keywords="cake for a party, coffee"
      yields="10"
      category="Dessert"
      cuisine="American"
      calories={270}
      images={[
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ]}
      ingredients={[
        '2 cups of flour',
        '3/4 cup white sugar',
        '2 teaspoons baking powder',
        '1/2 teaspoon salt',
        '1/2 cup butter',
        '2 eggs',
        '3/4 cup milk',
      ]}
      instructions={[
        {
          name: 'Preheat',
          text: 'Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.',
          url: 'https://example.com/party-coffee-cake#step1',
          image: 'https://example.com/photos/party-coffee-cake/step1.jpg',
        },
      ]}
      aggregateRating={{
        ratingValue: '5',
        ratingCount: '18',
      }}
      video={{
        name: 'How to make a Party Coffee Cake',
        description: 'This is how you make a Party Coffee Cake.',
        contentUrl: 'http://www.example.com/video123.mp4',
        embedUrl: 'http://www.example.com/videoplayer?video=123',
        uploadDate: '2018-02-05T08:00:00+08:00',
        duration: 'PT1M33S',
        thumbnailUrls: [
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ],
        expires: '2019-02-05T08:00:00+08:00',
        hasPart: {
          '@type': 'Clip',
          name: 'Preheat oven',
          startOffset: 30,
          url: 'http://www.example.com/example?t=30',
        },
        watchCount: 2347,
        publication: {
          '@type': 'BroadcastEvent',
          isLiveBroadcast: true,
          startDate: '2020-10-24T14:00:00+00:00',
          endDate: '2020-10-24T14:37:14+00:00',
        },
        regionsAllowed: ['IT', 'NL'],
      }}
    />
  </>
);

export default Page;
```
###  Sitelinks Search Box
```js
import { SiteLinksSearchBoxJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Sitelinks Search Box JSON-LD</h1>
    <SiteLinksSearchBoxJsonLd
      url="https://www.example.com"
      potentialActions={[
        {
          target: 'https://query.example.com/search?q',
          queryInput: 'search_term_string',
        },
        {
          target: 'android-app://com.example/https/query.example.com/search/?q',
          queryInput: 'search_term_string',
        },
      ]}
    />
  </>
);

export default Page;
```
###  Corporate Contact
```js
import { CorporateContactJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Corporate Contact JSON-LD</h1>
    <CorporateContactJsonLd
      url="http://www.your-company-site.com"
      logo="http://www.example.com/logo.png"
      contactPoint={[
        {
          telephone: '+1-401-555-1212',
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish', 'French'],
        },
        {
          telephone: '+1-877-746-0909',
          contactType: 'customer service',
          contactOption: 'TollFree',
          availableLanguage: 'English',
        },
        {
          telephone: '+1-877-453-1304',
          contactType: 'technical support',
          contactOption: 'TollFree',
          areaServed: ['US', 'CA'],
          availableLanguage: ['English', 'French'],
        },
      ]}
    />
  </>
);

export default Page;
```
### Local Business
```js
<LocalBusinessJsonLd
  type="Store"
  id="http://davesdeptstore.example.com"
  name="Dave's Department Store"
  description="Dave's latest department store in San Jose, now open"
  url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
  telephone="+14088717984"
  address={{
    streetAddress: '1600 Saratoga Ave',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    postalCode: '95129',
    addressCountry: 'US',
  }}
  geo={{
    latitude: '37.293058',
    longitude: '-121.988331',
  }}
  images={[
    'https://example.com/photos/1x1/photo.jpg',
    'https://example.com/photos/4x3/photo.jpg',
    'https://example.com/photos/16x9/photo.jpg',
  ]}
  sameAs={[
    'www.company-website-url1.dev',
    'www.company-website-url2.dev',
    'www.company-website-url3.dev',
  ]}
  openingHours={[
    {
      opens: '08:00',
      closes: '23:59',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      validFrom: '2019-12-23',
      validThrough: '2020-04-02',
    },
    {
      opens: '14:00',
      closes: '20:00',
      dayOfWeek: 'Sunday',
      validFrom: '2019-12-23',
      validThrough: '2020-04-02',
    },
  ]}
  rating={{
    ratingValue: '4.5',
    ratingCount: '2',
  }}
  review={[
    {
      author: 'John Doe',
      datePublished: '2006-05-04',
      name: 'A masterpiece of literature',
      reviewBody:
        'I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.',
      reviewRating: {
        bestRating: '5',
        worstRating: '1',
        reviewAspect: 'Ambiance',
        ratingValue: '4',
      },
    },
    {
      author: 'Bob Smith',
      datePublished: '2006-06-15',
      name: 'A good read.',
      reviewBody: "Catcher in the Rye is a fun book. It's a good book to read.",
      reviewRating: {
        ratingValue: '4',
      },
    },
  ]}
  makesOffer={[
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '1000-10000',
      },
      itemOffered: {
        name: 'Motion Design Services',
        description:
          'We are the expert of animation and motion design productions.',
      },
    },
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'EUR',
        price: '2000-10000',
      },
      itemOffered: {
        name: 'Branding Services',
        description:
          'Real footage is a powerful tool when it comes to show what the business is about. Can be used to present your company, show your factory, promote a product packshot, or just tell any story. It can help create emotional links with your audience by showing punchy images.',
      },
    },
  ]}
  areaServed={[
    {
      geoMidpoint: {
        latitude: '41.108237',
        longitude: '-80.642982',
      },
      geoRadius: '1000',
    },
    {
      geoMidpoint: {
        latitude: '51.108237',
        longitude: '-80.642982',
      },
      geoRadius: '1000',
    },
  ]}
  action={{
    actionName: 'potentialAction',
    actionType: 'ReviewAction',
    target: 'https://www.example.com/review/this/business',
  }}
/>
```
### Logo
```js
import { LogoJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Logo JSON-LD</h1>
    <LogoJsonLd
      logo="http://www.your-site.com/images/logo.jpg"
      url="http://www.your-site.com"
    />
  </>
);

export default Page;
```
### Product
```js
import { ProductJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Product JSON-LD</h1>
    <ProductJsonLd
      productName="Executive Anvil"
      images={[
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ]}
      description="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
      brand="ACME"
      color="blue"
      manufacturerName="Gary Meehan"
      manufacturerLogo="https://www.example.com/photos/logo.jpg"
      material="steel"
      slogan="For the business traveller looking for something to drop from a height."
      disambiguatingDescription="Executive Anvil, perfect for the business traveller."
      releaseDate="2014-02-05T08:00:00+08:00"
      productionDate="2015-02-05T08:00:00+08:00"
      purchaseDate="2015-02-06T08:00:00+08:00"
      award="Best Executive Anvil Award."
      reviews={[
        {
          author: 'Jim',
          datePublished: '2017-01-06T03:37:40Z',
          reviewBody:
            'This is my favorite product yet! Thanks Nate for the example products and reviews.',
          name: 'So awesome!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        },
      ]}
      aggregateRating={{
        ratingValue: '4.4',
        reviewCount: '89',
      }}
      offers={[
        {
          price: '119.99',
          priceCurrency: 'USD',
          priceValidUntil: '2020-11-05',
          itemCondition: 'https://schema.org/UsedCondition',
          availability: 'https://schema.org/InStock',
          url: 'https://www.example.com/executive-anvil',
          seller: {
            name: 'Executive Objects',
          },
        },
        {
          price: '139.99',
          priceCurrency: 'CAD',
          priceValidUntil: '2020-09-05',
          itemCondition: 'https://schema.org/UsedCondition',
          availability: 'https://schema.org/InStock',
          url: 'https://www.example.ca/executive-anvil',
          seller: {
            name: 'Executive Objects',
          },
        },
      ]}
      mpn="925872"
    />
  </>
);

export default Page;
```
### Social Profile
```js
import { SocialProfileJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Social Profile JSON-LD</h1>
    <SocialProfileJsonLd
      type="Person"
      name="your name"
      url="http://www.your-site.com"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
      ]}
    />
  </>
);

export default Page;
```
### Article
```js
import { ArticleJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Article JSON-LD</h1>
    <ArticleJsonLd
      url="https://example.com/article"
      title="Article headline"
      images={[
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ]}
      datePublished="2015-02-05T08:00:00+08:00"
      dateModified="2015-02-05T09:00:00+08:00"
      authorName={[
        {
          name: 'Jane Blogs',
          url: 'https://example.com',
        },
        {
          name: 'Mary Stone',
          url: 'https://example.com',
        },
      ]}
      publisherName="Gary Meehan"
      publisherLogo="https://www.example.com/photos/logo.jpg"
      description="This is a mighty good description of this article."
    />
  </>
);

export default Page;
```

