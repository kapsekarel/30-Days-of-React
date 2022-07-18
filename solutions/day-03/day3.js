      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')
      // JSX element, header
      const title = 'Subscribe'
      const subtitle = 'Sign up with your email address to receive news and updates'

      // JSX element, header
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            
          </div>
        </header>
      )

      // JSX element, main
      //const techs = ['HTML', 'CSS', 'JavaScript']
      //const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

      const btn = 'Subscribe'
      const i = ['First name', 'Last name', 'Email']
      //const inputs = i.map((txt) => <input type="text" aria-placeholder={txt} />)
      const inputFName = <input type="text" placeholder={i[0]} />
      const inputLName = <input type="text" placeholder={i[1]} />
      const inputEmail = <input type="email" placeholder={i[2]} />

      // JSX element, main
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              {inputFName}
              {inputLName}
              {inputEmail}
            </p>
            <button type="Submit">{btn}</button>

          </div>
        </main>
      )

     // JSX element, app
      const app = (
        <div className='app gradient'>
          {header}
          {main}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      ReactDOM.render(app, rootElement)