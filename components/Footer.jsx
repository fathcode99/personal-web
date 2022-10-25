import Image from "next/image"

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-between md:px-16 sm:px-8 py-2 items-center mt-12 font-Roboto'>
      <div className="flex justify-start gap-4 items-center">
        <div className="mr-4">Friendship</div>
        <div className="bg-white rounded-full">
          <img src="/instagram_black_logo_icon_147122.svg" alt="icon-ig" className="h-6 w-6"/>
        </div>
        <div className="bg-white rounded-full">
          <img src="/facebook_black_logo_icon_147136.png" alt="icon-fb"  className="h-6 w-6"/>
        </div>
        <div >
          <img src="/twitter_black_logo_icon_147062.svg" alt="icon-tw" className="h-6 w-6 bg-white rounded-full border border-white"/>
        </div>
      </div>
      <div className="font-light">Copyright 2022 @creative.dev</div>
    </div>
  )
}

export default Footer
