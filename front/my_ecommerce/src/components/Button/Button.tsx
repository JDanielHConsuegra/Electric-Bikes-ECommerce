import Link from "next/link"

interface IButtonProps {
    content: string;
    href: string;
}

export const Button: React.FC<IButtonProps> = ({content, href}) => {
    return (
        <Link href={href}>
              <p className='bg-green-500 p-2 font-bold  text-white w-fit m-auto hover:bg-green-600 transition-all duration-300 cursor-pointer'>
                {content}
              </p>
            </Link>
    )
}