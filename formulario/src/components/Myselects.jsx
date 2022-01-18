export default function SelectInput({ opt, value, id}){
    return(
        <div>
            <select>
                {
                opt.map(function(opt){
                    return (
                        <option name={opt}>{opt}</option>
                    )
                })
                }
            </select>
        </div>
    )
}