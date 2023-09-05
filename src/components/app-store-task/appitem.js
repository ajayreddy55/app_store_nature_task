import "./index.css";

const AppItem = (props) => {

    const {appDetails} = props;
    const {appName, imageUrl} = appDetails;

    return (
        <li className="app-item-list-item-container-app-store">
            <img src={imageUrl} alt={appName} className="app-item-image" />
            <p className="app-item-name">{appName}</p>
        </li>
    );
}

export default AppItem;

