

interface IMainLayoutProps {
    children: React.ReactNode
}

const Mainlayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    )
}

export default Mainlayout
