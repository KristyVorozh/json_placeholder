import React, {useState} from 'react';

interface IInformations  {
    usersListInformation: any
    stateReadChange: boolean
}
type ValueListType = {
    name?: string,
    userName?: string,
    email?: string,
    street?: string,
    city?: string,
    zipCode?: string | number,
    phone?: string | number,
    website?: string,
    comment?: string | number
}
const ObjectValue: ValueListType = {
    name: '',
    userName: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    phone: '',
    website: '',
}

const InpitInformation: React.FC<IInformations> = (props) => {
    const [valueList, setValueList] = useState(ObjectValue)
    const onChangeInput = (e: ValueListType) => {
        let newEvent = JSON.parse(JSON.stringify(e))
        setValueList(newEvent);
    }
    const sendFunc = () => {
        if (!(Object.keys(valueList).length === 0 || valueList.name === '' || valueList.comment === '' || valueList.userName === '' || valueList.email === '' || valueList.city === '' || valueList.website === '' || valueList.email === '' || valueList.phone === '' || valueList.zipCode === '' ||valueList.street === '')){
            let listValueJson = JSON.stringify(valueList)
            console.log(listValueJson)
        }
    }
    return (
        <>
            <div className='input_container'>
                <div className="input_label">
                    <p>Name</p>
                    <input
                        value={valueList?.name}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {name: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="text"
                        required
                        placeholder={props.usersListInformation.name}
                    />
                </div>
                <div className="input_label">
                    <p>User name</p>
                    <input
                        value={valueList?.userName}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {userName: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="text"
                        required
                        placeholder={props.usersListInformation.username}
                    />
                </div>
                <div className="input_label">
                    <p>E-mail</p>
                    <input
                        value={valueList?.email}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {email: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="email"
                        required
                        placeholder={props.usersListInformation.email}
                    />
                </div>
                <div className="input_label">
                    <p>Street</p>
                    <input
                        value={valueList?.street}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {street: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="text"
                        required
                        placeholder={props.usersListInformation.address.street}
                    />
                </div>
                <div className="input_label">
                    <p>City</p>
                    <input
                        value={valueList?.city}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {city: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="text"
                        required
                        placeholder={props.usersListInformation.address.city}
                    />
                </div>
                <div className="input_label">
                    <p>Zip code</p>
                    <input
                        value={valueList?.zipCode}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {zipCode: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="number"
                        required
                        placeholder={props.usersListInformation.address.zipcode}
                    />
                </div>
                <div className="input_label">
                    <p>Phone</p>
                    <input
                        value={valueList?.phone}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {phone: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="number"
                        required
                        placeholder={props.usersListInformation.phone}
                    />
                </div>
                <div className="input_label">
                    <p>Website</p>
                    <input
                        value={valueList?.website}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {website: e.target.value}))}
                        readOnly={props.stateReadChange}
                        type="text"
                        required
                        placeholder={props.usersListInformation.website}/>
                </div>
                <div className="input_label">
                    <p>Comment</p>
                    <textarea
                        value={valueList?.comment}
                        onChange={(e) => onChangeInput(Object.assign(valueList, {comment: e.target.value}))}
                    />
                </div>
            </div>
            <div className="main_information-button">
                <button onClick={sendFunc}>Отправить</button>
            </div>
        </>
    );
};

export default InpitInformation;