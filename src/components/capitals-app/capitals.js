import "./index.css";

const OptionsCapitals = (props) => {

    const {eachCapital} = props;
    const {id, capitalDisplayText} = eachCapital;


    return (
        <option value={id} className="capitals-option">{capitalDisplayText}</option>
    );
}

export default OptionsCapitals;

