import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import Search from "../Search/Search";
import { Box } from "@mui/material"

const columns = [
    {
        id: 'slno',
        label: 'SLNO',
        flex: 1,
        //  align:'right',
        //  format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectTitle', label: 'ProjectTitle', flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectDescription', label: 'ProjectDescription', flex: 1,
        // align:'right',
        // format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectStartDate',
        label: 'ProjectStartDate',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectEndDate',
        label: 'ProjectEndDate',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectBudget',
        label: 'ProjectBudget',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Priority',
        label: 'Priority',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectStatus',
        label: 'ProjectStatus',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'ProjectAction',
        label: 'ProjectAction',
        flex: 1,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(slno, ProjectTitle, ProjectDescription, ProjectStartDate, ProjectEndDate, ProjectBudget, Priority, ProjectStatus, Action) {
    // const density = population / size;
    return { slno, ProjectTitle, ProjectDescription, ProjectStartDate, ProjectEndDate, ProjectBudget, Priority, ProjectStatus, Action };
}

const rows = [
    createData(1, 'Ecommerce', 'EcommerceDescription', '01/03/2025', ' 01/09/2025', 1000, 'Low', 'Completed', 'View'),

];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box className="container">
            {/* <Search /> */}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontweight: 900 }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}