import Head from 'next/head'
import PostalAddress from 'i18n-postal-address'

const myAddress = new PostalAddress()

const myAddressPersonal = new PostalAddress()

myAddressPersonal
  .setAddress1('Rua do Pastel, 19')
  .setCity('Aveiro')
  .setCountry('Brazil')
  .setFirstName('John')
  .setHonorific('Mr.')
  .setLastName('Pestana')
  .setPostalCode('2700-242')
  .setSecondName('Lopes')
  .setOutputFormat('array')
  .setFormat({
    country: 'AR',
    type: 'personal',
  })

const output = myAddressPersonal.toString()

const Home = () => (
  <div className="container">
    <Head>
      <title>Crash Test Dummy</title>
    </Head>
    <main>
    <h1 className="title">
      Crash Test Dummy
    </h1>
    <p className="description">
      i18n-postal-address
    </p>
    <article>
      <pre>
        {output}
      </pre>
    </article>
    </main>
    <footer>
      Hello there !
    </footer>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      .title {
        text-align: center;
      }
      pre {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px;
        margin-top: 3rem;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
