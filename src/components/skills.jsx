import { SkillData } from "../helpers/skillData";

const Skills = () => {
    
    const remove = () => {
        const SkillItems = document.querySelector('.skillItems')
        SkillItems.style.animationPlayState = 'paused';
    }
    
    const add = () => {
        const SkillItems = document.querySelector('.skillItems')
        SkillItems.style.animationPlayState = 'running';
    }

  return (
    <div
      id="skills"
      className="flex items-center w-full h-80 justify-center mx-3 self-center pt-20 mt-5"
    >
      <h3 className=" inline-block text-3xl font-baloo2 text-text shadow-lg shadow-backcolor rounded-lg px-2 self-start">
          Skills
        </h3>
      <div className="skillItems animate flex justify-center text-center gap-5 item-center" onMouseOver={remove} onMouseLeave={add}>
        {SkillData.map((item, key) => {
          return (
            <div className="flex justify-center flex-col items-center bg-bg-sec w-36 h-36 rounded-md" key={key}>
              {item.logo}
              <p className="text-xl font-baloo2 text-text-secondary">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
