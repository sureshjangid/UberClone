import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
    const headerMenu = [
        {
            id:1,
            name:'Ride',
            icon:'/taxi.jpeg'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.jpeg'
        },
    ]
  return (
    <div className="p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between">
        <div className="flex gap-24 items-center">
            <Image src={'/logo.png'} width={70} height={70} alt="logo"/>
            <div className="flex gap-6 items-center">
                {headerMenu?.map((a,i)=>{
                    return (
                        <div className="flex gap-2 items-center">
                            <Image src={a.icon} width={17} height={17} alt="icon"/>
                            <h2 className="text-[14px] font-medium">{a.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header