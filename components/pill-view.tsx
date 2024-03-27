

interface PillProps {
    text: String
}
export const PillView: React.FC<PillProps> = ({text}) => {
    return (
        <li className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-orange-600 dark:bg-orange-400/10 px-3 
                            py-1 text-xs font-medium leading-5 text-white dark:text-orange-300">{text}
            </div>
        </li>
    )
}
