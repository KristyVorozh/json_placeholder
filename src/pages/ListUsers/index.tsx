import React, {useEffect, useState} from 'react';
import './style.sass'
import Filter from "../../components/Filter";
import {getUsersList} from "../../server/fetchers/getUsers";
import InformationUsers from "../InformationUsers";
import ClipLoader from "react-spinners/ClipLoader";

const ListUsers: React.FC = () => {
    const [usersListArray, setUsersListArray] = useState<any>()
    const [showUsersInformation, setShowUsersInformation] = useState<boolean>(false)
    const [usersListInformation, setUsersListInformation] = useState<any>()
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async () => {
            let usersList = await getUsersList()
            if (usersList){
                setLoading(false)
            }
            setUsersListArray(usersList)
        })()
    },[])
    const filterFuncCity = () => {
        let newArray = [...usersListArray]
        let sortCity = newArray?.sort((a: any, b: any) => a.address.city > b.address.city ? 1 : -1);
        setUsersListArray(sortCity)
    }
    const filterFuncCompany = () => {
        let newArray = [...usersListArray]
        let sortCompany = newArray?.sort((a: any, b: any) => a.company.name > b.company.name ? 1 : -1);
        setUsersListArray(sortCompany)
    }
    const showUsers = (index: number) => {
        usersListArray.forEach((value: any, indexArray: number) => {
            if (index === indexArray) {
                setUsersListInformation(value)
            }
        })
        setShowUsersInformation(true)
    }
    return (
        <div className='main'>
            <Filter filterFuncCity={filterFuncCity} filterFuncCompany={filterFuncCompany}/>
            {loading &&
                <div className='loading'>
                    <ClipLoader />
                </div>
            }
            {(!showUsersInformation && !loading) &&
                <div className="main_users">
                    <h3>Список пользователей</h3>
                    {usersListArray?.map((value: any, index: number) =>
                        <div className="main_users-container">
                            <div className="main_users-container-info">
                                <p>ФИО: <span>{value.name} {value.username}</span></p>
                                <p>город: <span>{value.address.city}</span></p>
                                <p>компания: <span>{value.company.name}</span></p>
                            </div>
                            <div className="main_users-container-about">
                                <button onClick={()=>showUsers(index)}>Подробнее</button>
                            </div>
                        </div>
                    )}
                </div>
            }
            {
                showUsersInformation &&
                <>
                    <InformationUsers usersListInformation={usersListInformation}/>
                </>
            }
        </div>
    );
};

export default ListUsers;