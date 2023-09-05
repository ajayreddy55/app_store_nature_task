import "./index.css";


const TabItem = (props) => {

    const {tabItem, changeActiveTab, isActive} = props;
    const {tabId, displayText} = tabItem;

    const tabChangeToClicked = () => {
        changeActiveTab(tabId)
    }

    const activeTabStyle = isActive ? "active-tab" : "";

    return (
        <li className="app-tab-list-item">
            <button className={`app-store-tab-item ${activeTabStyle}`} type="button" onClick={tabChangeToClicked}>{displayText}</button>
        </li>
    );
}

export default TabItem;

