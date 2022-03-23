import { Images } from "../helpers/imageData";

function Projects() {
  return (
    <div
      id="projects"
      className="flex items-center w-full justify-center mx-3 lg:w-3/4 self-center pt-3"
    >
      <section className="w-full border-solid mt-10 p-5 mx-5 bg-bg-sec rounded-2xl space-y-8">
        <h3 className=" inline-block text-3xl font-baloo2 text-text shadow-lg shadow-backcolor">
          Projects
        </h3>
        <p className="text-xl font-baloo2 text-text-secondary">
          A small gallery of recent projects chosen by me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {Images.map((image, key) => {
            return (
              <img
                src={image}
                key={key}
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
