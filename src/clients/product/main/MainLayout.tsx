

interface IMainLayoutProps {
    children: React.ReactNode
}

const Mainlayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="flex w-full h-full">
            {children}
        </div>
    )
}

export default Mainlayout
