/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import Tabs from "./components/Tabs"; 
import PropTypes from "prop-types";
import {
  makeStyles,
  lighten,
  useTheme
} from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  TablePagination,
  TableFooter
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

/* const headRows3 = [
  { id: "major", numeric: false, disablePadding: true, label: "MAJOR" },
  { id: "elite", numeric: false, disablePadding: false, label: "ELITE" },
  { id: "engwork", numeric: false, disablePadding: false, label: "ENGINEERING WORKS" },
  { id: "others", numeric: false, disablePadding: false, label: "OTHERS" }
]; */

function EnhancedTableHead3(props) {
  const {
    onSelectAllClick,
    numSelected,
    rowCount
  } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "Select all desserts" }}
          />
        </TableCell>
        {/* {headRows3.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.name ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))} */}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead3.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles3 = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
}));

const EnhancedTableToolbar3 = props => {
  const classes = useToolbarStyles3();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar3.propTypes = {
  numSelected: PropTypes.number.isRequired
};

/* const StyledTableCell4 = withStyles(theme => ({
  head: {
    backgroundColor: '#1f1e2e',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 20
  }
}))(TableCell); */

// Example 5
const useStyles52 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(0.5)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

const useStyles51 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions5(props) {
  const classes = useStyles51();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions5.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData5(name, profile, eligibility, ctc) {
  return { name, profile, eligibility, ctc };
}

const rows5 = [
  createData5("Text Demo(Name)","Text Demo(Profile)","Text Demo(Eligibility)","Text Demo(CTC)"),
  createData5("AAAAA","","",""),
  createData5("BBBBB","","",""),
  createData5("CCCCC","","",""),
  createData5("DDDDD","","","")
].sort((a, b) => (a.major < b.major ? -1 : 1)); // by name code

// Example 6

export default function TablesExamplesPage() {

  // Example 5
  const classes5 = useStyles52();
  const [page5, setPage5] = React.useState(0);
  const [rowsPerPage5, setRowsPerPage5] = React.useState(5);

  const emptyRows5 =
    rowsPerPage5 - Math.min(rowsPerPage5, rows5.length - page5 * rowsPerPage5);

  function handleChangePage5(event, newPage) {
    setPage5(newPage);
  }

  function handleChangeRowsPerPage5(event) {
    setRowsPerPage5(parseInt(event.target.value, 10));
  }


  return (
    <>

     <Tabs> 
       <Button label="MAJOR">
       <Paper className={classes5.root}>
              <div className={classes5.tableWrapper}>
      
                <Table className={classes5.table}>
                {/*  */}
                {/* <TableRow><TableCell colSpan={5} /></TableRow> */}
                   <TableBody style={{backgroundColor:"white"}}>
                   
                  
                    {rows5
                      .slice(
                        page5 * rowsPerPage5,
                        page5 * rowsPerPage5 + rowsPerPage5
                      )
                      .map(row => (
                        <TableRow key={row.name} marginTop={'50px'} style={{borderSpacing:'10px', borderCollapse: "separate"}}>
                          <TableCell><b>NAME</b>
                          <TableCell component="th" scope="row" style={{borderBottom: "none"}}>
                            {row.name}
                          </TableCell></TableCell>
                          <TableCell><b>PROFILE</b>
                          <TableCell style={{borderBottom: "none"}}>{row.profile}</TableCell></TableCell>
                          <TableCell><b>ELIGIBILITY</b>
                          <TableCell style={{borderBottom: "none"}}>{row.eligibility}</TableCell></TableCell>
                          <TableCell><b>CTC</b>
                          <TableCell style={{borderBottom: "none"}}>{row.ctc}</TableCell>
                          <TableCell style={{borderBottom: "none"}}> 
                          <Link to="/google-material/data-displays/tabs">
                          <Button variant="contained" color="secondary">View Report</Button> 
                          </Link>
                          </TableCell></TableCell>
                          </TableRow>
                      ))}
                      <TableRow colSpan={1}></TableRow>

                    {emptyRows5 > 0 && (
                      <TableRow style={{ height: 48 * emptyRows5 }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                    
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={rows5.length}
                        rowsPerPage={rowsPerPage5}
                        page={page5}
                        SelectProps={{
                          inputProps: { "aria-label": "Rows per page" },
                          native: true
                        }}
                        onChangePage={handleChangePage5}
                        onChangeRowsPerPage={handleChangeRowsPerPage5}
                        ActionsComponent={TablePaginationActions5}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Paper> 
       </Button> 
       <Button label="ELITE">
       <Paper className={classes5.root}>
              <div className={classes5.tableWrapper}>
      
                <Table className={classes5.table}>
                {/*  */}
                {/* <TableRow><TableCell colSpan={5} /></TableRow> */}
                   <TableBody style={{backgroundColor:"white"}}>
                   
                  
                    {rows5
                      .slice(
                        page5 * rowsPerPage5,
                        page5 * rowsPerPage5 + rowsPerPage5
                      )
                      .map(row => (
                        <TableRow key={row.name} marginTop={'50px'} style={{borderSpacing:'10px', borderCollapse: "separate"}}>
                          <TableCell><b>NAME</b>
                          <TableCell component="th" scope="row" style={{borderBottom: "none"}}>
                            {row.name}
                          </TableCell></TableCell>
                          <TableCell><b>PROFILE</b>
                          <TableCell style={{borderBottom: "none"}}>{row.profile}</TableCell></TableCell>
                          <TableCell><b>ELIGIBILITY</b>
                          <TableCell style={{borderBottom: "none"}}>{row.eligibility}</TableCell></TableCell>
                          <TableCell><b>CTC</b>
                          <TableCell style={{borderBottom: "none"}}>{row.ctc}</TableCell>
                          <TableCell style={{borderBottom: "none"}}> <Button variant="contained" color="secondary">View Report</Button> </TableCell></TableCell>
                          </TableRow>
                      ))}
                      <TableRow colSpan={1}></TableRow>

                    {emptyRows5 > 0 && (
                      <TableRow style={{ height: 48 * emptyRows5 }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                    
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={rows5.length}
                        rowsPerPage={rowsPerPage5}
                        page={page5}
                        SelectProps={{
                          inputProps: { "aria-label": "Rows per page" },
                          native: true
                        }}
                        onChangePage={handleChangePage5}
                        onChangeRowsPerPage={handleChangeRowsPerPage5}
                        ActionsComponent={TablePaginationActions5}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Paper> 
       </Button> 
       <Button label="ENGINEERING WORKS">
       <Paper className={classes5.root}>
              <div className={classes5.tableWrapper}>
      
                <Table className={classes5.table}>
                {/*  */}
                {/* <TableRow><TableCell colSpan={5} /></TableRow> */}
                   <TableBody style={{backgroundColor:"white"}}>
                   
                  
                    {rows5
                      .slice(
                        page5 * rowsPerPage5,
                        page5 * rowsPerPage5 + rowsPerPage5
                      )
                      .map(row => (
                        <TableRow key={row.name} marginTop={'50px'} style={{borderSpacing:'10px', borderCollapse: "separate"}}>
                          <TableCell><b>NAME</b>
                          <TableCell component="th" scope="row" style={{borderBottom: "none"}}>
                            {row.name}
                          </TableCell></TableCell>
                          <TableCell><b>PROFILE</b>
                          <TableCell style={{borderBottom: "none"}}>{row.profile}</TableCell></TableCell>
                          <TableCell><b>ELIGIBILITY</b>
                          <TableCell style={{borderBottom: "none"}}>{row.eligibility}</TableCell></TableCell>
                          <TableCell><b>CTC</b>
                          <TableCell style={{borderBottom: "none"}}>{row.ctc}</TableCell>
                          <TableCell style={{borderBottom: "none"}}> <Button variant="contained" color="secondary">View Report</Button> </TableCell></TableCell>
                          </TableRow>
                      ))}
                      <TableRow colSpan={1}></TableRow>

                    {emptyRows5 > 0 && (
                      <TableRow style={{ height: 48 * emptyRows5 }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                    
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={rows5.length}
                        rowsPerPage={rowsPerPage5}
                        page={page5}
                        SelectProps={{
                          inputProps: { "aria-label": "Rows per page" },
                          native: true
                        }}
                        onChangePage={handleChangePage5}
                        onChangeRowsPerPage={handleChangeRowsPerPage5}
                        ActionsComponent={TablePaginationActions5}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Paper> 
       </Button> 
       <Button label="OTHERS">
       <Paper className={classes5.root}>
              <div className={classes5.tableWrapper}>
      
                <Table className={classes5.table}>
                {/*  */}
                {/* <TableRow><TableCell colSpan={5} /></TableRow> */}
                   <TableBody style={{backgroundColor:"white"}}>
                   
                  
                    {rows5
                      .slice(
                        page5 * rowsPerPage5,
                        page5 * rowsPerPage5 + rowsPerPage5
                      )
                      .map(row => (
                        <TableRow key={row.name} marginTop={'50px'} style={{borderSpacing:'10px', borderCollapse: "separate"}}>
                          <TableCell><b>NAME</b>
                          <TableCell component="th" scope="row" style={{borderBottom: "none"}}>
                            {row.name}
                          </TableCell></TableCell>
                          <TableCell><b>PROFILE</b>
                          <TableCell style={{borderBottom: "none"}}>{row.profile}</TableCell></TableCell>
                          <TableCell><b>ELIGIBILITY</b>
                          <TableCell style={{borderBottom: "none"}}>{row.eligibility}</TableCell></TableCell>
                          <TableCell><b>CTC</b>
                          <TableCell style={{borderBottom: "none"}}>{row.ctc}</TableCell>
                          <TableCell style={{borderBottom: "none"}}> <Button variant="contained" color="secondary">View Report</Button> </TableCell></TableCell>
                          </TableRow>
                      ))}
                      <TableRow colSpan={1}></TableRow>

                    {emptyRows5 > 0 && (
                      <TableRow style={{ height: 48 * emptyRows5 }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                    
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={rows5.length}
                        rowsPerPage={rowsPerPage5}
                        page={page5}
                        SelectProps={{
                          inputProps: { "aria-label": "Rows per page" },
                          native: true
                        }}
                        onChangePage={handleChangePage5}
                        onChangeRowsPerPage={handleChangeRowsPerPage5}
                        ActionsComponent={TablePaginationActions5}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </Paper> 
       </Button> 
     </Tabs>
           
    </>
  );
}