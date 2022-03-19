import { Images } from "../helpers/imageData";

function Projects() {
  return (
    <div id="projects" className="flex items-center justify-center mx-5 lg:w-3/4 self-center pt-3">
      <section className="w-full border-solid mt-10 p-5 mx-5 bg-bg-sec rounded-2xl space-y-8">
        <h3 className=" inline-block text-3xl font-baloo2 text-text shadow-lg shadow-backcolor">
          Projects
        </h3>
        <p className="text-xl font-baloo2 text-text-secondary">
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {Images.map((image) => {
            return (
              <img
                src={image}
                className="w-full bg-nav h-36 opacity-70 lg:h-72 object-cover hover:opacity-100 hover:shadow-lg rounded-xl hover:shadow-backcolor"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
