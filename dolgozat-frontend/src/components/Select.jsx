
import './Select.css';

export default function Select(props) {

    function onChangeFn(event) {
        props.submitFn(event.target.value);
    }

    return(
        <>
            <select name="categoriesSelect" onChange={onChangeFn}>
                {
                    props.values ? 
                        props.values.map((value, index) => {
                            return(
                                <option value={value.id} key={index}>
                                    {value.kategorianev}
                                </option>
                            )
                        })
                    :
                        <option value="-1">Töltés...</option>
                }
            </select>
        </>
    )
}