interface IMainLayoutProps {
    children: React.ReactNode
}

const Mainlayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="flex h-screen w-screen flex-col items-center mt-5">
            {children}
        </div>
    )
}

export default Mainlayout
