export default function Card({data, id, order}) {
  // console.log(id, order)
  const styless = {
    opacity: id - 1 == order ? "1" : "0",
    transition: "all .4s ease",
    transform: id - 1 == order ? "translateX(0)" : order - 1 < 0 && id - 1 == 3 ? "translateX(-100%)" : order - 1 == id - 1 ? "translateX(-100%)" : order + 1 == id - 1 ? "translateX(100%)" : order + 1 == 3 && id - 1 == 0 ?  "translateX(100%)" : "translateX(200%)",
  }
  return (
    <div style={styless} className='absolute'>
    <div className="mb-6">
      <img className="bd-img shadow-xl border-4 rounded-full w-40 h-40 mx-auto object-center object-cover" src={data.image} alt="" />
    </div>
    <h4 className="font-bold text-primary uppercase mb-2">{data.name}</h4>
    <div className="job mb-12">
      {data.title}
    </div>
    <p className='px-24'>
      {data.quote}
    </p>
    <div>
    <i class="text-6xl text-primary fa-solid fa-quote-left"></i>  
    </div>
  </div>
  )
};
