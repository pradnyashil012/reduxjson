import {
    FormGroup,
    FormControl,
    Input,
    InputLabel,
    Button,
    makeStyles,
    Typography,
    Box
  } from "@material-ui/core";
  import { useState, useEffect } from "react";
  import { updateBusiness, getBusiness } from "../redux/actions";
  import {useHistory, useParams} from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  
  const useStyles = makeStyles({
    container: {
      width: "50%",
      margin: "5% 0 0 25%",
      '& > *': {
          marginTop: 20
      }
    },
    typography: {
      margin: "5% 0 0"
    }
  });
  
  const initialValues = {
      name: '',
      sorting: '',
      followers: ''
  }
  
  const EditBusiness = () => {
    const [state, setState] = useState(initialValues);
    const {name, sorting, followers} = state;
    const {id} = useParams();
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const {business} = useSelector((state) => state.data);
    const [error, setError] = useState("");

    useEffect(() => {
      dispatch(getBusiness(id));
    }, []);

    useEffect(() => {
      if(business) {
        setState({...business});
      }
    }, [business]);

    // const loadBusinessData = () => {
    //     const response = loadBusiness(id);
    //     setBusiness(response.data);
    // }

  
    const onValueChange = (e) => {
          setState({...business, [e.target.name]: e.target.value});
          
    }
  
    const editBusinessDetails = (e) => {
      e.preventDefault();
        if(!name || !sorting || !followers){
            setError("Please input all the fields!");
        }else {
          dispatch(updateBusiness(state, id));
          history.push("../");
          setError("");
        }
        
    }
  
    return (
      <Box >
      
        <FormGroup className={classes.container}>
          <Typography className={classes.typography}>
              <h2 align={"center"}>Edit Business</h2>
              {error && <h3 style={{color: "red"}}>{error}</h3>}
          </Typography>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" value={name || ""} />
          </FormControl>
          <FormControl>
            <InputLabel>Sorting</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="sorting" value={sorting || ""} />
          </FormControl>
          <FormControl>
            <InputLabel>Followers</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="followers" value={followers || ""} />
          </FormControl>
          <Button variant="contained" onClick={(e) => editBusinessDetails(e)} color="primary">Edit Business</Button>
        </FormGroup>
      </Box>
    );
  };
  
  export default EditBusiness;
  