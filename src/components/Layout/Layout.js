import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    }
}));
  
const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1} sm={3} />
                <Grid item container xs={10} sm={6}>
                    {children}
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>
        </div>
    );
}

export default Layout;