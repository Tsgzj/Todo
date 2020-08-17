import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { PieChart, Pie, ResponsiveContainer, Cell, label, Legend } from 'recharts';
import Title from './Title';

function createData(status, count) {
    return { status, count }
}

const data = [
    {
        "status": "Done",
        "count": 12
    },
    {
        "status": "Todo",
        "count": 18
    }
];

const colors = ['#0088FE', '#FF8042'];

export default function CompletedChart() {
    const theme = useTheme();

    return (
            <React.Fragment>
            <Title>Overview</Title>
            <ResponsiveContainer>
            <PieChart>
            <Pie data={data} dataKey="count" nameKey="status"
        cx="50%" cy="50%" outerRadius={70} label>
            {
                data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
            }
        </Pie>
            <Legend />
            </PieChart>
            </ResponsiveContainer>
            </React.Fragment>
    );
}
