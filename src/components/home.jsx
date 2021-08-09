import React, {useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Table, TableRow, TableHead, TableBody, TableCell, makeStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadBusinesses, deleteBusiness } from "../redux/actions";

const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px'
  },

  thead: {
      '& > *': {
          background: '#000000',
          color: '#ffffff',
          fontSize: 17
      }
  },

  row: {
      '& > *': {
          fontSize: 16
      }
  }
});

const Home = () => {

  const classes = useStyles();
  let dispatch = useDispatch();

  const {businesses} = useSelector(state => state.data);
  useEffect(() => {
    dispatch(loadBusinesses());
  }, []);


  const deleteBusinessData = (id) => {
    if(window.confirm("Are you sure that you want to delete the Business?")){
        dispatch(deleteBusiness(id));
    }
  };

  let history = useHistory();

  return (
    <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Sorting</TableCell>
                    <TableCell>Followers</TableCell>
                    <TableCell>Edit/Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    businesses && businesses.map((business) => {
                        return (
                            <TableRow className={classes.row}>
                                <TableCell>{business.id}</TableCell>
                                <TableCell>{business.name}</TableCell>
                                <TableCell>{business.sorting}</TableCell>
                                <TableCell>{business.followers}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/editBusiness/${business.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteBusinessData(business.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
  );
};

export default Home;
