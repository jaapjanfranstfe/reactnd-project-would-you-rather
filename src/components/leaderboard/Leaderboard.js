import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import UserStats from "./UserStats";
import {connect} from 'react-redux';

const LeaderBoard = ({sortedUserArray}) => (
    <Card>
        <CardContent>
            {sortedUserArray.map(user => <UserStats key={user.id} user={user}/>)}
        </CardContent>
    </Card>
);

function mapStateToProps({users}) {
    const sortedUserArray = Object.values(users).sort((userA, userB) => {
        const scoreA = Object.keys(userA.answers).length + userA.questions.length;
        const scoreB = Object.keys(userB.answers).length + userB.questions.length;

        return scoreB - scoreA;
    });

    return {
        sortedUserArray
    }
}

export default connect(mapStateToProps)(LeaderBoard);