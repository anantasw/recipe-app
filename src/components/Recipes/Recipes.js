import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Recipe from './Recipe/Recipe'

const Recipes = ({recipes}) => {

    return (
        <>
            <Grid item xs={12}>
                <Box mt={10}>
                    <Typography variant="h5" gutterBottom>
                        Maybe you like chicken...
                    </Typography>
                </Box>
            </Grid>
            <Grid container spacing={2} justify="center">
                { recipes ? recipes.slice(0,4).map((recipe, idx) => (
                    <Recipe key={idx} recipe={recipe} />
                )) : <h2>Loading...</h2> }
            </Grid>
        </>
    );
}

export default Recipes;