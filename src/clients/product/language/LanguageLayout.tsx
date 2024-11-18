

const LanguageLayout = (props:any) => {
    const { changeLanguage } = props
    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
        </div>
    )
}

export default LanguageLayout
