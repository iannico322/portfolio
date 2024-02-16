
function SocialLinks({icon,color}:any) {
  return (
    <section className="flex justify-center items-center">
    <div
      
      className={`group flex justify-center p-2 hover:rounded-md drop-shadow-xl bg-[${color}] from-gray-800 to-black text-white font-semibold rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] `}
    >
      {icon}
  
    </div>
  </section>
  

  

  )
}

export default SocialLinks