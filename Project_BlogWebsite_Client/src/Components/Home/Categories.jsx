
import { Button ,makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { categories } from '../../Constants/Data'
import { Link } from "react-router-dom";
const useStyles=makeStyles({
create:{
margin:20,
color:'#123456',
background:'#6495ED',
width:'86%'
},
table:{
border:'1px solid rgba(224,224,224,1)'
},
link:{
    textDecoration:'none',
    color:'inherit',
},

})

const Categories=()=>{
    const classes=useStyles();
 return(
    <>
       <Link to='/create' className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>

     <Table className={classes.table}>
          <TableHead>
              <TableRow>
                <TableCell>
                 <Link to={`/`} className={classes.link}>
                  All Categories
                 </Link>
                  </TableCell>
              </TableRow>
          </TableHead>

        <TableBody>
           {
             categories.map(category=>(
              <TableRow>
                <TableCell>
                  <Link to={`/?category=${category}`} className={classes.link}>
                  {category}
                  </Link>
                  </TableCell>
              </TableRow>
             ))

            }
        </TableBody>
     </Table>
    </>
   )
}
export default Categories;