import React from 'react';

interface IFilter {
    filterFuncCity?: () => void
    filterFuncCompany?: () => void
}


const Filter: React.FC<IFilter> = (props) => {
    return (
        <div className="main_filter">
            <p>Сортировка</p>
            <div className="main_filter-button">
                <button onClick={props.filterFuncCity}>по городу</button>
                <button onClick={props.filterFuncCompany}>по компании</button>
            </div>
        </div>
    );
};

export default Filter;