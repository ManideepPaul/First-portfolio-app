import { Images } from "../helpers/imageData";

function Projects() {
  return (
    <div
      id="projects"
      className="flex items-center w-full justify-center mx-3 lg:w-3/4 self-center pt-3"
    >
      <section className="w-full border-solid mt-10 p-5 mx-5 bg-bg-sec rounded-2xl space-y-8">
        <h3 className=" inline-block text-3xl font-baloo2 text-text shadow-lg shadow-backcolor rounded-lg px-2">
          Projects
        </h3>
        <p className="text-xl font-baloo2 text-text-secondary">
          A small gallery of recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
          {Images.map((image, key) => {
            return (
              <div className="project hover:scale-110 hover:z-auto transition duration-500 hover:shadow-backcolor hover:shadow-lg text-center rounded-xl">
                <a href={image.link} target="_blank" className="">
                  <img
                    src={image.image}
                    key={key}
                    className="w-full bg-nav h-36 opacity-70 lg:h-72 object-cover hover:opacity-100 rounded-xl"
                  />
                  <p className="name w-full text-2xl font-baloo2 text-text pt-2">{image.name}</p>
                  <p className="techStack w-full text-xl font-bold font-baloo2 inline-block text-text py-1">{image.tech}</p>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
