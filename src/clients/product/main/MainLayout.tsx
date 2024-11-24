

interface IMainLayoutProps {
    children: React.ReactNode
}

const Mainlayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="flex h-screen">

            {children}
        </div>
    )
}

export default Mainlayout
