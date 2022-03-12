import hero from '../logo/hero.svg'

function About() {
  return (
    <div className="flex flex-wrap-reverse items-center justify-center md:justify-start md:flex-nowrap lg:justify-start lg:flex-nowrap mx-10 pt-3">
      <div className="grid place-self-center h-4/5 w-max md:w-6/12 md:mt-40 lg:mt-40 lg:w-6/12  rounded-2xl border-solid mt-10 p-5 mx-5 bg-bg-sec space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-baloo2 text-text">
          Hi, I'm Manideep.
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-baloo2 text-text-secondary">
          I'm a web developer from India. I love to code functional and simple
          web apps.
        </h3>
        <button className="hover:bg-backcolor bg-body w-min text-center text-text text-xl hover:text-text-secondary border-2 font-bold border-backcolor px-6 py-2 md:w-min md:text-xl lg:w-min lg:text-2xl lg:px-8 ">
          Projects
        </button>
      </div>
      <div className='flex w-max mt-24 hover:animate-pulse lg:justify-self-end p-5'>
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default About;
