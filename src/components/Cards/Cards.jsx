import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) =>{
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent className>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    {/* Dynamically load numbers */}
                    <Typography variant='h5'>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5} /* seconds */
                            separator=',' /* how to separate  179258465 => 179,258,465*/
                        />
                    </Typography>
                    {/* Create a new date obj and we call toDateString => Wed Jun 23 2021*/}
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5} /* seconds */
                            separator=',' /* how to separate  179258465 => 179,258,465*/
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of recoveries from Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5} /* seconds */
                            separator=',' /* how to separate  179258465 => 179,258,465*/
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of deaths caused by Covid-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    )
}

export default Cards;
