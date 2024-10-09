import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import InputSelect from './InputSelect';

import { DELETE_FILTER, useMainData } from '../reducer/MainReduces';

import { CONDITIONS, CRITERIAS, FIELDS } from './../utils/Constants';

import DeleteIcon from './../assets/delete.svg';

const QueryInputs = () => {
    const dispatch = useDispatch();

    const { data: dataList } = useMainData();

    return (
        <React.Fragment>
            {
                dataList.map((data, index) => {
                    return <div className='flex gap-16 width-100' key={index}>
                        <InputSelect index={index} value={data.field} name='field' label="Fields" options={FIELDS} />
                        <InputSelect index={index} value={data.condition} name='condition' label="Conditions" options={CONDITIONS} />
                        <InputSelect index={index} value={data.criteria} name='criteria' label="Criteria" options={CRITERIAS} />
                        <div className={clsx("flex flex-center", { hidden: !index })}>
                            <img src={DeleteIcon} className='icon cursor-pointer' alt="delete-icon" onClick={() => {
                                dispatch(DELETE_FILTER(index));
                            }} />
                        </div>
                    </div>
                })
            }
        </React.Fragment>
    )
};

export default QueryInputs;
