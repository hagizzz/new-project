
let tournaments = []

export function getTournaments() {
    return tournaments
}

export function getTournamentById(tournamentId) {
    return tournaments.find(tournament => {
        return tournament.id === tournamentId
    })
}

export function addTournament(tournament) {
    tournaments.push({
        id: tournaments.length + 1,
        name: tournament.name,
        users: []
    })
}

export function deleteUserInTournament(tournamentId, userId) {
    const tournamentIndex = tournaments.findIndex(tournament => {
        return tournament.id === tournamentId
    })
    tournaments[tournamentIndex].users = tournaments[tournamentIndex].users.filter(user => {
        return user.id !== userId
    })
}


export function addUserToTournament(tournamentId, user) {
    const tournamentIndex = tournaments.findIndex(tournament => {
        return tournament.id === tournamentId
    })
    tournaments[tournamentIndex].users.push(user)
}


