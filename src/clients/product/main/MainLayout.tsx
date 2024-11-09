interface IMainLayoutProps {
    children: React.ReactNode
}

const Mainlayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="flex h-screen w-screen flex-col items-center">
            {children}
        </div>
    )
}

export default Mainlayout
