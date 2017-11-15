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
  p:{
    textAlign: 'justify'
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
            Material UI
          </Typography>
          <Typography component="p">          
         <p style={styles.p}> Create a visual language that synthesizes classic principles of good design with the innovation and possibility of technology and science.
          They wanted to create a design system that looks good and feels great. That’s what they mean by possibility of technology and science.
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