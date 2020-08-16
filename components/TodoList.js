import React from 'react';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function TodoList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title' },
      { title: 'Project', field: 'project' },
      { title: 'Context', field: 'context' },
      { title: 'Estimated', field: 'estimated', type: 'numeric' },
      { title: 'Priority', field: 'priority' },
      { title: 'Created', field: 'created', type: 'datetime' },
      { title: 'Completed', field: 'completed', type: 'boolean' }
    ],
    data: [
      { title: 'Complete detail view', project: 'Todo List',  context: 'Coding',
        estimated: 2, priority: '1', created: '2020-08-16 14:00', completed: false },
      { title: 'Modify dashboard charts', project: 'Todo List',  context: 'Research',
        estimated: 3, priority: '1', created: '2020-08-16 12:00', completed: false },
      { title: 'Extract components', project: 'Todo List',  context: 'Refactor',
        estimated: 1, priority: '3', created: '2020-08-16 10:00', completed: true },
      { title: 'Fix emacs debugging tool', project: 'Dev Tool',  context: 'Research',
        estimated: 4, priority: '2', created: '2020-08-15 19:30', completed: false },
      { title: 'Use detail panel instead of detail view?', project: 'Todo List',  context: 'Coding',
        estimated: 2, priority: '2', created: '2020-08-16', completed: false },

    ],
  });

  return (
      <MaterialTable
    title="Editable Example"
    columns={state.columns}
    data={state.data}
    actions={[
      {
        icon: 'edit',
        tooltip: 'Edit User',
        onClick: (event, rowData) => window.location.href = "/list/" + rowData.name,
      },
      rowData => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
      })
    ]}
    options={{
      actionsColumnIndex: -1
    }}
    icons={tableIcons}
      />
  );
}
