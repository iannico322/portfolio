
import './card.css'
function ProjectCard() {
  return (
    <a href='#' className="ProjectCard">
  <div className="main-content">
    <div className="header">
  <span>Deployed: </span>
  <span>29-June-2023</span>
</div>

  </div>

<p className=" text-2xl font-bold truncate">Different ways to use CSS in React sd ways to use CSS in React sdways to use CSS in React sdways to use CSS in React sd</p>
<div className=" flex gap-2 flex-wrap uppercase font-semibold">
  <span className=' px-3 text-xs py-2 bg-primary rounded-full'>React</span>
  <span className='  px-3 text-xs py-2 bg-primary rounded-full'>Css</span>
</div>
<p className=' text text-sm mt-5 text-accent-foreground/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit quae tempora v</p>
</a>
  )
}

export default ProjectCard