import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Title from './Title';

function createData(date, todo, done) {
    return { date, todo, done };
}


const data = [
    {
        "date": "08/08",
        "todo": 8,
        "done": 2
    },
    {
        "date": "09/08",
        "todo": 7,
        "done": 5
    },
    {
        "date": "10/08",
        "todo": 5,
        "done": 4
    },
    {
        "date": "11/08",
        "todo": 5,
        "done": 3
    },
    {
        "date": "12/08",
        "todo": 5,
        "done": 7,
    },
    {
        "date": "13/08",
        "todo": 4,
        "done": 5
    },
    {
        "date": "14/08",
        "todo": 6,
        "done": 4
    }
];

export default function Chart() {
    const theme = useTheme();

    return (
            <React.Fragment>
            <Title>Past week</Title>
            <ResponsiveContainer>
            <LineChart
        data={data}
        margin={{ top: 16, right: 16, left: 24, bottom: 0 }}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="todo" stroke="#8884d8" />
            <Line type="monotone" dataKey="done" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
            </React.Fragment>
    );
}
