import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

function InfoBox({title, cases, total}) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title ie. Coronavirus cases */}
        <Typography color="textSecondary">{title}</Typography>

        {/* +120k Number of cases */}
        <h2 className=>{cases}</h2>

        {/* 1.2M Total */}
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
