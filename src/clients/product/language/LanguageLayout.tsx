

const LanguageLayout = (props:any) => {
    const { changeLanguage } = props
    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('hn')}>हिन्दी</button>
            <button onClick={() => changeLanguage('pb')}>Panjabi</button>
        </div>
    )
}

export default LanguageLayout
