import React, { useState } from 'react';
import clsx from 'clsx';

import { useMainData } from '../reducer/MainReduces';
import { queryFormatter } from '../utils/formatter';
import { Button } from '@mui/material';

const QueryOutput = () => {
    const [showMore, setShowMore] = useState(true);
    const { data: dataList, conjunction } = useMainData();
  
    const queryString = queryFormatter(dataList, conjunction);

    return (
        <div className="bg-purple width-100 p20">
            <div className="mx20 white">
                <p>{queryString ? 'Build your Query' : 'Create tag and query'}</p>
                {queryString ? (
                    <div className="mt12 query-text flex flex-justify flex-center">
                        <h4 className={clsx("text-elipsis width-75", { nowrap: showMore })}>{`Query: ${queryString}`}</h4>
                        <Button sx={{ color: 'white', padding: 0 }} variant="text" onClick={() => setShowMore(prev => !prev)}>{showMore ? 'Read More' : 'Show Less' }</Button>
                    </div>
                ) : <h5 className="purple-light mt12">The query you build will be saved in your active view</h5>}
            </div>
        </div>
    );
};

export default QueryOutput;