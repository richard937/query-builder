import React, { FC } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useMainData } from '../reducer/MainReduces';
import { objFormatter, queryFormatter } from '../utils/formatter';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            className="white"
            hidden={value !== index}
            {...other}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}

const OutPutTab: FC = () => {
    const [value, setValue] = React.useState(0);
    const { data: dataList, conjunction } = useMainData();

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} sx={{
                    '& .MuiTab-root': {
                        color: 'white',
                    },
                    '& .Mui-selected': {
                        color: 'primary',
                    },
                }}>
                    <Tab label="Query JSON" />
                    <Tab label="Query String" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <pre>{JSON.stringify(objFormatter(dataList, conjunction), null, 2)}</pre>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {queryFormatter(dataList, conjunction)}
            </CustomTabPanel>
        </Box>
    );
}

export default OutPutTab;
