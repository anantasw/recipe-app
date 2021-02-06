import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const SearchBar = ({query, searchHandler}) => {

    return (
        <>
            <Grid item xs={12}>
                <Box mt={10}>
                    <Typography variant="h2" gutterBottom>
                        Find a recipe...
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Type here" 
                    variant="outlined" 
                    fullWidth
                    defaultValue={query} 
                    onKeyUp={searchHandler}
                />
            </Grid>
        </>
    );
}

export default SearchBar;