import './button.styles.scss';
const Button_TYPE_CLASSES = {
    google:'google-sign-in',
    inverted:'inverted'
};

const Button = ({children,buttonType, ...otherFields}) => {
    return(
        <>
        <button className={`${Button_TYPE_CLASSES[buttonType]} button-container`}>
         {children}
        </button>
        </>
    )
}
export default Button ;