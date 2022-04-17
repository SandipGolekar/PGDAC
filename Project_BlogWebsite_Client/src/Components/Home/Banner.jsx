import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles=makeStyles({
image:{
    width:'100%',
    background:`url(${'https://media.istockphoto.com/photos/communication-network-concept-gui-picture-id1210917419?b=1&k=20&m=1210917419&s=170667a&w=0&h=u_LjUh5vvR69GDaIFIzRjHlqcUui0DXonY-2DQnK6QU='})repeat-x black`,
    height:'50vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    '& :first-child' :{
        margintop:'50',
        fontSize:50,
        color:'#f2f2f2',   
    },
}
});

const Banner=()=>{
    const classes=useStyles();
    return(
        <Box className={classes.image}>
          <Typography>PUBLIC BLOG APP</Typography>
        </Box>
    )
}
export default Banner;

