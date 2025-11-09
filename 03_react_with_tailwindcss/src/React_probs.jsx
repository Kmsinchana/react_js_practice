

//destucturing of object props
//reusing the components with react prons
function React_probs({imagesrc,decription,website_link}){
    return (
        <div className='flex flex-col border-4 items-center border-blue-300 rounded-xl basis-[48%] hover:shadow-xl hover:scale-105 transition-transform duration-300'>
          <img src={imagesrc} alt="no image found" className='justify-self-center w-20 h-20' />
          <p>{decription}</p>
          <a href={website_link} className='text-blue-500 underline mt-2 hover:text-blue-700'>know more</a>
        </div>
    )
} 

export default React_probs;