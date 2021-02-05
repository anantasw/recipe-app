import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Recipe from './Recipe/Recipe'

const Recipes = () => {
    return (
        <>
            <Grid item xs={12}>
                <Box mt={10}>
                    <Typography variant="h5" gutterBottom mt={20}>
                        Special picks for you
                    </Typography>
                </Box>
            </Grid>
            <Grid container spacing={2} justify="center">
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </Grid>
        </>
    );
}

export default Recipes;