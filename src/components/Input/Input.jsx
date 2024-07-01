import "./styles.css";

function Input ({id, name, type, placeholder, label}){
    return (
        <div className='input-wraper'>
            <label className='input-label' htmlFor={id}>
                {label}
            </label>
        <input className='input-component'
            id={id}
            name={name}           
            type={type}
            placeholder={placeholder}
        />
        </div>
    );
};

export default Input;