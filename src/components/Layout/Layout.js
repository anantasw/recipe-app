import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));
  
const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} />
                <Grid item container xs={6}>
                    {children}
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </div>
    );
}

export default Layout;