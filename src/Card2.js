import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    p: {
        textAlign: 'justify',
    }
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="http://www.material-ui.com/images/nature-600-337.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        Design Principles          </Typography>
                    <Typography style={{paddingLeft: 30, paddingRight: 30}}component="p">
                        <p style={styles.p}>
                            <strong>
                            <ol>
                                <li> MaterialUI is a Metaphor</li>
                                <li> Bold, Graphic, Intentional </li>
                                <li> Motion Provides Meaning </li>
                            </ol>
                            </strong>
                        </p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        Share
          </Button>
                    <Button dense color="primary">
                        Learn More
          </Button>
                </CardActions>
            </Card>
        </div>
    );
}



export default withStyles(styles)(SimpleMediaCard);