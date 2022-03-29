import React, {useState} from 'react';
import './style.sass'
import InpitInformation from "../../components/InputInformation";

interface IInformations  {
    usersListInformation: any
}

const InformationUsers: React.FC <IInformations> = (props) => {
    const [stateReadChange, setStateReadChange] = useState(true)
    const readOnlyChange = () => {
        setStateReadChange(false)
    }
    return (
        <div className='main'>
            <div className="main_information-content">
                <div className="main_information-header">
                    <h3>Профиль пользователя</h3>
                    <button onClick={readOnlyChange}>Редактировать</button>
                </div>
                <InpitInformation stateReadChange={stateReadChange} usersListInformation={props.usersListInformation}/>
            </div>
        </div>
    );
};

export default InformationUsers;