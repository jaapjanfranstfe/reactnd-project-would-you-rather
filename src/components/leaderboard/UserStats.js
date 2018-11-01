import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const UserStats = ({user}) => {

    const answered = Object.keys(user.answers).length;
    const created = user.questions.length;

    return <Card>
        <CardContent>
            <Avatar
                alt={user.name}
                src={user.avatarURL}
            />
            <Typography>
                {user.name}
            </Typography>
            <Typography>
                Answered questions {answered}
            </Typography>
            <Typography>
                Created questions {created}
            </Typography>
            <Typography>
                Score {answered + created}
            </Typography>

        </CardContent>
    </Card>
};

export default UserStats;