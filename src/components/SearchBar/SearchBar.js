import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const SearchBar = () => {
    return (
        <>
            <Grid item xs={12}>
                <Box mt={10}>
                    <Typography variant="h3" gutterBottom>
                        Search a recipe...
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Type here" variant="outlined" fullWidth />
            </Grid>
        </>
    );
}

export default SearchBar;