import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return <div className="text-color-primary flex flex-col justify-center items-center mt-8">
        <h5 className="text-2xl font-bold">WELCOME, {user?.name}</h5>
        <Image src={user?.image} width={250} height={250}/>
        <div className="py-8 flex flex-wrap gap-4">
            <Link href='/users/dashboard/collection' className="bg-color-accent text-color-dark font-bold py-3 text-xl px-4">My Collection</Link>
            <Link href='/users/dashboard/comment' className="bg-color-accent text-color-dark font-bold py-3 text-xl px-4">My Comment</Link>
        </div>
    </div>
}

export default Page