
import './card.css'
function ProjectCard({link,img,title,languanges,dateDeploy}:any) {
  return (
    <a href={link} target='_blank' className="  w-1/3  max-w-[90%] relative ProjectCard flex flex-col gap-1 hover:translate-y-[-10px] duration-700 transition-all">
  

  
  <img src={img} className=' CardImage object-cover w-full h-[200px]  ' alt={title} />

<p className=" mt-4 text-2xl font-bold truncate">{title}</p>
<div className=" flex gap-2 flex-wrap uppercase font-semibold">
  {languanges?languanges.map((e:any)=>(
    <span className=' px-3 text-xs py-2 bg-primary rounded-full'>{e}</span>
  )):""}
</div>

<div className="header relative self-end">
      <span>Deployed: </span>
      <span>{dateDeploy}</span>
    </div>

</a>
  )
}

export default ProjectCard