import { Button } from "antd"


const LanguageLayout = (props:any) => {
    const { changeLanguage } = props
    return (
        <div>
            <Button onClick={() => changeLanguage('en')}>English</Button>
            <Button onClick={() => changeLanguage('hn')}>हिन्दी</Button>
            <Button onClick={() => changeLanguage('pb')}>Panjabi</Button>
        </div>
    )
}

export default LanguageLayout
