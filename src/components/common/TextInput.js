import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
    /*
    wrapperClass je definisan kao 'form-group',
    if uslov definise sledece: 
        ako je error i duzinia / broj error-a veci od nule odradjuje se sledece:
            wrapperClass se uvecava za prazan string i 'has-error'
    */
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {
                    /*
                    input polje za unost podataka,
                        type: teksutalnog tipa,
                        name: ime
                        className: stilizovanje elementa,
                        placeholder: prikazuje tekst na lementu koji je definisan na pocetku komponente,
                        value: vrednost elementa, definisano na pocetku komponente,
                        onChange: proces koji se primenjuje kada se desi neka promena,
                            definisano na ocetku komponente
                    */
                }
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                {
                    /*
                    ako se javi greska  prikazuje se div element sa svojim sadrzajem, koji ispisuje gresku
                    */
                }
                {
                    error && <div className="alert alert-danger">
                        {error}
                    </div>
                }
            </div>
        </div>
    );
};

// proverava se izlazne vrednosti u komponenti
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;