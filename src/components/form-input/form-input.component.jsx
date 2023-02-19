import './form-input.styles.scss'
const FormInput = ({label,...otherFields}) => 
{
    //Above object desstructuring using spread operator , explaination below
//  console.log(otherFields)
//     const ak={
//         a:'hey',
//         b:2,
//         c:true
//     }
//     const{a,...c} = ak;
//     console.log(a);
//     console.log(c);
    return(
        <div className='group'>
        <input className='form-input' {...otherFields} />
        <label className={`${otherFields.value.length>0?'shrink' :''} form-input-label`}>{label}</label>
        
        </div>
    )
}

export default FormInput;