

import Reveal from '../animation/reveal'
import SlideUp from '../animation/revealUp'
import './card.css'


function ProjectCard({link,img,title,languanges,status}:any) {
  return (
    
    <a href={link} target='_blank' className="ProjectCard relative   w-1/3  max-w-[100%] flex flex-col gap-1    ">
  

  <Reveal>
  <img src={img} className=' CardImage object-cover w-full h-[200px]  ' alt={title} />
  </Reveal>
 <SlideUp>
<p className=" mt-4 text-2xl font-bold truncate">{title}</p>
</SlideUp>
<Reveal>
<div className=" flex gap-2 flex-wrap uppercase font-semibold">
  {languanges?languanges.map((e:any)=>(
    <span className=' px-3 text-xs py-2 bg-primary rounded-full'>{e}</span>
  )):""}
</div>
</Reveal>

<div className="header relative self-end">
      <SlideUp>
        <>
        <span>Status: </span>

        {status=="Active"?
        <span className=' text-green-500'>{status}</span>
        :
        <span className=' text-red-500'>{status}</span>
      }
        
        </>
      
      </SlideUp>

    </div>
</a>
  )
}

export default ProjectCard