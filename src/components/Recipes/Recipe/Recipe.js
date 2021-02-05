import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const Recipe = ({recipe}) => {
    const classes = useStyles();

    return (
        <Grid item xs={6}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={recipe.recipe.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {recipe.recipe.label.length > 16 ? recipe.recipe.label.substring(0,16) + '...' : recipe.recipe.label}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {recipe.recipe.dietLabels}, {recipe.recipe.calories} Calories 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                        size="small" 
                        color="primary"
                        href={recipe.recipe.url}
                        target="_blank">
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Recipe;