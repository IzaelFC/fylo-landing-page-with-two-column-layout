export default function App() {
  return (
    <div className="text-[--very-dark-blue] font-['Open_sans'] sm:text-base text-sm">
      <header className="flex justify-between lg:p-16 p-5">
        <img className="max-w-[30%]" src="src/assets/images/logo.svg" alt="" />
        
        <div className="flex lg:gap-14 sm:gap-8 gap-5">
          <a className="hover:text-[--very-dark-blue] my-auto" href="">Features</a>
          <a className="hover:text-[--very-dark-blue] my-auto" href="">Team</a>
          <a className="hover:text-[--very-dark-blue] my-auto" href="">Sign In</a>
        </div>
      </header>

      {/* primeiro */}
      <div className="flex sm:flex-row flex-col sm:text-left text-center lg:px-20 px-5 mb-20">
        <div className="my-auto sm:space-y-12 space-y-5">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>

          <div className="space-y-5">
            <div className="flex lg:flex-row flex-col gap-5">
              <input id="input" type="email" placeholder="Enter your email..." />
              <button onClick={verifyEmail}>Get Started</button>
            </div>
            <span id="email"></span>
          </div>
        </div>

        <img className="sm:order-last order-first sm:mb-0 m-5" src="src/assets/images/illustration-1.svg" alt="" />
      </div>

      {/* segundo */}
      <div className="flex lg:flex-row flex-col lg:p-20 px-5 py-10">
        <div className="my-auto sm:space-y-12 space-y-5">
          <div className="sm:space-y-5 space-y-3">
            <h1 className="sm:text-center lg:text-left text-center">Stay productive, wherever you are</h1>
          
            <p className="sm:mr-0 lg:mr-40 sm:text-center lg:text-left">
              Never let location be an issue when accessing your files. Fylo has you
              covered for all of your file storage needs.
            </p>
          
            <p className="sm:mr-0 lg:mr-40 sm:pb-5 sm:text-center lg:text-left">
              Securely share files and folders with friends, family and colleagues for
              live collaboration. No email attachments required!
            </p>
            
            <div className="lg:block flex">
              <a className="mx-auto hover:text-[--moderate-cyan-hover] text-[--moderate-cyan] border-b hover:border-[--moderate-cyan-hover] border-[--moderate-cyan] py-1 pr-6 a_image" href="">See how Fylo works</a>
            </div>
          </div>

          <div className="sm:w-80 w-64 lg:text-base text-sm sm:p-5 p-3 sm:space-y-5 space-y-3 shadow-[0px_0px_8px_4px] lg:mx-0 mx-auto shadow-red-100 rounded">
            <img src="src/assets/images/icon-quotes.svg" alt="" />
          
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since
              making the switch our team has become a well-oiled collaboration machine.
            </p>
          
            <div className="flex gap-2">
              <img className="w-10 h-10 rounded-full" src="src/assets/images/avatar-testimonial.jpg" alt="" />
            
              <div>
                <h2>Kyle Burton</h2>
                <span className="text-xs">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>

        <img className="lg:order-last order-first sm:mx-auto lg:mx-0" src="src/assets/images/illustration-2.svg" alt="" />
      </div>

      {/* early access */}
      <div className="sm:flex gap-10 bg-[--desaturated-blue] sm:text-left text-center lg:p-20 py-10 p-5 text-white">
        <div className="sm:w-[50%] space-y-5 sm:mb-0 mb-5">
          <h1>Get early access today</h1>
          
          <p>
            It only takes a minute to sign up and our free starter tier is extremely generous.
            If you have any questions, our support team would be happy to help you.
          </p>
        </div>

        <div className="sm:w-[60%] md:w-[80%] lg:w-[60%] my-auto space-y-5 sm:px-5 md:pl-5 lg:pl-20 px-14">
          <input id="input2" className="w-full text-sm py-3 border-0 outline-none focus:ring-1 invalid:ring-red-300 focus:ring-purple-300 text-black shadow-lg rounded" type="text" placeholder="email@example.com" />
          <p className="text-red-300 text-xs" id="email2"></p>
          <button onClick={verifyEmail2} className="py-3">Get Started For Free</button>
        </div>
      </div>

      {/* footer */}
      <footer className="sm:flex sm:space-y-0 space-y-10 relative justify-between bg-[--very-dark-blue] sm:px-10 md:px-20 sm:py-28 py-16 px-5 text-white">
        <img className="absolute top-0 mt-12 logo-white" src="src/assets/images/logo.svg" alt="" />
        
        <div className="space-y-5">
          <p className="flex gap-5"><img className="my-auto" src="src/assets/images/icon-phone.svg" alt="" />Phone: +1-543-123-4567</p>
          <p className="flex gap-5"><img className="my-auto" src="src/assets/images/icon-email.svg" alt="" />example@fylo.com</p>
        </div>
        
        <div className="flex flex-col gap-5">
          <a href="">About Us</a>
          <a href="">Jobs</a>
          <a href="">Press</a>
          <a href="">Blog</a>
        </div>

        <div className="flex flex-col gap-5">
          <a href="">Contact Us</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>

        {/* redes sociais */}
        <div className="h-8 gap-3 flex justify-center">
          <a className="group" href="https://facebook.com" target="_blank" rel="noreferrer" >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a className="group" href="https://twitter.com" target="_blank" rel="noreferrer" >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>

          <a className="group" href="https://instagram.com" target="_blank" rel="noreferrer" >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </footer>
    </div>
  )
}

function verifyEmail() {
  var email = document.getElementById('input').value
  
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById('email').innerHTML = 'Valid email'
    document.getElementById('email').className = 'mb-5 text-emerald-300 text-xs'
    return (true)
  }
  
  document.getElementById('email').innerHTML = 'Please check your email'
  document.getElementById('email').className = 'mb-5 text-red-300 text-xs'
  return (false)
}


function verifyEmail2() {
  var email = document.getElementById('input2').value
  
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById('email2').innerHTML = 'Valid email'
    document.getElementById('email2').className = 'text-emerald-300 text-xs'
    return (true)
  }
  
  document.getElementById('email2').innerHTML = 'Please check your email'
  document.getElementById('email2').className = 'text-red-300 text-xs'
  return (false)
}