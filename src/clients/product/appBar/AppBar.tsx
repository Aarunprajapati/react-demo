interface IAppBarProps {
    screenName: string,
    back?: boolean
}
const AppBar: React.FC<IAppBarProps> = (props) => {
    const { screenName } = props
    return (
        <div>
            {screenName}
        </div>
    )
}

export default AppBar
